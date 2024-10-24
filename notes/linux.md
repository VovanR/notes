# Linux

----

- See: [Альтернативы программ](https://alternativeto.net/software/alfred/?platform=linux)
- See: [command-line JSON processor](https://stedolan.github.io/jq/)



## Copy/Paste

- See: https://ostechnix.com/how-to-use-pbcopy-and-pbpaste-commands-on-linux/

Format JSON
```shell
pbpaste | jq | pbcopy
```

Copy file content
```shell
pbcopy < file.txt
```



## Блокировка экрана `Win + l` Xubuntu

`Settings -> Keyboard -> application Shortcuts`

```nohighlight
xflock4		Super + l
```



## Install Fonts

Create a folder `~/.fonts` and move all fonts to that directory.   
I recommend you copy only the `*.ttf` files to `~/.fonts`, and run `fc-cache -fv`.

```shell
mkdir -p ~/.fonts/truetype
```

Download any TrueType font
- [Hack](https://github.com/chrissimpkins/Hack)
- [Input](http://input.fontbureau.com/)
- [IBM Plex Mono](https://github.com/IBM/plex/releases)


```nohighlight
~/.fonts/
└── truetype
    ├── Hack
    │   ├── Hack-BoldItalic.ttf
    │   ├── Hack-Bold.ttf
    │   ├── Hack-Italic.ttf
    │   └── Hack-Regular.ttf
    └── InputMono
        ├── InputMono-BoldItalic.ttf
        ├── InputMono-Bold.ttf
        ├── InputMono-Italic.ttf
        └── InputMono-Regular.ttf
```

```shell
sudo apt install fonts-ibm-plex fonts-hack
```




## Window manager shortcuts

### Xfce

`A` + `Tab` — for cycling and changing windows

`Super` + `Tab` — for cycling windows for the same application

`A` + `F5` — for maximizing windows horizontally

`A` + `F6` — for maximizing windows vertically

`A` + `F7` — for maximizing windows

`A` + `Space` — for the window operations menu



## Узнать код клавиши

```shell
showkey -a
```



## Поиск файлов

```shell
locate -b foo
```



## Установка `sudo`

```shell
su
apt-get install sudo
adduser username sudo
exit
```
Перезагрузить систему



## User Groups

List of groups user
```shell
groups
```

Add user to group
```shell
sudo gpasswd --add <username> <group_name>
```

or
```shell
sudo usermod -a -G <group_name> <username>
```


## Show all groups

```shell
less /etc/group
```



## locale

Доступные локали
```shell
locale -a
```

Системные настройки
```shell
locale
```

```nohighlight
LANG=ru_RU.UTF-8
LANGUAGE=en
LC_CTYPE="ru_RU.UTF-8"
LC_NUMERIC=ru_RU.UTF-8
LC_TIME=ru_RU.UTF-8
LC_COLLATE="ru_RU.UTF-8"
LC_MONETARY=ru_RU.UTF-8
LC_MESSAGES="ru_RU.UTF-8"
LC_PAPER=ru_RU.UTF-8
LC_NAME=ru_RU.UTF-8
LC_ADDRESS=ru_RU.UTF-8
LC_TELEPHONE=ru_RU.UTF-8
LC_MEASUREMENT=ru_RU.UTF-8
LC_IDENTIFICATION=ru_RU.UTF-8
LC_ALL=ru_RU.UTF-8
```

Генерация
```shell
sudo locale-gen ru_RU ru_RU.UTF-8 ru_RU ru_RU.UTF-8
sudo dpkg-reconfigure locales
```

Установка `CP1251`
```shell
sudo localedef -c -i ru_RU -f CP1251 ru_RU.CP1251
```


## Настройка часового пояса. Time zone

```shell
sudo dpkg-reconfigure tzdata
```
"Europe" → "Moscow"



## Устанавливаем проги

```shell
sudo apt-get install \
    ack \
    alien \
    cabextract \
    chromium-browser \
    cmake \
    curl \
    deja-dup \
    dos2unix \
    exuberant-ctags \
    filezilla \
    git \
    git-gui \
    gparted \
    meld \
    ntp \
    poedit \
    smartmontools \
    tasksel \
    tmux \
    tree \
    unrar \
    usb-creator-gtk \
    virtualbox \
    whois \
    xclip \
    jq \
    fzf
```

Top
```shell
sudo apt-get install htop iftop iotop
```

Xfce panel plugins
```shell
sudo apt install \
    indicator-power \
    xfce4-fsguard-plugin \
    xfce4-genmon-plugin \
    xfce4-mount-plugin \
    xfce4-sensors-plugin \
    xfce4-timer-plugin
```
```shell
sudo chmod u+s /usr/sbin/hddtemp
```


```shell
sudo gem install tmuxinator
```

Фото, видео, аудио

- [Lightworks](https://www.lwks.com/index.php?option=com_lwks&view=download&layout=d&dtype=lin_public_deb&Itemid=206)

```shell
sudo apt install \
    audacity \
    gcolor2 \
    gimp \
    gpick \
    hugin \
    imagemagick \
    inkscape \
    optipng \
    pinta \
    rawtherapee \
    vlc
```

Для гитары
```shell
sudo apt install \
    tuxguitar \
    tuxguitar-alsa \
    tuxguitar-oss \
    tuxguitar-jsa
```

Работа
```shell
sudo apt install \
    python \
    python3 \
    python-dev \
    python3-dev \
    postgresql \
    postgresql-contrib \
    libpq5 \
    redis-server \
    python-virtualenv \
    rabbitmq-server \
    libpq-dev \
    pgadmin3 \
    python3-pip \
    libxml2-dev \
    libxslt1-dev \
    libmemcached-dev
```

```shell
sudo update-alternatives --install /usr/bin/exctags exctags /usr/bin/ctags-exuberant 10
```

Если не устанавливали проприетарные дополнения. Например для проигрывания `.mp3`
```shell
sudo apt install xubuntu-restricted-extras
```



### Oracle JDK/JRE

- See: http://www.webupd8.org/2012/01/install-oracle-java-jdk-7-in-ubuntu-via.html

```shell
sudo add-apt-repository ppa:webupd8team/java
sudo apt-get update
sudo apt-get install oracle-java8-installer oracle-java8-set-default
```



### Dropbox

- See: https://www.dropbox.com/install

```shell
sudo dpkg -i ~/Downloads/dropbox_2015.10.28_amd64.deb
```



### Atom

- See: https://atom.io/

Download `.deb`
```shell
sudo dpkg -i ~/Downloads/atom-amd64.deb
```

- See: https://github.com/atom/atom/blob/master/docs/build-instructions/linux.md#typeerror-unable-to-watch-path
- See: https://confluence.jetbrains.com/display/IDEADEV/Inotify+Watches+Limit

```shell
sudo vim /etc/sysctl.conf
```
```
fs.inotify.max_user_watches = 524288
```
```shell
sudo sysctl -p --system
```


Замена редактора по умолчанию
```shell
sudo vim /usr/share/applications/defaults.list
:%s/gedit.desktop/atom.desktop
```



### Visual Studio Code

- See: https://code.visualstudio.com/docs/setup/linux

```shell
sudo snap install --classic code
```



### JS Beautify

```shell
jade untitled.jade; js-beautify --type "html" --config ./config.json -r untitled.html

alias jade2html="jade @1; js-beautify --type "html" --config ~/.config/dotfiles/jade-config.json -r @1"
```

`~/.config/dotfiles/jade-config.json`
```json
{
  "indent_inner_html": true,
  "indent_size": 4,
  "indent_char": " ",
  "brace_style": "expand",
  "indent_scripts": false,
  "wrap_line_length": 80000,
  "preserve_newlines": true,
  "max_preserve_newlines": 80000,
  "unformatted": ["i"]
}
```



### IE

- See: [`modern.ie`](https://dev.windows.com/en-us/microsoft-edge/tools/vms/linux/)



## Чтобы `nano` перестал ругаться на недостаток прав

```shell
sudo chown $USER:$USER ~/.nano_history
```



## Gist token

```shell
~/.bashlocal
export GIST_ACCESS_TOKEN=aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
```



## Wine

```shell
sudo apt install wine cabextract
wget http://www.kegel.com/wine/winetricks && chmod +x winetricks && sudo mv winetricks /usr/local/bin/
```

```nohighlight
~/.bashlocal
export WINEARCH=win32
export WINEPREFIX=$HOME/.mynewwine32prefix/
```

Запустить `winecfg` и `winetricks`

Разархивировать `~/Downloads/winetricks.tar.gz` в `~/.cache/winetricks`
```shell
winetricks gdiplus
winetricks ie6
winetricks msxml3
winetricks vcrun2005sp1
winetricks vcrun2008
winetricks fontsmooth-rgb
winetricks msxml6
winetricks vcrun2010
winetricks atmlib
cp ~/Downloads/*.dll ~/.mynewwine32prefix/drive_c/windows/system32/
```



## Chrome default

```shell
sudo vim /usr/share/applications/defaults.list
:%s/firefox/chromium-browser
sudo update-alternatives --config x-www-browser
```



## Neovim

- See: https://github.com/neovim/neovim/wiki/Installing-Neovim#ubuntu

```shell
sudo apt install neovim python-dev python-pip python3-dev python3-pip
```

```shell
sudo update-alternatives --install /usr/bin/vi vi /usr/bin/nvim 60
sudo update-alternatives --config vi
sudo update-alternatives --install /usr/bin/vim vim /usr/bin/nvim 60
sudo update-alternatives --config vim
sudo update-alternatives --install /usr/bin/editor editor /usr/bin/nvim 60
sudo update-alternatives --config editor
```

### Build

- See: https://github.com/neovim/neovim/wiki/Building-Neovim#optimized-builds

```shell
rm -r build
make clean
make CMAKE_BUILD_TYPE=Release
sudo make install
```

### Python client to Neovim

- See: https://github.com/neovim/python-client
- See: https://github.com/zchee/deoplete-jedi/wiki/Setting-up-Python-for-Neovim

Смотрим версию Пайтона в Виме https://github.com/Shougo/deoplete.nvim#requirements
```
:echo has("python3")
```

Должно вернуть `1`
```shell
pip3 install --upgrade neovim
```

Если установлен `python3` и `python3-pip`, но нет команды `pip3`, то
```shell
sudo apt-get remove python3-pip
sudo apt-get install python3-pip
```


## Записать демо терминала (записать гифку `.gif`)

- See: https://github.com/marionebl/svg-term-cli

```shell
svg-term --cast=113643 --out examples/parrot.svg --window
```



## Screen

- See: https://www.rackaid.com/blog/linux-screen-tutorial-and-how-to/

`C-a` — Переход к режиму управления

`C-a` + `d` — Отключиться (detach) от окна

`C-a` + `?` Справка

`C-a` + `c` — Создать новое окно

`C-a` + `n` — Переключиться на следующее окно

`C-a` + `p` — Переключиться на предыдущее окно


`screen -r` — Подключиться (re-attach) к сессии



## Xubuntu connect to VPN OpenVPN

```shell
sudo apt-get install network-manager-openvpn network-manager-openvpn-gnome
```

Добавить соединение  
*Settings* → *Network Connections* → *Add a new connection* → *OpenVPN*



## Подключение к серверу по SSH

- See: https://www.digitalocean.com/community/tutorials/how-to-use-ssh-to-connect-to-a-remote-server-in-ubuntu#how-to-configure-ssh


## Run remote commands via SSH

- See: https://malcontentcomics.com/systemsboy/2006/07/send-remote-commands-via-ssh.html

```shell
ssh user@host "ls -al"
```

```shell
ssh user@orangepilite "sleep 1 && cat /sys/class/thermal/thermal_zone0/temp | sed 's/...$/ °C/'"
//=> 67 °C
```

For interactive commands:
```shell
ssh -t user@host "top"
```



## SSH login without password

### Variant 1

- See: https://linux.die.net/man/1/ssh-copy-id

Run on host:
```shell
ssh-copy-id user@host
```
On remote will appear file `~/.ssh/authorized_keys` with host public key


### Variant 2

- See: http://www.linuxproblem.org/art_9.html

Задача: Подключаться по SSH с хоста _A_, пользователя _a_ к хосту _B_ с пользователем _b_.  
Решение: Добавить публичный ключ пользователя _a_ в список авторизованных ключей пользователя _b_.

Генерируем ключ пользователя _a_, если его ещё нет
```shell
a@A~$ ssh-keygen -t rsa
```

Создаем у пользователя _b_ директорию `~/.ssh`, если её ещё нет
```shell
a@A~$ ssh b@B mkdir .ssh
```

Добавляем публичный ключ в список авторизованных
```shell
a@A~$ cat ~/.ssh/id_rsa.pub | ssh b@B "cat >> .ssh/authorized_keys"
```



## SSH туннелирование

- See: [SSH туннелирование](https://ru.wikibooks.org/wiki/SSH_%D1%82%D1%83%D0%BD%D0%BD%D0%B5%D0%BB%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5)
- See: https://unix.stackexchange.com/questions/46235/how-does-reverse-ssh-tunneling-work

### SOCKS-прокси
```shell
ssh -D localhost:12345 ваше_имя@адрес_удаленного_компьютера
```

### Переброс локального порта на удаленную машину
```shell
ssh -L [локальный_адрес:]локальный_порт:удаленный_адрес:удаленный_порт [пользователь@]сервер
```

### Переброс удаленного порта на локальную машину
```shell
ssh -R [удаленный_адрес:]удаленный_порт:локальный_адрес:локальный_порт [пользователь@]сервер
```


## SSH remove host from `known_hosts`
```shell
ssh-keygen -R orangepilite.local
```

## SSH connection speed test
```shell
yes | pv | ssh user@host "cat >/dev/null"
```


## Languages

### Ruby
```shell
sudo apt install ruby
```


### GO
```shell
sudo apt install golang-go
```


### Rust

- See: https://www.rust-lang.org/en-US/install.html

#### Install

```shell
curl https://sh.rustup.rs -sSf | sh
```

#### Version

```shell
rustc --version
```

#### Upgrade

```shell
rustup update stable
```

#### Cargo

- See: https://github.com/rust-lang/cargo


### Node.js

- See: https://github.com/nodesource/distributions#installation-instructions

```shell
curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt install -y nodejs
npm i -g \
    bemstyla \
    commitizen \
    conventional-changelog \
    create-react-app \
    diff-so-fancy \
    fixpack \
    http-server \
    imagemin-cli \
    mversion \
    npm \
    npm-upgrade \
    svgo \
    vmd \
    yo
```


## Ulauncher

- See: https://github.com/Ulauncher/Ulauncher/

```shell
sudo add-apt-repository ppa:agornostal/ulauncher
sudo apt update
sudo apt install ulauncher units
```


## Skype

- See: https://snapcraft.io/skype

```shell
sudo snap install --classic skype
```


## Slack

- See: https://snapcraft.io/slack

```shell
sudo snap install --classic slack
```


## JetBrains

- See: https://www.jetbrains.com/toolbox-app/


## Peek

- See: https://github.com/phw/peek

Record gif screen

```shell
sudo add-apt-repository ppa:peek-developers/stable
sudo apt install peek
```


## Alacritty

```shell
sudo add-apt-repository ppa:mmstick76/alacritty
sudo apt install alacritty
```


## Docker

```shell
sudo apt install docker-ce docker-ce-cli containerd.io
```



## Write image to USB with `dd`

- See: https://askubuntu.com/questions/372607/how-to-create-a-bootable-ubuntu-usb-flash-drive-from-terminal

```shell
dd if=~/Downloads/xubuntu-19.04-desktop-amd64.iso of=/dev/sdb bs=1M && sync
```

To see where is USB stick
```shell
lsblk
```


## Thunar png thumbnails

```shell
sudo apt install tumbler tumbler-plugins-extra
thunar -q
mv ~/.config/Thunar ~/.config/Thunar.bak
reboot
```



## Стереть диск. Clear disc. Erase disc.

- See: https://askubuntu.com/a/17658/51899

```shell
sudo dd if=/dev/zero of=/dev/sdb bs=1M
```



## Список установленных пакетов. List of installed applications.

```shell
dpkg --get-selections | grep -v deinstall
```



## Xubuntu Thunar Samba client protocol version

- See: [How to configure Samba to use SMBv2 and disable SMBv1 on Linux or Unix](https://www.cyberciti.biz/faq/how-to-configure-samba-to-use-smbv2-and-disable-smbv1-on-linux-or-unix/)
- See: https://tutorials.ubuntu.com/tutorial/install-and-configure-samba#2
- See: https://askubuntu.com/a/1053976/51899

Генерируем конфиг
```shell
sudo apt install smbclient
```

Редактируем
```shell
sudo vim /etc/samba/smb.conf
```

```
[global]

## Browsing/Identification ###

# Change this to the workgroup/NT-domain name your Samba server will part of
   workgroup = WORKGROUP
   client min protocol = SMB2
   client max protocol = SMB3
```

Thunar [работает с Samba](https://docs.xfce.org/xfce/thunar/unix-filesystem#remote_file_systems) через [`gvfs`](https://wiki.gnome.org/Projects/gvfs).  
За [протокол `smb`](https://wiki.gnome.org/Projects/gvfs/backends) отвечает библиотека `libsmbclient`, [здесь](https://www.samba.org/samba/docs/current/man-html/libsmbclient.7.html), откуда она читает конфиг.



## Cron

- See: https://crontab.guru/
- See: https://unix.stackexchange.com/a/111189/16993
- See: https://bbs.archlinux.org/viewtopic.php?id=223050

```shell
crontab -e
```

```cron
# m h  dom mon dow   command
DISPLAY=:0.0
XAUTHORITY=/home/vovanr/.Xauthority

0 13   *   *   *    /home/vovanr/.local/bin/pomodoro-alert.sh "Обед!"
```

```cron
MAILTO="mail@gmail.com"
PATH="/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin"

22 2      *       *       *      /usr/bin/php ~/www/example.com/req/cron/parce_1c.php
@daily ~/www/example.com/req/log/packlog ~/www/example.com/req/log/full.log archive/
@reboot sudo /usr/bin/node /home/pi/Raspberry-Pi-Simple-Web-GPIO-GUI/app.js &
```

### Daily reboot

```cron
@daily /sbin/shutdown -r now
```



## WiFi

- See: https://docs.ubuntu.com/core/en/stacks/network/network-manager/docs/configure-wifi-connections

```shell
nmcli device
```

Outputs
```
DEVICE       TYPE      STATE         CONNECTION
wlan0        wifi      disconnected  --
lo           loopback  unmanaged     --
```

Enable
```shell
nmcli radio wifi on
```

Show available networks
```shell
nmcli device wifi list
```

Connect
```shell
nmcli d wifi connect <wifi_ssid> password <password>
```



## Переслать файл по сетке

- See: https://tutorials.technology/tutorials/How-to-transfer-files-over-the-network-using-Netcat.html

Отправитель
```shell
nc 192.168.10.111 9999 < Demo.mp4
```

Получатель
```shell
nc -l -p 9999 > File.mp4
```



## VPN

```shell
sudo apt install openvpn network-manager-openvpn network-manager-openvpn-gnome
```



## Изменение приоритета выполнения

- See: http://rus-linux.net/MyLDP/consol/nice.html

```shell
$ nice yes > /dev/null &
[1] 286505

$ ps -l
F S   UID     PID    PPID  C PRI  NI ADDR SZ WCHAN  TTY          TIME CMD
0 S  1000  202824   11788  0  80   0 -  2973 do_wai pts/12   00:00:00 bash
0 R  1000  286505  202824 66  90  10 -  2022 -      pts/12   00:00:01 yes
4 R  1000  286532  202824  0  80   0 -  2852 -      pts/12   00:00:00 ps
```
- `F`, _FLAG_ - процесс запущен без привилегий суперпользователя;
- `S`, _STATE_ - процесс в настоящее время работает;
- `UID` - _ID_ пользователя, инициализировавшего процесс;
- `PID` - _ID_ процесса нашей команды `yes` `286505`;
- `PPID`, _Parent Process ID_ - _ID_ родительского для нашей команды `yes` процесса. В нашем случае это `bash` с _PID_ `202824`;
- `C` - загрузка процессора, целое число, выражается в %;
- `PRI` - Приоритет процесса. Большее значение означает меньший приоритет;
- `NI` - Значение Nice, которое находится в диапазоне от -20 до 19. Большее значение означает меньший приоритет.

```shell
$ kill 286505
[1]+  Terminated              nice yes > /dev/null
```

Запуск с изменённым значением `nice` (если не указывать значение, то по умолчанию будет 10):
```shell
$ nice -n 10 yes > /dev/null &
[1] 286589

$ ps -l
F S   UID     PID    PPID  C PRI  NI ADDR SZ WCHAN  TTY          TIME CMD
0 S  1000  202824   11788  0  80   0 -  2973 do_wai pts/12   00:00:00 bash
0 R  1000  286589  202824 87  90  10 -  2022 -      pts/12   00:00:02 yes
4 R  1000  286616  202824  0  80   0 -  2852 -      pts/12   00:00:00 ps
```

Изменение значения `nice`:
```shell
$ renice -n 15 -p 286589
286589 (process ID) old priority 10, new priority 15

$ ps -l
F S   UID     PID    PPID  C PRI  NI ADDR SZ WCHAN  TTY          TIME CMD
0 S  1000  202824   11788  0  80   0 -  2973 do_wai pts/12   00:00:00 bash
0 R  1000  286589  202824 99  95  15 -  2022 -      pts/12   00:00:20 yes
4 R  1000  286678  202824  0  80   0 -  2852 -      pts/12   00:00:00 ps
```

В обратную сторону нужны привилегии:
```shell
$ renice -n 10 -p 286589
renice: failed to set priority for 286589 (process ID): Permission denied

$ sudo renice -n 10 -p 286589
286589 (process ID) old priority 15, new priority 10

$ ps -l
F S   UID     PID    PPID  C PRI  NI ADDR SZ WCHAN  TTY          TIME CMD
0 S  1000  202824   11788  0  80   0 -  2973 do_wai pts/12   00:00:00 bash
0 R  1000  286589  202824 98  90  10 -  2022 -      pts/12   00:00:42 yes
4 R  1000  286774  202824  0  80   0 -  2852 -      pts/12   00:00:00 ps
```



## Read RTSP-stream

Когда начнётся сессия, откроется окно плеера с потоком:
```shell
ffplay -autoexit -rtsp_flags listen rtsp://0.0.0.0:5554/stream_from_me
```

Без открывания плеера:
```shell
ffmpeg -rtsp_flags listen -i rtsp://0.0.0.0:5554/stream_from_me -f flv /dev/null -y
```

Чтобы поднимать заново после окончания сессии, можно обернуть в бесконечный цикл:
```shell
while true; do ffmpeg -rtsp_flags listen -i rtsp://0.0.0.0:5554/stream_from_me -f flv /dev/null -y; sleep 2; done
```



## Как долго выполнялась команда

Add `time` command before your command
```shell
time curl google.com -o /dev/null
```

Outputs
```
real    0m1,635s
user    0m0,021s
sys     0m0,007s
```


For multiple commands:
```shell
time sh -c "npm run test:lint; npm run test:unit"
```



## Code Formatters

### XML

- See: https://stackoverflow.com/a/16090892/1284255

Required `libxml2-utils`
```shell
sudo apt install libxml2-utils
```

```shell
cat icon.svg | xmllint --format -
```

### JSON

Required `jq`
```shell
sudo apt install jq
```

```shell
cat data.json | jq
```



## Run window program from terminal mode

- See: http://manpages.ubuntu.com/manpages/trusty/man1/xvfb-run.1.html

`xvfb-run` - run specified X client or command in a virtual X server environment

```
xvfb-run --server-args="-screen 0 1280x720x24" npx testcafe
```

```
  - "export DISPLAY=:99.0"
  - "sh -e /etc/init.d/xvfb start"
  - sleep 3
```



## Xubuntu enable microphone noise cancellation

- See: https://askubuntu.com/a/1222717
- See: https://askubuntu.com/questions/18958/realtime-noise-removal-with-pulseaudio

```shell
sudo vim /etc/pulse/default.pa
```

Add bottom
```
### Enable Echo/Noise-Cancelation
load-module module-echo-cancel source_name=logitechsource
set-default-source logitechsource
```

Restart
```shell
pulseaudio -k
pulseaudio --start
```



## Create PDF from images

- See: https://askubuntu.com/questions/303849/create-a-single-pdf-from-multiple-text-images-or-pdf-files

```shell
convert image1.jpg image2.png text.txt PDFfile.pdf outputFileName.pdf
```

Install ImageMagick
```shell
sudo apt install imagemagick
```

If convert command fails with this message
```
convert-im6.q16: attempt to perform an operation not allowed by the security policy `PDF' @ error/constitute.c/IsCoderAuthorized/408.
```

Edit ImageMagick policy
```shell
sudo vim /etc/ImageMagick-6/policy.xml
```

```diff
-<policy domain="coder" rights="none" pattern="PDF" />
+<policy domain="coder" rights="read|write" pattern="PDF" />
```



## Compress PDF

- See: https://stackoverflow.com/a/9864308/1284255

```shell
pdf2ps large.pdf very_large.ps
ps2pdf very_large.ps small.pdf
```


## Less

### Turn off search highlighting in `less` after a search

- See: https://unix.stackexchange.com/a/179207

Press `Esc` `u`.

`/` — Search

`&` — Filter



## Xfce prompt command password in modal window

- See: https://askubuntu.com/questions/1042344/i-need-an-equivalent-of-gksu-in-18-04

Xfce `gksu` alternative.  
Bash open password prompt.

```shell
pkexec ls /root/
```



## Units package

- See: https://linux.die.net/man/1/units

Convert seconds to time
```shell
units 4639sec time
```
Outputs
```
1 hr + 17 min + 19 sec
```



## OBS Studio as virtual camera on Ubuntu

- See: https://linuxgamecast.com/2021/07/obs-linux-basics-virtual-webcam/
- See: https://ubunlog.com/en/obs-studio-26-0-llega-con-soporte-para-camara-virtual-y-mas/

It's allow us to use OBS scene as virtual camera in Zoom calls.

```shell
sudo add-apt-repository ppa:obsproject/obs-studio
sudo apt update
sudo apt install obs-studio
sudo apt install ffmpeg
sudo apt install linux-headers-$(uname -r) v4l2loopback-dkms
```



## Remote desktop

- See: [How to Install and Configure VNC on Ubuntu 20.04](https://www.digitalocean.com/community/tutorials/how-to-install-and-configure-vnc-on-ubuntu-20-04)
- See: [LUKS encryption: Enable remote SSH unlocking](https://iotechonline.com/luks-encryption-enable-remote-ssh-unlocking/)
- See: [How to install LUKS encrypted Ubuntu 18.04.x Server and enable remote unlocking](https://hamy.io/post/0009/how-to-install-luks-encrypted-ubuntu-18.04.x-server-and-enable-remote-unlocking/#remote-unlocking-overview)


```shell
sudo apt install dropbear-initramfs
```

Edit `/etc/dropbear-initramfs/config` with:
```
DROPBEAR_OPTIONS="-p 5678 -s -j -k -I 60"
```

Options explanation, change them to fit your needs, type `man dropbear` for further info:
- `-p 5678`: port where the SSH process will be listening.
- `-s`: disable password logins.
- `-j`: disable local port forwarding.
- `-k`: disable remote port forwarding.
- `-I 60`: idle timeout. Disconnect after 60 idle seconds.

Create the file `/etc/dropbear-initramfs/authorized_keys` and put your public key. 
Limit shell access to unlocking encrypted root partition only: add at start of public key
```
no-port-forwarding,no-agent-forwarding,no-x11-forwarding,command="/bin/cryptroot-unlock" ssh-rsa . . .
```

Then update `initramfs` with command:
```shell
update-initramfs -u
```

### Connect
```shell
ssh -p5678 root@192.168.0.100
```

Which brings us to the BusyBox built-in shell. 
Enter `cryptroot-unlock` command.

### RDP

Use Remmina program



## Certificate


```shell
sudo update-ca-certificates
trust list | wc -l
/usr/local/share/ca-certificates
```



## organize - The file management automation tool

- See: https://github.com/tfeldmann/organize



## Convert MP4 to GIF. Convert video to GIF

```shell
ffmpeg -i video.mp4 video.gif
```


## Convert WebP to PNG

- See: https://unix.stackexchange.com/questions/70622/command-line-convert-webp-to-jpg

```shell
ffmpeg -i file.webp out.png
```


## Convert SVG to PNG

```shell
convert -density 1200 -resize 256 -background none image.svg image.png
```


## Journal
Services log journal
```shell
journalctl -xe
```


## Computer uptime

```shell
uptime --pretty
```

Outputs
```
up 3 days, 4 hours, 53 minutes
```


## User session uptime

### `w` command
```shell
w
```

Outputs
```
 17:22:43 up 3 days,  4:54, 17 users,  load average: 3,65, 3,41, 3,30
 USER     TTY      FROM             LOGIN@   IDLE   JCPU   PCPU WHAT
 vovanr   tty7     :0               10:41    3days 29:51   5.72s xfce4-session
 . . .
```

### `who` command
```shell
who
```

Outputs
```
vovanr   tty7         2022-07-21 10:41 (:0)
. . .
```


## Extract `.xz`
```shell
unxz archive_name.img.xz
```


## Configure Wi-Fi connection

- See: https://wiki.archlinux.org/title/NetworkManager

List nearby Wi-Fi networks:
```shell
nmcli device wifi list
```

Connect to a Wi-Fi network:
```shell
nmcli device wifi connect <SSID_or_BSSID> password <password>
```

Connect to a hidden Wi-Fi network:
```shell
nmcli device wifi connect <SSID_or_BSSID> password <password> hidden yes
```

All configured connections are stored in `/etc/NetworkManager/system-connections/*.nmconnection` files.  
You can edit this files and reload connection `nmcli connection reload`.



## Run command after system started

### Set CPU frequences on Armbian for Orange Pi Lite for example

`sudo vim /etc/rc.local`  

Add this line before before `exit 0`:
```
cpufreq-set --related --min  1.20GHz --max  1.20GHz
```


## Mount disk automatically to directory

- See: https://askubuntu.com/a/352800

```shell
sudo groupadd backup_disk
sudo usermod -a -G backup_disk <USERNAME>
```

```shell
sudo mkdir /media/backup_disk
sudo chown :backup_disk /media/backup_disk
sudo chmod 660 /media/backup_disk
```

Add this disk to `fstab`: add string to `/etc/fstab` file.

```
UUID=<DISK_UUID> /media/backup_disk ext4 owner,nofail,relatime,x-systemd.device-timeout=10s 0 0
```



## Command placement, command path

`command -V <some_command>` or `type -a <some_command>`  
`which <some_command>`  
`whereis <some_command>`  



## Mount/unmount USB-disk

Install `udisksctl`
```shell
sudo apt install udisks2
```

Show disks
```shell
lsblk
```
```
NAME        MAJ:MIN RM   SIZE RO TYPE MOUNTPOINTS
sda           8:0    0 111.8G  0 disk
└─sda1        8:1    0 111.8G  0 part
```

Get UUID of the disk
```shell
udisksctl info -b /dev/sda1
```

### Power off USB-disk
```shell
udisksctl unmount -b /dev/sda1
udisksctl power-off -b /dev/sda
```

### Mount encrypted USB-disk
```shell
sudo apt install libblockdev-crypto2
systemctl restart udisks2.service
udisksctl unlock -b /dev/sda1
```

Without LUKS encryption
```shell
udisksctl mount -b /dev/sda1
```
Outputs
```
Mounted /dev/sda1 at /media/user_name/backup
```


## Mount LVM volume

For example when you booted from USB live cd and want to edit some files on your system HDD.

```shell
sudo lvscan
```
outputs:
```
  ACTIVE            '/dev/fedora_server/home' [<79,18 GiB] inherit
  ACTIVE            '/dev/fedora_server/root' [39,06 GiB] inherit
```

```shell
sudo mkdir /mnt/fedora_server/root
sudo mount /dev/fedora_server/root /mnt/fedora_server_root
```


## Check port usage

- See: https://www.cyberciti.biz/faq/unix-linux-check-if-port-is-in-use-command/

```shell
lsof -i:8080
```



## `mdadm`

- See: https://fedoramagazine.org/performing-storage-management-tasks-in-cockpit/
- See: https://fedoramagazine.org/managing-raid-arrays-with-mdadm/
- See: https://www.digitalocean.com/community/tutorials/how-to-create-raid-arrays-with-mdadm-on-ubuntu-16-04
- See: https://superuser.com/questions/1078393/linux-mdadm-does-not-assemble-array-but-recreation-of-array-does-it

```shell
blkid
cat /proc/mdstat
sudo mdadm --detail --scan
sudo mdadm --examine /dev/sdb
sudo mdadm --manage /dev/md127 --add /dev/sdb
sudo sgdisk --zap-all /dev/sdb
```

### `mdadm` readd missed disks

- See: https://bbs.archlinux.org/viewtopic.php?id=196686

```shell
sudo mdadm --manage /dev/md127 --re-add /dev/sdb --re-add /dev/sdc
```

### `mdadm` remove disk from RAID1 array

- See: https://delightlylinux.wordpress.com/2020/12/22/how-to-remove-a-drive-from-a-raid-array/
- See: https://unix.stackexchange.com/questions/332061/remove-drive-from-soft-raid

Stop all my Podman containers used this array
```shell
sudo podman stop --all
```

Unmount array
```shell
sudo umount /mnt/storage
```

If disk is already removed
```shell
sudo mdadm --zero-superblock /dev/sdb
```

Update size of array
```shell
sudo mdadm /dev/md127 --grow --raid-devices=2
```

## Show disks serial numbers

```shell
lsblk --nodeps -o name,serial
```
```
NAME    SERIAL
sda     08267489F0021
sdb     WY2151HH
sdc     WY2153YT
zram0
nvme0n1 12047489B9824
```


## Ubuntu 20.04 file context menu action

- See: https://askubuntu.com/a/1349584

Add your script to `~/.local/bin/` directory.  
Then create symbolic link to this script
```shell
ln -s ~/.local/bin/v-image-size.sh ~/.local/share/nautilus/scripts/
```
Now your script will available by right click on file -> Scripts -> `v-image-size.sh`



## Install an old version of program

```shell
apt-cache showpkg libnss3-tools
sudo apt-get install libnss3-tools=2:3.15.1-1ubuntu1
```



## Remove old kernel

```shell
ls /boot/
sudo apt-get purge -f linux-image-3.5.0-17-generic
sudo apt-get update && sudo apt-get upgrade && sudo apt-get dist-upgrade
```



## Add and remove drivers or kernel modules

```shell
ls /lib/modules/$(uname -r)
```


### Add module

```shell
sudo modprobe foo
```


### List of all modules

```shell
lsmod
```


### Remove module

```shell
sudo modprobe -r foo
```

Also you can use `rmmod`

```shell
sudo rmmod foo
```



## Local network hosts list

```shell
avahi-browse -a
```



## GPG

- See: https://docs.github.com/en/authentication/managing-commit-signature-verification/checking-for-existing-gpg-keys

List of local keys
```shell
gpg --list-secret-keys --keyid-format=long
```

Print public key
```shell
gpg --armor --export <gpg_key_id>
```



## `rsync`

### Get directory `data` from remote server

```shell
rsync -avz USER@HOST:/usr/local/www/data/foo.ru/www/data/ ./
rsync -avz -e ssh USER@HOST:~/www/data ./
rsync -avz -e "ssh -p 6666" USER@HOST:~/www/data ./
```


### Path with spaces

Wrap path with quotes `"` and escape spaces with back slash `\`
```shell
rsync -avz USER@HOST:"~/Documents/Some\ directory\ with\ spaces/notes" ./
```


### Upload file to server

```shell
rsync -a www/css/main.css USER@HOST:www/css/
```


### Backup directory "Мои документы"

```shell
rsync -avz --progress --delete '/media/username/Documents/Мои документы' /media/My-Book-Live/backup --exclude ".*" --exclude "Thumbs.db"
```


### Error `protocol version mismatch -- is your shell clean?`

- See: https://unix.stackexchange.com/a/689751

```
protocol version mismatch -- is your shell clean?
(see the rsync man page for an explanation)
rsync error: protocol incompatibility (code 2) at compat.c(178) [sender=3.1.3]
```
Check that `~/.bashrc` on remote is not contains `echo`.



## Replace characters with another. `tr`

```shell
echo "a b c" | tr " " "\n"
```

Outputs
```
a
b
c
```


## LVM (Logical Volume Manager)

### Resize logical volume

I have LVM partition 110 Gb with one logical volume "fedora/root" 15 Gb.  
I need to extend my "fedora/root" logical volume to 95.2 Gb.  

Show volume groups
```shell
$ sudo vgs
  VG     #PV #LV #SN Attr   VSize    VFree
  fedora   1   1   0 wz--n- <110.20g <95.20g
```

Show logical volumes
```shell
$ sudo lvs
  LV   VG     Attr       LSize  Pool Origin Data%  Meta%  Move Log Cpy%Sync Convert
  root fedora -wi-ao---- 15.00g
```

Add space to logical volume
```shell
$ sudo lvextend --resizefs -L 95.20g fedora
  Rounding size to boundary between physical extents: 95.20 GiB.
  Size of logical volume fedora/root changed from 15.00 GiB (3840 extents) to 95.20 GiB (24372 extents).
  File system xfs found on fedora/root mounted at /.
  Extending file system xfs to 95.20 GiB (102223577088 bytes) on fedora/root...
xfs_growfs /dev/fedora/root
meta-data=/dev/mapper/fedora-root isize=512    agcount=4, agsize=983040 blks
         =                       sectsz=512   attr=2, projid32bit=1
         =                       crc=1        finobt=1, sparse=1, rmapbt=1
         =                       reflink=1    bigtime=1 inobtcount=1 nrext64=1
data     =                       bsize=4096   blocks=3932160, imaxpct=25
         =                       sunit=0      swidth=0 blks
naming   =version 2              bsize=4096   ascii-ci=0, ftype=1
log      =internal log           bsize=4096   blocks=16384, version=2
         =                       sectsz=512   sunit=0 blks, lazy-count=1
realtime =none                   extsz=4096   blocks=0, rtextents=0
data blocks changed from 3932160 to 24956928
xfs_growfs done
  Extended file system xfs on fedora/root.
  Logical volume fedora/root successfully resized.
```

```shell
$ sudo lvs
  LV   VG     Attr       LSize  Pool Origin Data%  Meta%  Move Log Cpy%Sync Convert
  root fedora -wi-ao---- 95.20g
```

```shell
$ sudo vgs
  VG     #PV #LV #SN Attr   VSize    VFree
  fedora   1   1   0 wz--n- <110.20g <15.00g
```
