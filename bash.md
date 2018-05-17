# Bash

----

- See: https://learnxinyminutes.com/docs/ru-ru/bash-ru/
- See: https://github.com/Idnan/bash-guide
- See: https://devhints.io/bash



## Создать копию файла с добавлением `.bak` в конце имени

```shell
sudo cp /etc/ssh/sshd_config{,.bak}
```



## Открытые порты

```shell
netstat -ntlp | grep LISTEN
```



## Копирование текста в терминале

```shell
sudo apt-get install xclip
uptime | xclip
```
Вставлять скопированное средним кликом



## Создать папку и сразу перейти в нее

```shell
mkdir my-new-project && cd $_
```



## Записать gif

```shell
byzanz-record -c --duration 8 -w 400 -h 150 -x 67 -y 197 ./preview/example.gif
```



## Установка старой версии пакета

```shell
apt-cache showpkg libnss3-tools
sudo apt-get install libnss3-tools=2:3.15.1-1ubuntu1
```



## Удалить старое ядро

```shell
ls /boot/
sudo apt-get purge -f linux-image-3.5.0-17-generic
sudo apt-get update && sudo apt-get upgrade && sudo apt-get dist-upgrade
```



## Как добавлять и удалять драйверы и модули ядра в ОС Linux

```shell
ls /lib/modules/$(uname -r)
```


### Добавление модуля

```shell
sudo modprobe foo
```


### Список всех загруженных модулей

```shell
lsmod
```


### Удаление модуля

Добавьте опцию `-r` к команде `modprob`, чтобы удалить модуль

```shell
sudo modprobe -r foo
```

Так же можно использовать команду `rmmod`, которая является простой программой для удаления модуля из ядра Linux

```shell
sudo rmmod foo
```



## Переслать файл по сетке

Отправитель

```shell
nc vovanr.local 2214 | tar xz
```

Получатель

```shell
tar cz README.md | nc -l -p 2214
```



## Обращение к компьютеру по сети

```shell
avahi-browse -a
```



## Файлы

### Список файлов

```shell
find ./ -type f -exec echo {} \;
```

```shell
find ./ -iregex '.*\(mp3\|mp4\|exe\)' -printf '%f\n'
find ./ -iregex '.*\(mp3\|mp4\|exe\)' -printf '%f\0' | xargs -0 dosomething
find ./ -iregex '.*\(mp3\|mp4\|exe\)' -exec subl {}\;
find ./ -iregex '.*\(mp3\|mp4\|exe\)'
```


### Найти и заменить в файлах

```shell
find ./ -type f -name "*.js" -print0 | xargs -0 sed -i '' -e 's/foo/bar/g'
find ./ -type f -name "*.js" -exec perl -pi -e "s/ {4,4}'AjaxLinks',?\n//g" '{}' \;
```

Если в регулярном выражении нет одинарных кавычек, то она оборачивается не в двойные, а одинарные:

```shell
find ./ -type f -name "*.js" -exec perl -pi -e 's/^    \$\, _\, Backbone/    \$,\n    _,\n    Backbone/g' '{}' \;
```


### cut
Вывести нужные колонки
```shell
cut -d ' ' -f3,5,8 ./foo.txt
```
Выводит 3, 5 и 8 колонки из файла. Разделитель задаётся через `-d`


### tree
Выводит дерево каталога, исключая 2 папки
```shell
tree -I 'node_modules|vendor'
```

Показать структуру директории на 3 уровнями вглубь
С размерами файлов и включая скрытые директории
```shell
tree -LhaC 3
```


### head
Вывести первые 5 строк
```shell
head -n5 <filename>
```


### tail
Вывести последние 5 строк
```shell
tail -n5 <filename>
```


### column
Отобразить разделенный запятыми файл в виде столбцов
```shell
column -s, -t <delimited_file>
```


### Конвертировать line endings (конец строки) from Windows to Unix

```shell
find ./ -type f -name "*.php" -exec dos2unix {} \;
```


### Удалить доки

```shell
find ./ -type f -name "*.doc*" -exec rm {} \;
```


### Удалить всё, кроме

Удалит все файлы и папки в текущей директории кроме `foo`
```shell
rm -rf !(foo)
```


### Расширение файла в нижний регистр переименовать

```shell
find ./ -type f -exec rename "s/\.JPG$/.jpg/" *.jpg {} \;
```


### Заменить пробелы на подчеркивания

```shell
find ./ -type f -exec rename "s/ /_/" *.jpg {} \;
```


### Транслитерация кириллических имён файлов

```shell
find ./ -type f -exec totranslit.sh {} \;
```

И папки

```shell
find ./ -type d -exec totranslit.sh {} \;
```


### `sed`
```shell
sed -i "s/{find}/{replace}/g" <filename>
```


### Прочесть данные из файла Экселя (Excel)

```shell
cat <(unzip -p /Users/bolk/Downloads/spisokl-gorodov.xlsx xl/sharedStrings.xml |
awk -v RS=t '/^>.*<\/$/ {gsub("[<>/]", ""); print $0}' |
tr "[:upper:]" "[:lower:]" |
iconv -f utf8 -t cp1251) ~/Downloads/lop2v2/lop2v2.txt |
pypy slovohod.py /dev/stdin моибуквы
```


### Зашифровать папку

```shell
tar -cvpj /path/to/directory | openssl aes-256-cbc -kfile /path/to/enc.key | split -d -b 4000m - backup.tar.bz2.enc.
```

Расшифровать:

```shell
cat backup.tar.bz2.enc.* | openssl aes-256-cbc -d -kfile /path/to/enc.key | tar xvjf -
```


### Архивация

See: http://www.thegeekstuff.com/2010/04/unix-tar-command-examples/

```shell
tar cvf archive_name.tar dirname/
tar cvzf archive_name.tar.gz dirname/
tar cvfj archive_name.tar.bz2 dirname/
```


### Разархивация разархивировать

```shell
tar xvf archive_name.tar
tar xvfz archive_name.tar.gz
tar xvfj archive_name.tar.bz2
```

Выборочный файл или директорию

```shell
tar xvf archive_file.tar /path/to/file
tar xvf archive_file.tar /path/to/dir/
tar xvf archive_file.tar /path/to/dir1/ /path/to/dir2/
tar xvfz archive_file.tar.gz /path/to/file
tar xvfz archive_file.tar.gz /path/to/dir/
tar xvfj archive_file.tar.bz2 /path/to/file
tar xvfj archive_file.tar.bz2 /path/to/dir/
```

Файлы по расширению

```shell
tar xvf archive_file.tar --wildcards '*.pl'
```

В выбранную директорию

```shell
tar -xzf foo.tar.gz -C bar/
```


### Поиск текста в файлах

```shell
ack-grep -lr fancybox ./
ack-grep -r --type=js  fancybox ./
ack-grep -r --ignore-dir=CACHE --type=js ^require ./ > lol.txt
```

Игнорировать регистра букв

```shell
ack-grep -i
```


## SSH по PEM-ключу

```shell
cmod 600 path/to/key.pem
ssh username@ip -i path/to/key.pem
```



## Монтируем шифрованный раздел

```shell
sudo mkdir /media/myUSB
sudo ecryptfs-unwrap-passphrase /media/DISK/.ecryptfs/USERNAME/.ecryptfs/wrapped-passphrase
	system password
	outputs hex code
    1234567890qwertyuiopasdfghjklzxc
sudo ecryptfs-unwrap-passphrase /media/DISK/.ecryptfs/USERNAME/.Private
	paste hex code
sudo ecryptfs-add-passphrase --fnek
	paste hex code
	Inserted auth tok with sig [0987654321qwerty] into the user session keyring
	Inserted auth tok with sig [1234567890asdfgh] into the user session keyring
sudo mount -t ecryptfs /media/DISK/.ecryptfs/USERNAME/.Private /media/myUSB
	1234567890qwertyuiopasdfghjklzxc
	aes
	16
	n
	y
	1234567890asdfgh

sudo umount -t ecryptfs /media/myUSB
```



## Вес размер каталога

```shell
du -sh .git
```



## Свободно места на диске

```shell
df -h
```



## Картинки

### Ресайз картинок

```shell
find ./ -type f -exec vresize.sh {} \;
```


### Спрайт из картинок

`montage` — одна из программ `imagick`, `-tile 10×1` — по 10 кадров в строке в 1 строку, `-geometry` 100×200 — ширина и высота кадров в результирующем файле, `money01.png ... money10.png` — исходные файлы кадров (могут быть разных размеров), `money.png` — файл результата (соответственно, получится файл размера 1000×200).

- See: http://andrey.ws/create-image-sprite-via-imagemagick
- See: http://www.imagemagick.org/Usage/montage/
- See: http://www.imagemagick.org/script/montage.php

```shell
montage -background transparent -tile 1x7 -geometry 25x25 money01.png money02.png money03.png money04.png money05.png money06.png money07.png money08.png money09.png money10.png money.png
```

```shell
montage -background transparent -tile f1x -geometry +0+1 facebook.png  lj.png  mail.png  ok.png  twitter.png  vk.png  ya.png sprite-share-big.png
```

```shell
montage -background transparent -tile x1 -geometry +0+0 attack-aniimation__strafe_* attack-aniimation__strafe.png
```


## Наложение водяного знака (watermark, вотермарк)
```shell
composite -compose color-burn -gravity Center ./watermark.jpg ./photo.jpg ./result.jpg
```


## Ресайз картинки ImageMagick
```shell
identify -format "%wx%h" $ARG
cat enter.txt | xargs sh ~/.local/bin/cropp.sh
nano ~/.local/bin/cropp.sh
sourcer
nano enter.txt
```

`595x490`

```shell
convert $ARG -crop "522x388+35+31" $ARG
```

`300x247`

```shell
convert $ARG -crop "263x196+18+16" $ARG
```

`218x180`

```shell
convert $ARG -crop "191x143+12+11" $ARG
```


## Обрезать прозрачную область картинки ImageMagick

```shell
convert images/restore.png -trim +repage images/restore.png
```


## Создаем анимированную гифку

```shell
convert -delay 32 -loop 0 anim* anim.gif
```


## `base64`

```shell
base64 -w 0 image.jpg > image.jpg.base64
```
Выдаст `<HASH>`, добавляем данные о формате файла
`"data:image/jpeg;base64,<HASH>"`



## Архивы

### Нарезать большой архив на части

```shell
split -b 100m archive.tar.gz archive.
```

На выхлопе получим файлы по 100 метров с именами `archive.aa` `archive.ab` `archive.ac` ...
Собрать все это в архив обратно:

```shell
cat archive.?? > archive.tar.gz
```



## `rsync`

### Забрать каталог `data` с удаленного сервера

```shell
rsync -avz USER@HOST:/usr/local/www/data/foo.ru/www/data/ ./
rsync -avz -e ssh USER@HOST:~/www/data ./
rsync -avz -e "ssh -p 6666" USER@HOST:~/www/data ./
```

### Загрузить файл на сервер

```shell
rsync -a www/css/main.css USER@HOST:www/css/
```


### Бэкапим папку "Мои документы"

```shell
rsync -avz --progress --delete '/media/username/Documents/Мои документы' /media/My-Book-Live/backup --exclude ".*" --exclude "Thumbs.db"
```



## `scp` copy over SSH

```shell
scp -r USER@HOST:~/www/data ./
```



## `wget`

### Скачать список файлов

```shell
wget -i list.txt
```



## patch

```shell
patch <file_destination> <file_patch>
```



## IP

```shell
nslookup ya.ru
```



## Add group in Mac

- See: http://serverfault.com/questions/20702/how-do-i-create-user-accounts-from-the-terminal-in-mac-os-x-10-5

```shell
sudo dscl . list groups gid
sudo dscl . list /Users uid
```



## MySQL

### Импортировать дамп

```shell
mysql -f -h DBSRV -u USERNAME --default-character-set=utf8 DBNAME < dump.sql
```


### `mysqldump`

Снять дамп базы данных на сервере
Подключаемся по `ssh`
Начинается с пробела — чтобы пароль не попал в `history`

```shell
 mysqldump -h DBSRV -u USERNAME -pPASSWORD --skip-opt --add-locks --lock-tables --extended-insert --create-options -cq DBNAME > dump.sql
```



## `cron`

```shell
crontab -e
```

```cron
MAILTO="mail@gmail.com"
PATH="/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin"
22 2      *       *       *      /usr/bin/php ~/www/example.com/req/cron/parce_1c.php
@daily ~/www/example.com/req/log/packlog ~/www/example.com/req/log/full.log archive/
```



## Список установленных пакетов

```shell
dpkg --get-selections | grep -v deinstall
```



## Свернуть программу в консоли

`Ctrl + z`

Список свернутых программ

```shell
jobs
```

Восстановить

```shell
%1
```

Продолжить выполнение программы в фоне

```shell
bg %1
```



```shell
sudo update-alternatives --config x-cursor-theme
sudo update-alternatives --config x-www-browser
```


Переименовать компьютер (rename PC `hostname`)
Вся информация: просто `hostnamectl`

```shell
sudo hostnamectl set-hostname vovanr-laptop
```

Переименовать в хостах (вторая строка)

```shell
sudo vim /etc/hosts
```



## Вывести все IP-адреса из файлов логов

```shell
grep -roE '[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}'
```



## Скрипты

### Shebang

- See: http://en.wikipedia.org/wiki/Shebang_(Unix)

```bash
#!/usr/bin/env bash

echo "Hello World!"
```



## Bash
- Prefer `${var,,}` and `${var^^}` over `tr` for changing case
- Prefer `${var//from/to}` over `sed` for simple string replacements
- Prefer `[[` over `test` or `[`
- Prefer process substitution over a pipe in `while read` loops
- Use `((` or `let`, not `$((` when you don't need the result



### Help

- See: https://github.com/github/hub/blob/master/script/install.sh

```bash
#!/usr/bin/env bash
# Usage: [sudo] [prefix=/usr/local] ./install
set -e

case "$1" in
'-h' | '--help' )
  sed -ne '/^#/!q;s/.\{1,2\}//;1d;p' < "$0"
  exit 0
  ;;
esac
```



### Download array

- See: https://github.com/oranja/diff-so-fancy/blob/96b6ca05777123865986aec98d2d7d03a73ec7ed/update-deps.sh

```bash
#!/usr/bin/env bash

URL_BASE="https://url"
FILES=( "Foo.md" "Bar.js" )

for file in "${FILES[@]}";
do
  url="$URL_BASE/$file"
  echo "$url"
  curl -#Lo "lib/$file" "$url"
done
```



### if else

- See: https://www.gnu.org/software/bash/manual/html_node/Bash-Conditional-Expressions.html

```
[ -a FILE ] Правда если FILE существует.
[ -b FILE ] Правда если FILE существует и это специальный блоковый файл.
[ -c FILE ] Правда если FILE существует и это специальный знаковый файл.
[ -d FILE ] Правда если FILE существует и это директория.
[ -e FILE ] Правда если FILE существует.
[ -f FILE ] Правда если FILE существует и это регулярный файл.
[ -g FILE ] Правда если FILE существует и установлен SGID бит.
[ -h FILE ] Правда если FILE существует и это символический ссылка.
[ -k FILE ] Правда если FILE существует и второй промежуточный бит округления установлен.
[ -p FILE ] Правда если FILE существует и это named pipe (FIFO).
[ -r FILE ] Правда если FILE существует и он доступен на чтение.
[ -s FILE ] Правда если FILE существует и больше нуля.
[ -u FILE ] Правда если FILE существует и SUID (set user ID) бит установлен.
[ -w FILE ] Правда если FILE существует и он доступен на запись.
[ -x FILE ] Правда если FILE существует и он доступен на исполнение.
[ -O FILE ] Правда если FILE существует принадлежит существующему пользователю
[ -G FILE ] Правда если FILE существует принадлежит существующей группе.
[ -L FILE ] Правда если FILE существует и это символический ссылка.
[ -N FILE ] Правда если FILE существует и был изменен с тех пор как был прочитан.
[ -S FILE ] Правда если FILE существует и это сокет.
[ FILE1 -nt FILE2 ] Правда, если файл FILE1 изменялся чаще чем FILE2, или есои FILE1 существует, а FILE2 нет.
[ FILE1 -ot FILE2 ] Правда, если файл FILE1 старше чем FILE2, или FILE1 существует, а FILE2 нет.
[ FILE1 -ef FILE2 ] Правда, если FILE1 и FILE2 относятся к одному устройству и номеру инода.
[ -o OPTIONNAME ] Правда если shell опция "OPTIONNAME" включена.
[ -z STRING ] Правда если длинна "STRING" равна 0.
[ -n STRING ] or [ STRING ] Правда если длинна "STRING" не равна 0.
[ STRING1 == STRING2 ] Правда если выражения эквивалентны.
[ STRING1 != STRING2 ] Правда если выражения не эквивалентны.
[ STRING1 < STRING2 ] Правда если "STRING1" лексикографически упорядоченно до "STRING2".
[ STRING1 > STRING2 ] Правда если "STRING1" лексикографически упорядоченно после "STRING2".
[ ARG1 OP ARG2 ] "OP" это один из следующих параметров -eq, -ne, -lt, -le, -gt or -ge. Эти бинарные арифметические операторы возвращают результат "правда" если "ARG1" эквивалентен(-eq), не эквивалентен(-ne), меньше чем(-lt), меньше или эквивалентен(-le), больше чем(-gt), больше или эквивалентно(-ge) к "ARG2".
[ ! EXPR ] правда если выражение EXPR не справедливо.
[ ( EXPR ) ] возвращает значение EXPR. Это может быть использовано для изменения приоритета операторов.
[ EXPR1 -a EXPR2 ] правда, если оба выражения EXPR1 и EXPR2 справедливы.
[ EXPR1 -o EXPR2 ] правда, если хотя бы одно выражение EXPR1 или EXPR2 справедливы.
```



### Exit Status:

```bash
echo -e "Error: Directory does not exists"
exit 2
# Return 2
# Exit Status: Incorrect usage
```

```bash
echo -e "Successful execution"
exit 0
# Return 0
# Exit Status: Success
```



### Для отладки

```bash
echo -e "\n"
echo -e "script:\t"$0
echo -e "arguments.lenght:\t"$#
echo -e "удачна ли предыдущая комманда ( 0 - удачная ):\t"$?
echo -e "PID:\t"$$
echo -e "last PID:\t"$!
echo -e "all arguments:\t"$*
echo -e "all arguments2:\t"$@
echo -e "last argument of last sh:\t"$_
```



### Разбить имя сайта на массив, если аргумент задан с субдоменом (`v2.example`)

```bash
site=(${1//./ })
# Показать весь массив
# echo ${site[@]}
# Показать отдельные элементы массива
# echo ${site[0]}
# echo ${site[1]}
```



## Управление в терминале

### Emacs mode

`C-r` — Поиск по истории

`C-g` — Выход из поиска по истории


`A-.` — Аргументы предыдущих команд


`C-a` — Home

`C-e` — End

`C-f` — Right

`C-b` — Left

`C-p` — Up

`C-n` — Down

`A-f` — Конец слова

`A-b` — Начало слова


`C-d` — Delete

`C-h` — Backspace

`C-w` — C-Backspace

`A-d` — Вырезать до конца слова

`C-k` — Вырезать до конца строки

`C-u` — Вырезать до начала строки

`C-y` — Вставить вырезанное

`C-_` — Отменить изменения


`C-j` — Enter


### vi mode

Включить
```shell
set -o vi
```

Показать какой режим сейчас активирован
```shell
set -o | grep -E "emacs|vi"
```

Вернуть
```shell
set -o emacs
```

Можно добавить `set -o vi` в `.bashrc` или `.bash_profile`



## Shell

- See: https://github.com/thoughtbot/guides/tree/master/best-practices#shell

- Don't parse the output of `ls`. See [here](http://mywiki.wooledge.org/ParsingLs) for details and alternatives
- Don't use `cat` to provide a file on `stdin` to a process that accepts file arguments itself
- Don't use `echo` with options, escapes, or variables (use `printf` for those cases)
- Don't use a `/bin/sh` [shebang]http://en.wikipedia.org/wiki/Shebang_(Unix) unless you plan to test and run your
  script on at least: Actual `SH`, Dash in POSIX-compatible mode (as it
  will be run on Debian), and Bash in POSIX-compatible mode (as it will be run on OS X)
- Don't use any non-POSIX [features](http://mywiki.wooledge.org/Bashism) when using a `/bin/sh`
  [shebang]http://en.wikipedia.org/wiki/Shebang_(Unix)
- If calling `cd`, have code to handle a failure to change directories
- If calling `rm` with a variable, ensure the variable is not empty
- Prefer "$@" over "$\*" unless you know exactly what you're doing
- Prefer `awk '/re/ { ... }'` to `grep re | awk '{ ... }'`
- Prefer `find -exec {} +` to `find -print0 | xargs -0`
- Prefer `for` loops over `while read` loops
- Prefer `grep -c` to `grep | wc -l`
- Prefer `mktemp` over using `$$` to "uniquely" name a temporary file
- Prefer `sed '/re/!d; s//.../'` to `grep re | sed 's/re/.../'`
- Prefer `sed 'cmd; cmd'` to `sed -e 'cmd' -e 'cmd'`
- Prefer checking exit statuses over output in `if` statements (`if grep -q ...; `, not `if [ -n "$(grep ...)" ];`)
- Prefer reading environment variables over process output (`$TTY` not `$(tty)`, `$PWD` not `$(pwd)`, etc)
- Use `$( ... )`, not backticks for capturing command output
- Use `$(( ... ))`, not `expr` for executing arithmetic expressions
- Use `1` and `0`, not `true` and `false` to represent boolean variables
- Use `find -print0 | xargs -0`, not `find | xargs`
- Use quotes around every `"$variable"` and `"$( ... )"` expression unless you want them to be word-split and/or interpreted as globs
- Use the `local` keyword with function-scoped variables
- Identify common problems with [`shellcheck`](http://www.shellcheck.net/)


## Советы

- See: http://habrahabr.ru/blogs/linux/118279/

очень простой способ передать файлы с машины на машину — `tar cz. | nc -l -p 2214` (на передающей стороне) и `nc <адрес> 2214 | tar xz` (на принимающей).
`2214` — номер порта, выбирается по желанию. в разных версиях `nc` нужно писать `nc -l -p` или `nc -l`

в локальной сети из дефолтно-настроенных убунт, можно обращаться к машинам по имени, а не по айпи: `username-desktop.local` отрезольвится в `ip` машины, которую назвали `username-desktop`. это магия `mdns`, спасибо *Apple*

`avahi-browse -a` быстро покажет список имен машин с в локальной сети, а ключ `-r` покажет сразу и их `ip`. как и в предыдущем хинте, требуется `avahi`, он есть в дефолтной убунте. сама команда — в пакете `avahi-utils`

пользуйтесь `Ctrl-R` в консоли, чтобы не жать «вверх» по сто раз
`history` не резиновый. если что-то было забито в историю интерпретатора, рано или поздно оттуда может исчезнуть, не полагайтесь на него, как на справочник

используйте `set -e` в скриптах. неотработавший `cd` во временный каталог может надолго испортить настроение содержимое `/home`

проверяйте код возврата

чтобы вернуться в предыдущий каталог, есть команда `cd -`. в `zsh` еще есть команда `d` еще есть команда `dirs -v`, показывающая историю переходов. еще в `zsh` можно делать вот так: `cd -2`

пишите в скриптах длинные `--варианты` параметров
не пишите в скриптах `rm -rf $VAR/`

используйте `visudo` для редактирования `sudoers`

потеряли пароль рута? при загрузке укажите ядру параметр `init=/bin/bash` и сбросьте пароль через `passwd`

у `grep` есть полезный параметр `--color`

команда, чтобы перечитать отредактированный файл с переменными окружения: `source /etc/environment`.

пользуйтесь `bash -x` для отладки скриптов

пользуйтесь `strace` для отладки всего остального. от лишнего выхлопа спасет параметр `-e имя_вызова`
не путайте `/bin/sh` и `/bin/bash`, это не всегда одно и то же. особенно в дебиане, особенно в убунте

если на команду повешен алиас, то запустить ее «настоящую» можно, добавив в начале бэкслеш например: `\ls`

если терминал переклинило после некорректного выхода из псевдографической программы или вырвавшегося на просторы `stdout` мусора, есть волшебная команда `reset`

`exec >file` в скрипте перенаправит его вывод в файл и не перезапустит скрипт

используйте в скриптах `mktemp` для создания временных файлов и каталогов

пишите переменные вот так: `${VAR}`

`VAR=X` и `export VAR=X` — разные вещи

`dd` может показывать, сколько он уже скопировал, если пнуть его через `kill -USR1`

`kill` может принимать аргументом номер задачи, а не только идентификатор процесса: `kill %1`

`jobs`, `bg`, `fg`, `disown` — тоже так умеют

если «вышли» из программы через `Ctrl-Z`, вернуться можно командой `fg`

`watch` и `repeat` уже написаны, не надо велосипедить их через `while true`

`at` тоже уже написан, а `sleep` понимает время не только в секундах

`sudo echo > file` открывает файл на запись не с правами рута. это делается так: `sudo sh -c 'echo > file'`
