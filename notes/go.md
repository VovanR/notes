# Go

----

- See: https://golang.org/
- See: https://github.com/golang/go

## Install

On Ubuntu 20.04
```shell
sudo apt-get install golang
```


## Hello World!

- See: https://www.digitalocean.com/community/tutorials/how-to-install-go-on-ubuntu-18-04

```shell
mkdir $HOME/work
```

Create project
```shell
mkdir -p work/src/github.com/user/hello
```

Write `~/work/src/github.com/user/hello/hello.go`
```golang
package main

import "fmt"

func main() {
    fmt.Printf("hello, world\n")
}
```

Compile
```shell
go install github.com/user/hello
```

Run
```shell
hello
```



## Test

- See: https://github.com/matryer/moq



## Install package

```shell
go get github.com/boyter/lc
```

## Remove/Uninstall package

```shell
go clean -i github.com/boyter/lc
```
