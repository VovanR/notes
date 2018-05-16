# CMD

----

## Перейти на другой диск

```cmd
cd /d e:
```

## Создать символическую ссылку

Для создания символической ссылки нужны права администратора. Для этого запускаем `cmd.exe` от имени администратора (правый клик по `cmd.exe` → *"Запустить от имени администратора"*)

```cmd
E:\work\foo\node_modules>mklink /d E:\work\foo\node_modules\app E:\work\foo\src
символическая ссылка создана для E:\work\foo\node_modules\app <<===>> E:\work\foo\src
```

Для Junction права администратора не нужны
```cmd
E:\work\foo\node_modules>mklink /j E:\work\foo\node_modules\app E:\work\foo\src
соединение создано для E:\work\foo\node_modules\app <<===>> E:\work\foo\src
```

```
MKLINK [[/D] | [/H] | [/J]] Link Target

    /D      Creates a directory symbolic link.  Default is a file symbolic link.
    /H      Creates a hard link instead of a symbolic link.
    /J      Creates a Directory Junction.
    Link    specifies the new symbolic link name.
    Target  specifies the path (relative or absolute) that the new link refers to.
```