# TypeScript

----

- See: http://www.typescriptlang.org/Tutorial
- See: https://github.com/Microsoft/TypeScript/wiki/Coding-guidelines
- See: https://github.com/Microsoft/TypeScript/blob/master/src/compiler/core.ts
- See: [TypeScript Deep Dive](https://basarat.gitbooks.io/typescript/)
- See: [TypeDoc](https://typedoc.org/guides/doccomments/#document-your-code)
- See: [Types vs. interfaces in TypeScript](https://blog.logrocket.com/types-vs-interfaces-in-typescript/)

**TDD**
- See: https://github.com/koroandr/decoupling_habr
- See: http://habrahabr.ru/company/ivi/blog/256517/


## Combine types (intersection)

- See: https://www.typescriptlang.org/docs/handbook/2/objects.html#intersection-types

```typescript
interface Colorful {
  color: string;
}

interface Circle {
  radius: number;
}

type ColorfulCircle = Colorful & Circle;
```


## Predicates

- See: https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates

```typescript
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}
```


## Collect Hash-map

See: https://twitter.com/kuflash/status/1400846728664956928

```typescript
enum BookGroup {
  Cool = 'cool',
  Trash = 'trash',
}

type BookGroupType = BookGroup.Cool | BookGroup.Trash;

interface BookType {
  id: string;
  group: BookGroupType;
}

const books: BookType[] = [
  {id: '1', group: BookGroup.Cool},
  {id: '2', group: BookGroup.Trash},
  {id: '3', group: BookGroup.Cool},
]

const booksByGroups: Partial<Record<BookGroupType, BookType[]>> = {};

for (const book of books) {
  const {group} = book;

  const booksByGroup = booksByGroups[group];

  if (booksByGroup) {
    booksByGroup.push(book);
  } else {
    booksByGroups[group] = [book];
  }
}
```


## No null

```typescript
!
```


## Window object mock in tests

```typescript
describe('OAuthCallback', () => {
  beforeEach(() => {
    (global.window as any) = {};
  });

  afterEach(() => {
    (global.window as any) = {};
  });

  it('should register global cb', () => {
    assert.strictEqual(typeof (global.window as any).loginCallback, 'undefined');
    new OAuthCallback(noop);
    assert.strictEqual(typeof (global.window as any).loginCallback, 'function');
  });
});
```


## Optional parameter

```typescript
interface SequencePromiseOptions {
  by?: number;
  items: any[];
  itemPromiseCreator: () => Promise<any>;
}
```

## Array of

```typescript
let resolvers: Array<() => void> = [];

const TEST_CASE: Array<[number, string]> = [
  [100, '100.0 B'],
];
```



## The `in` operator narrowing

- See: https://www.typescriptlang.org/docs/handbook/2/narrowing.html#the-in-operator-narrowing

```typescript
type Fish = { swim: () => void };
type Bird = { fly: () => void };

function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    return animal.swim();
  }

  return animal.fly();
}
```

```typescript
type Fish = { swim: () => void };
type Bird = { fly: () => void };
type Human = {  swim?: () => void, fly?: () => void };

function move(animal: Fish | Bird | Human) {
  if ("swim" in animal) {
    animal // (parameter) animal: Fish | Human
  } else {
    animal // (parameter) animal: Bird | Human
  }
}
```



## Generics

- See: https://habr.com/ru/post/455473/

Тождественная функция — это функция, возвращающая значение переданного в неё аргумента.
```javascript
function identity (value) {
  return value;
}

console.log(identity(1)) // 1
```

```typescript
function identity <T>(value: T) : T {
  return value;
}

console.log(identity<Number>(1)) // 1
```


Generic Class
```typescript
interface GenericInterface<U> {
  value: U
  getIdentity: () => U
}

class IdentityClass<T> implements GenericInterface<T> {
  value: T

  constructor(value: T) {
    this.value = value
  }

  getIdentity () : T {
    return this.value
  }

}

const myNumberClass = new IdentityClass<Number>(1)
console.log(myNumberClass.getIdentity()) // 1

const myStringClass = new IdentityClass<string>("Hello!")
console.log(myStringClass.getIdentity()) // Hello!
```


Usage
```typescript
class Car {
  label: string = 'Generic Car'
  numWheels: Number = 4
  horn() {
    return "beep beep!"
  }
}

class Truck extends Car {
  label = 'Truck'
  numWheels = 18
}

class Vespa extends Car {
  label = 'Vespa'
  numWheels = 2
}

function washCar <T extends Car> (car: T) : T {
  console.log(`Received a ${car.label} in the car wash.`)
  console.log(`Cleaning all ${car.numWheels} tires.`)
  console.log('Beeping horn -', car.horn())
  console.log('Returning your car now')
  return car
}

const myVespa = new Vespa()
washCar<Vespa>(myVespa)

const myTruck = new Truck()
washCar<Truck>(myTruck)
```




















More than 2 related Boolean properties on a type should be turned into a flag.

When stating a rule, the subject should be in the singular (e.g. "An external module cannot..." instead of "External modules cannot...")


```typescript
class Foo {
    x = 3;
    print() {
        console.log('x is ' + this.x);
    }
}

var f = new Foo();
f.print(); // Prints 'x is 3' as expected

// Use the class method in an object literal
var z = { x: 10, p: f.print };
z.p(); // Prints 'x is 10'

var p = z.p;
p(); // Prints 'x is undefined'
```


## Red Flags for this

### Use Instance Functions

```typescript
class MyClass {
    private status = 'blah';

    public run = () => { // <-- note syntax here
        alert(this.status);
    }
}
var x = new MyClass();
$(document).ready(x.run); // SAFE, 'run' will always have correct 'this'
```


### Local Fat Arrow

```typescript
var x = new SomeClass();
someCallback((n, m) => x.doSomething(n, m));
```


### `Function.bind`

```typescript
var x = new SomeClass();
// SAFE: Functions created from function.bind are always preserve 'this'
window.setTimeout(x.someMethod.bind(x), 100);
```


```typescript
var name: string = `Gene`;
var age: number = 37;
var sentence: string = `Hello, my name is ${ name }.
I'll be ${ age + 1 } years old next month.`
```


```typescript
var list: number[] = [1, 2, 3];var list: number[] = [1, 2, 3];
var list: Array<number> = [1, 2, 3];
```


```typescript
enum Color {Red = 2, Green, Blue};
var colorName: string = Color[2];

alert(colorName); // 'Red'

enum Color {
    False = 0,
    Maybe = 1,
    True = -1
};
var colorName: string = Color[-1];
console.log(colorName) // True
```


```typescript
enum Color { Red, Green, Blue }
var color :Color = Color.Green;
```

```typescript
interface ClockInterface {
    currentTime: Date;
    setTime(d: Date);
}

class Clock implements ClockInterface {
    currentTime: Date;
    setTime(d: Date) {
        this.currentTime = d;
    }
    constructor(h: number, m: number) { }
}
```


## Class

```typescript
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return 'Hello, ' + this.greeting;
    }
}

var greeter = new Greeter('world');
console.log(greeter.greet())
```


```typescript
class Animal {
    name:string;
    constructor(theName: string) { this.name = theName; }
    move(distanceInMeters: number = 0) {
        alert(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Snake extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 5) {
        alert('Slithering...');
        super.move(distanceInMeters);
    }
}

class Horse extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 45) {
        alert('Galloping...');
        super.move(distanceInMeters);
    }
}

var sam = new Snake('Sammy the Python');
var tom: Animal = new Horse('Tommy the Palomino');

sam.move();
tom.move(34);
```



## Modules

- Internal — namespace
- External — module



```typescript
let say = (def:string):string => `TypeScript is ${def}!`;
say('pretty amazing');
```



## Управляющие комментарии

- See: http://webstandardsdays.ru/2015/05/21/pres/typescript/?full#myContacts

```typescript
/// <reference path='file-name.d.ts' />
/// <amd-module name='myName' />
/// <amd-dependency path='dir/file' />
/// <amd-dependency path='file' name='var'/>
/// <require path='lib/crypt.d.ts' />
```



```typescript
/// <amd-module name='lib/md5' />
function md5() { ... }
export = md5;
```

Компилируется в:
```typescript
define('lib/md5', ['require', 'exports'], function (require, exports) {
    function md5() { ... }
    return md5;
});
```



```typescript
/// <amd-dependency path='lib/global' />
```

Компилируется в:
```typescript
define(['require', 'exports', 'lib/global'], function (require, exports) { ... });
```



```typescript
/// <amd-dependency path='legacy/base/view' name='View' />
View.someDo();
```

Компилируется в:
```typescript
define(['require', 'exports', 'legacy/base/view'],
    function (require, exports, View) {
        View.someDo();
    }
);
```



```typescript
/// <reference path='legacy/base/view.d.ts' />
/// <amd-dependency path='legacy/base/view' name='View' />
```

Эквивалентно записи:
```typescript
/// <reference path='legacy/base/view.d.ts' />
import View = require('legacy/base/view');
```



```typescript
/// <reference no-default-lib='true' />
```



```typescript
declare module 'lib/crypt' {
    export function md5() :string;
    export function uid() :string;
}
```



```typescript
/// <require path='lib/crypt.d.ts' />
import crypt = require('lib/crypt');

class AppController { ... }
```



## Абстрактные классы

От них нельзя создавать экземпляры — только расширять
```typescript
type int = number;

abstract class A {
    foo(): int { return bar(); }
    abstract bar() : int;
}

class B extends A {
    bar() {
        return 42;
    }
}

new A(); // Error!
new B(); // OK
```
