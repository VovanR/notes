# Fedora

----

- See: https://getfedora.org/en/


## `dnf group`

```shell
dnf group list
dnf group list hidden
dnf group info 'Fedora Workstation'
sudo dnf group install 'Fedora Workstation'
```


## Install Gnome on Fedora Server

- See: https://www.server-world.info/en/note?os=Fedora_37&p=desktop&f=1
- See: https://www.server-world.info/en/note?os=Fedora_37&p=runlevel

```shell
dnf -y group install "Basic Desktop" GNOME
```

Re-login and run:
```shell
startx
```

If you want to run GUI on system load:
```shell
systemctl set-default graphical.target
```


```shell
dnf search nodejs
```

```shell
dnf info nodejs
```

## Last update history

- See: https://www.putorius.net/dnf-history.html

```shell
sudo dnf history
```

Outputs:
```
ID     | Command line                      | Date and time    | Action(s)      | Altered
----------------------------------------------------------------------------------------
    68 | -y install --disablerepo=* /tmp/a | 2022-09-08 20:35 | Install        |    1 EE
    67 |                                   | 2022-09-08 20:31 | E, I, U        |   70
    66 | -y install --disablerepo=* /tmp/a | 2022-09-05 08:30 | Install        |    1 EE
    65 |                                   | 2022-09-05 08:26 | E, I, U        |   42
```

Show details:
```shell
sudo dnf history info 67
```



## Setup

Install
```
meld
language-russian
google-chrome-stable
thunderbird
xclip
ack
htop
akmod-nvidia
ffmpegthumbnailer
```

RPM Fusion https://rpmfusion.org/Configuration
```
sudo dnf install https://mirrors.rpmfusion.org/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm https://mirrors.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-$(rpm -E %fedora).noarch.rpm
```


### JetBrains Toolbox App

- See: https://www.jetbrains.com/toolbox-app/


### Flatpack

Setup Flatpack repository
```
obsidian
zoom
```


### Visual Studio Code

- See: https://code.visualstudio.com/docs/setup/linux

```shell
sudo rpm --import https://packages.microsoft.com/keys/microsoft.asc
sudo sh -c 'echo -e "[code]\nname=Visual Studio Code\nbaseurl=https://packages.microsoft.com/yumrepos/vscode\nenabled=1\ngpgcheck=1\ngpgkey=https://packages.microsoft.com/keys/microsoft.asc" > /etc/yum.repos.d/vscode.repo'
dnf check-update
sudo dnf install code
```


### Discord

Install from site https://discord.com/ because Flatpack disallow to share screen


### Ulauncher

```
wmctrl
ulauncher
```
`wmctrl` needs for key binding on Wayland Win+Space


### Fonts
From install
```
sudo dnf install ibm-plex-mono-fonts jetbrains-mono-fonts
```


### Dotfiles

- See: https://github.com/VovanR/dotfiles


### Programs
```
sudo dnf install ruby
sudo gem install tmuxinator
wget https://raw.githubusercontent.com/tmuxinator/tmuxinator/master/completion/tmuxinator.bash -P ~/.bash-completion/
```


### Alacritty

- See: https://github.com/alacritty/alacritty/blob/master/INSTALL.md#fedora

```
sudo dnf install cmake freetype-devel fontconfig-devel libxcb-devel libxkbcommon-devel g++
```


### Docker

- See: https://docs.docker.com/engine/install/fedora/

```
sudo dnf install dnf-plugins-core
sudo dnf config-manager --add-repo https://download.docker.com/linux/fedora/docker-ce.repo
sudo dnf install docker-ce docker-ce-cli containerd.io docker-compose-plugin
sudo usermod -aG docker $USER
sudo systemctl start docker
sudo systemctl enable docker.service
```


### Python

```
sudo dnf install python3-pip
python3 -m pip3 install --user --upgrade pynvim
```


### Node.js

```
sudo dnf install nodejs
```

setup config from dotfiles
```
npm install --global npm yarn
```


### Neovim
```
sudo dnf install neovim
cd ~/.cache/dein/repos/github.com/neoclide/coc.nvim_master
yarn install
```
