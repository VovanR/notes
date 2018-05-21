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


### Удалить ссылку

Ссылку на директорию
```
rmdir E:\foo\bar /q
```

Ссылку на файл
```
del E:\foo\bar
```



## Fix current directory when running script as administartor

- See: https://www.codeproject.com/Tips/119828/Running-a-bat-file-as-administrator-Correcting-cur

Если запустить скрипт `.bat` файла от администратора, то текущая директория `%cd` будет указывать на `system32`  
Надо добавить следующие 2 строки

```bat
@setlocal enableextensions
@cd /d "%~dp0"

echo %cd%
```



## Переменные `%variable%`

```bat
set filepath=%cd%\foo\bar

if exist del %filepath%
```



## Удалить директорию, символическую ссылку или файл

```bat
set filepath=%cd%\foo\bar

if exist %filepath% rmdir %filepath% /q
if exist %filepath% del %filepath%
```



## Комментарии `REM`

```bat
REM Run this script as administrator

echo "Hello World!"
```

Не выводить комментарии в консоль. Добавить `@echo off`
```bat
@echo off

REM Run this script as administrator

echo "Hello World!"
```



## Остановить выполнение скрипта

Например, после выполнения показать сообщение. По умолчанию консоль закрывается после выполнения скрипта

```bat
echo "Hello World!"

pause
```