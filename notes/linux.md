# Linux

----

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

```shell
groups
sudo gpasswd --add username group
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
    xclip
```

Top
```shell
sudo apt-get install htop iftop iotop
```

Xfce panel plugins
```shell
sudo apt install \
    indicator-power \
    xfce4-mount-plugin \
    xfce4-sensors-plugin \
    xfce4-timer-plugin
```

```shell
sudo gem install tmuxinator
```

Фото, видео
```shell
sudo apt install \
    gcolor2 \
    gimp \
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

```shell
sudo sysctl fs.inotify.max_user_watches=32768
echo 32768 | sudo tee -a /proc/sys/fs/inotify/max_user_watches
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
winetricks gdiplus ie6 msxml3 vcrun2005sp1 vcrun2008 fontsmooth-rgb msxml6 vcrun2010 atmlib
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



## Langs

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
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt install -y nodejs
npm i -g \
    bemstyla \
    commitizen \
    conventional-changelog \
    create-react-app \
    fixpack \
    http-server \
    imagemin-cli \
    mversion \
    npm \
    npm-upgrade \
    vmd \
    yo
```



## Albert

- See: [Download](https://software.opensuse.org/download.html?project=home:manuelschneid3r&package=albert)

Add key
```shell
wget -nv https://download.opensuse.org/repositories/home:manuelschneid3r/xUbuntu_18.10/Release.key -O Release.key
sudo apt-key add - < Release.key
sudo apt-get update
```

```shell
sudo sh -c "echo 'deb http://download.opensuse.org/repositories/home:/manuelschneid3r/xUbuntu_18.10/ /' > /etc/apt/sources.list.d/home:manuelschneid3r.list"
sudo apt-get update
sudo apt-get install albert
```


## Skype

- See: https://snapcraft.io/skype

```shell
sudo snap install --classic skype
```


## JetBrains

- See: https://www.jetbrains.com/toolbox-app/



## Write image to USB with `dd`

- See: https://askubuntu.com/questions/372607/how-to-create-a-bootable-ubuntu-usb-flash-drive-from-terminal

```shell
dd if=~/Downloads/xubuntu-19.04-desktop-amd64.iso of=/dev/sdb bs=1M && sync
```


## Thunar png thumbnails

```shell
sudo apt install tumbler tumbler-plugins-extra
thunar -q
mv ~/.config/Thunar ~/.config/Thunar.bak
reboot
```
