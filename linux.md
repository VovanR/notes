# Linux

----

## Блокировка экрана `Win + l` Xubuntu
`Settings -> Keyboard -> application Shortcuts`
```nohighlight
xflock4		Super + l
```



## Узнать код клавиши
```
showkey -a
```



## Поиск файлов
```
locate -b foo
```



## sudo
```shell
su
apt-get install sudo
adduser username sudo
exit
```
!RELOGIN



## User Groups
```
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

Установка CP1251
```shell
sudo localedef -c -i ru_RU -f CP1251 ru_RU.CP1251
```



## Устанавливаем проги
```shell
sudo apt-get install htop iftop iotop tasksel alien filezilla meld gparted smartmontools virtualbox chromium-browser git git-gui libreoffice wine deja-dup poedit whois tree unrar exuberant-ctags ack-grep tmux curl dos2unix cabextract xfce4-timer-plugin xfce4-sensors-plugin indicator-power ntp usb-creator-gtk ruby golang-go cmake xclip
```

```shell
sudo gem install tmuxinator
```

Фото, видео
```shell
sudo apt-get install gimp pinta imagemagick optipng vlc inkscape hugin rawtherapee gcolor2
```

Для гитары
```shell
sudo apt-get install tuxguitar tuxguitar-alsa tuxguitar-oss tuxguitar-jsa
```

Работа
```shell
sudo apt-get install python python3 python-dev python3-dev postgresql postgresql-contrib libpq5 redis-server python-virtualenv rabbitmq-server libpq-dev pgadmin3 python3-pip libxml2-dev libxslt1-dev libmemcached-dev
```
```shell
sudo update-alternatives --install /usr/bin/exctags exctags /usr/bin/ctags-exuberant 10
```

Если не устанавливали проприетарщину
```shell
sudo apt-get install xubuntu-restricted-extras
```



### Oracle JDK/JRE
See: http://www.webupd8.org/2012/01/install-oracle-java-jdk-7-in-ubuntu-via.html
```shell
sudo add-apt-repository ppa:webupd8team/java && sudo apt-get update
sudo apt-get install oracle-java8-installer oracle-java8-set-default
```



### Dropbox
See: https://www.dropbox.com/install
```shell
sudo dpkg -i ~/Downloads/dropbox_2015.10.28_amd64.deb
```



### NodeJS
See: https://github.com/nodesource/distributions#installation-instructions
```shell
curl -sL https://deb.nodesource.com/setup_9.x | sudo -E bash -
sudo apt-get install -y nodejs
npm i -g bemstyla conventional-changelog gh-pages-deploy mancy npm vmd yo commitizen fixpack http-server mversion npm-upgrade create-react-app
```



### Atom
See: https://atom.io/

Download .deb
```shell
sudo dpkg -i ~/Downloads/atom-amd64.deb
```
See: https://github.com/atom/atom/blob/master/docs/build-instructions/linux.md#typeerror-unable-to-watch-path
```shell
sudo sysctl fs.inotify.max_user_watches=32768
echo 32768 | sudo tee -a /proc/sys/fs/inotify/max_user_watches
```

Замена редактора по-умолчанию
```shell
sudo vim /usr/share/applications/defaults.list
:%s/gedit.desktop/atom.desktop
```



### LESS
```shell
lessc styles.less styles.css
```



### Jade
```shell
jade -P untitled.jade
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
[modern.ie](https://dev.windows.com/en-us/microsoft-edge/tools/vms/linux/)



## Чтобы nano перестал ругаться на недостаток прав
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
sudo apt-get install cabextract
wget http://www.kegel.com/wine/winetricks && chmod +x winetricks && sudo mv winetricks /usr/local/bin/
```
```nohighlight
~/.bashlocal
export WINEARCH=win32
export WINEPREFIX=$HOME/.mynewwine32prefix/
```

run `winecfg` and `winetricks`

unarchive `~/Downloads/winetricks.tar.gz` to `~/.cache/winetricks`
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



## Fonts
http://sourcefoundry.org/hack/
```shell
mkdir -p ~/.fonts/truetype
```
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



## Neovim
https://github.com/neovim/neovim/wiki/Installing-Neovim#ubuntu
```shell
sudo add-apt-repository ppa:neovim-ppa/unstable
sudo apt-get update
sudo apt-get install neovim python-dev python-pip python3-dev python3-pip
```
```shell
sudo update-alternatives --install /usr/bin/vi vi /usr/bin/nvim 60
sudo update-alternatives --config vi
sudo update-alternatives --install /usr/bin/vim vim /usr/bin/nvim 60
sudo update-alternatives --config vim
sudo update-alternatives --install /usr/bin/editor editor /usr/bin/nvim 60
sudo update-alternatives --config editor
```
Смотрим версию пайтона, запустив
```shell
python --version
```
See: https://neovim.io/doc/user/nvim_python.html
```shell
sudo pip2 install neovim
```
или
```shell
sudo pip3 install neovim
```
