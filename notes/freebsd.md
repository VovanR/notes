# FreeBSD

----

## Installation process

Add new user to `wheel` group


## Add WiFi

```shell
su
```

`/etc/rc.conf`
```
wlans_ath0="wlan0"
ifconfig_wlan0="WPA SYNCDHCP"
#ifconfig_wlan0_ipv6="inet6 accept_rtadv"
create_args_wlan0="country RU"
```

`/etc/wpa_supplicant.conf`
```
network={
    ssid="<wifi_name>"
    psk="<wifi_password>"
}
```

```shell
wpa_supplicant -c /etc/wpa_supplicant.conf -i wlan0
```


### Checks if not works

How to reboot ifconfig?
```
sudo ifconfig wlan0 down
sudo ifconfig wlan0 up
```

`sudo dhclient wlan0`

`sudo service netif restart`
`sudo service routing restart`
`netstat -rn`
`cat /etc/resolv.conf`


## Change update repository to `latest`

```shell
su
```

```shell
vi /etc/pkg/FreeBSD.conf
```

Change `quarterly` with `latest`

```shell
pkg update -f
```


## Install `SUDO`

```shell
pkg install sudo
```

```shell
vim /usr/local/etc/sudoers
```

Add line:
```
<user_name> ALL=(ALL) ALL
```

Re-login or reboot


## Change default shell to Bash

```shell
sudo chsh -s /usr/local/bin/bash
```


## Install terminal and Tmux

```shell
sudo pkg install rxvt-unicode tmux
```


## Install Xfce 4

- See: http://mediaunix.com/ustanovka-xfce-na-freebsd-bystryj-desktop/

```shell
cat xfce_package_list.txt | xargs sudo pkg install
```

`xfce_package_list.txt`:
```
xorg
xfce
xfce4-battery-plugin
xfce4-cpugraph-plugin
xfce4-netload-plugin
xfce4-screenshooter-plugin
xfce4-timer-plugin
xfce4-whiskermenu-plugin
xfce4-xkb-plugin

numix-theme
xfce-icons-elementary

ubuntu-font

freedesktop-sound-theme
```

`~/.xinitrc`
```
/usr/local/bin/startxfce4
```

`~/.xsession`
```
#!/bin/sh

/usr/local/bin/startxfce4
```

```shell
chmod +x ~/.xsession
```


## User env

- See: https://github.com/VovanR/dotfiles#install

```shell
sudo pkg install git
```

```shell
git clone https://github.com/VovanR/dotfiles.git ~/.config/dotfiles
```


## Install Neovim

```shell
sudo pkg install neovim gmake p5-ack py36-pip xclip
```


## My video card

- See: https://en.wikipedia.org/wiki/List_of_Intel_graphics_processing_units

- Graphics: `HD Graphics 4600`
- Processor: `Core i7-4700HQ`
- Code name: `Haswell`


- See: https://wiki.freebsd.org/Graphics/Intel-GPU-Matrix

For Haswell based systems, if the `drm-kmod` port does not work, it is suggested to install the `drm-legacy-kmod`.


- See: https://forums.gentoo.org/viewtopic-t-801993.html
- See: https://wiki.archlinux.org/index.php/Xorg
- See: https://wiki.archlinux.org/index.php/Intel_graphics#Installation
- See: https://wiki.archlinux.org/index.php/Intel_graphics#Xorg_configuration
- See: https://wiki.archlinux.org/index.php/Intel_graphics#SNA_issues
- See: https://www.freebsd.org/doc/en_US.ISO8859-1/books/handbook/x-config.html
- See: https://www.tecmint.com/things-to-do-after-installing-freebsd/

### Video driver

- See: [Intel Integrated Graphics (aka HD Graphics)](https://wiki.freebsd.org/Graphics#Intel_Integrated_Graphics_.28aka_HD_Graphics.29)

```shell
sudo pkg install drm-legacy-kmod xf86-video-intel
```

```shell
sudo vim /etc/rc.conf
```

Add string
```
kld_list="/boot/modules/i915kms.ko"
```
or 
```
kld_list="i915kms"
```

Add user to `video` group
```shell
sudo pw groupmod video -M <user_name>
```

Show loaded modules
```shell
kldstat
```

Parse active modules
```shell
sudo dmesg | grep i915
```

Check
```shell
pciconf -lv
```


## Configure Xorg

- See: https://wiki.archlinux.org/index.php/Intel_graphics#Xorg_configuration

Don't add files like
```shell
sudo vim /usr/local/etc/X11/xorg.conf.d/20-intel.conf
```

```shell
sudo Xorg -configure
sudo cp /root/xorg.conf.new /etc/X11/xorg.conf
sudo vim /etc/X11/xorg.conf
```

Edit "Device" section
```
Section "Device"
  Identifier  "Intel Graphics"
  Driver      "intel"
EndSection
```


### Добавляю данные о соответствии IP

```shell
echo 'IP_вашего_ПК полное_имя_ПК_из_/etc/rc.conf' >> /etc/hosts
```

192.168.111.255 

`IP_вашего_ПК` – можно посмотреть в `/etc/rc.conf` или командой `ifconfig`
`полное_имя_ПК_из_/etc/rc.conf` – полное имя вашего ПК, которое можно посмотреть в `/etc/rc.conf` или командой `uname –ra` после слова FreeBSD, но перед версией её релиза.
без добавления ругалось:
`Could not look up internet address for {hostname}.This will prevent Xfce from operating correctly. It may be possible to correct the problem by adding {hostname} to the file /etc/hosts on your system.`

Корректируем `/etc/rc.conf` командами (`hald` и `dbus` нужны нам будут для нормального завершения работы ОС с кнопочек в графическом интерфейсе, а не через консоль от имени администратора):
```shell
echo 'hald_enable="YES"' >> /etc/rc.conf
echo 'dbus_enable="YES"' >> /etc/rc.conf
```


## Install packages

```shell
cat FBSD_package_list.txt | xargs sudo pkg install
```

`FBSD_package_list.txt`:
```
chromium
firefox
thunderbird
filezilla

unzip

node
npm

feh
gimp
ImageMagick7
inkscape

mate-calc

jetbrains-webstorm
meld

gnupg
```

```shell
npm install --global diff-so-fancy
```


## Wallpaper

```shell
sudo mv /usr/local/share/backgrounds/Noon_2520x1575.png /usr/local/share/backgrounds/xfce/
```


## Slim

```shell
sudo pkg install slim
```

`/etc/rc.conf`
```
slim_enable="YES"
```

```shell
sudo cp -r /usr/local/share/slim/default /usr/local/share/slim/custom
sudo rm /usr/local/share/slim/custom/background.jpg
sudo cp ~/Downloads/Noon_2520x1575.png /usr/local/share/slim/custom/background.png
```




## Battery life

- See: https://www.cyberciti.biz/faq/freebsd-finding-out-battery-life-state-on-laptop/

```shell
sysctl hw.acpi.battery
```



## Media player

### Parole

parole

```
https://www.freebsd.org/doc/en/articles/contributing/ports-contributing.html#maintain-port
Message from parole-1.0.2:

------------------------------------------------------------------------
The Clutter backend has been removed from the multimedia/xfce4-parole
port, as it induces a crash with Gtk >= 3.22.

If you had manually configured parole to use the Clutter backend, you
must switch to 'xvimagesink' or 'ximagesink'.

You can use the 'xfconf-query' command in order to change the backend:
$ xfconf-query -c parole -p /video/videosink -s "xvimagesink"
You can choose 'xvimagesink' or 'ximagesink'.
Alternatively you can remove previously specified backend:
$ xfconf-query -c parole -p /video/videosink -r
------------------------------------------------------------------------
```


### Mplayer

mplayer

```
Message from mplayer-1.4.0.20190706:

===================================================================
MPlayer's comprehensive documentation covers many topics like
output devices, video encoding, repairing broken files etc.
It is auto-generated daily and can be found on the project
homepage in the documentation section:

http://www.mplayerhq.hu/design7/documentation.html
===================================================================
MPlayer's system-wide configuration dir is

/usr/local/etc/mplayer

If you want to install configuration files into this location
in order to change mplayer's default settings for all users on
your system, you find some examples in

/usr/local/share/mplayer/examples/etc
===================================================================
```

## Sound player

```shell
sudo pkg install sox
```

## Document viewer

```shell
sudo pkg install atril
```

## Archive manager

```shell
sudo pkg install thunar-archive-plugin engrampa
```

- See: https://github.com/manjaro/packages-community/blob/master/engrampa-thunar-plugin/engrampa.tap

```shell
cd /usr/local/libexec/thunar-archive-plugin
sudo mv ~/Downloads/engrampa.tap ./
sudo chown root:wheel engrampa.tap
sudo chmod 444 engrampa.tap
sudo chmod +x engrampa.tap
sudo unlink gnome-file-roller.tap
sudo unlink org.gnome.FileRoller.tap
sudo ln -s engrampa.tap gnome-file-roller.tap
sudo ln -s engrampa.tap org.gnome.FileRoller.tap
```



# Neovim

- See: https://github.com/neovim/neovim/wiki/Installing-Neovim#freebsd

```shell
python3.6 -m pip install --user --upgrade pynvim
pip install neovim
sudo ln -s /usr/local/bin/nvim /usr/local/bin/vim
```

- See: https://neovim.io/doc/user/provider.html

```
:checkhealth
```


# FreeBSD touchpad two finger scroll

- See: https://wiki.freebsd.org/SynapticsTouchpad

```shell
pkg install xf86-input-synaptics libsynaptics
```

`/boot/loader.conf`
```
hw.psm.synaptics_support="1"
hw.psm.elantech_support="1"
```


`/etc/rc.conf`
```
moused_enable="YES"
moused_flags="-VH"
```

`/etc/sysctl.conf`
```
#hw.psm.synaptics.two_finger_scroll=1
```



## Keyboard switch layout

```shell
sudo vim /usr/local/etc/hal/fdi/policy/x11-input.fdi
```

```xml
<?xml version="1.0" encoding="windows-1252"?>
<deviceinfo version="0.2">
    <device>
        <match key="info.capabilities" contains="input.keymap">
            <append key="info.callouts.add" type="strlist">hal-setup-keymap</append>
        </match>
        <match key="info.capabilities" contains="input.keyboard">
            <merge key="input.xkb.rules" type="string">base</merge>
            <merge key="input.xkb.layout" type="string">us,ru</merge>
            <merge key="input.xkb.variant" type="string">,winkeys</merge>
            <merge key="input.xkb.options" type="string">grp:alt_shift_toggle,grp_led:scroll</merge>
        </match>
    </device>
</deviceinfo>
```



## Sound

- See: https://www.freebsd.org/doc/en_US.ISO8859-1/books/handbook/sound-setup.html
- See: http://mediaunix.com/zvuk-vo-freebsd/

`kldstat`

```
kldload snd_driver
```

`/boot/loader.conf`
```
snd_driver_load="YES"
```

`less /boot/defaults/loader.conf`



## Arduino

```shell
sudo pkg install arduino18
sudo pw groupmod dialer -m <user_name>
sudo pw groupmod operator -m <user_name>
```

`/etc/rc.conf`
```
# For Arduino
devfs_system_ruleset="localrules"
```

`/etc/devfs.rules`
```
[localrules=10]
        add path 'ugen*' mode 0660 group operator
        add path 'usb/*'  mode 0660 group operator
        add path 'usb' mode 0770 group operator
```

```
===>   NOTICE:

The libftdi port currently does not have a maintainer. As a result, it is
more likely to have unresolved issues, not be up-to-date, or even be removed in
the future. To volunteer to maintain this port, please create an issue at:

https://bugs.freebsd.org/bugzilla

More information about port maintainership is available at:

https://www.freebsd.org/doc/en/articles/contributing/ports-contributing.html#maintain-port
Message from openocd-0.10.0_2:

===============================================================================

OpenOCD is now installed, this software can damage your hardware, enjoy!

User's guide is at:
 http://openocd.sourceforge.net/documentation/online-docs/
Developer's guide is at:
 http://openocd.sourceforge.net/documentation/openocd-reference-manual/

FreeBSD USB NOTE:
 To allow an ordinary user to acces any of the the hotplug USB interface
 add him/her to the operator group  (pw groupmod operator -m username), then
 setup the devfs subsystem by adding these lines to the following files:

 ***/etc/devfs.rules:
 [localrules=10]
     add path 'ugen*' mode 0660 group operator
     add path 'usb/*'  mode 0660 group operator
     add path 'usb' mode 0770 group operator

 ***/etc/rc.conf:
     devfs_system_ruleset="localrules"

===============================================================================
```


## Lock session

`sudo pkg install xscreensaver`



## Hotkeys

- `Super + t` - `exo-open --launch TerminalEmulator`
- `Super + l` - `xflock4`



## Webstorm

`sudo pkg install jetbrains-webstorm`


```
Message from intellij-pty4j-0.5_1:

===>   NOTICE:

The intellij-pty4j port currently does not have a maintainer. As a result, it is
more likely to have unresolved issues, not be up-to-date, or even be removed in
the future. To volunteer to maintain this port, please create an issue at:

https://bugs.freebsd.org/bugzilla

More information about port maintainership is available at:

https://www.freebsd.org/doc/en/articles/contributing/ports-contributing.html#maintain-port
Message from intellij-fsnotifier-20160221_5:

===>   NOTICE:

The intellij-fsnotifier port currently does not have a maintainer. As a result, it is
more likely to have unresolved issues, not be up-to-date, or even be removed in
the future. To volunteer to maintain this port, please create an issue at:

https://bugs.freebsd.org/bugzilla

More information about port maintainership is available at:

https://www.freebsd.org/doc/en/articles/contributing/ports-contributing.html#maintain-port
Message from jetbrains-webstorm-2019.1.3:

There is native (faster) file watching support backed by kqueue which is
enabled by default.  If you encounter problems  problems with watching large
trees, you disable it by appending the following property into
/usr/local/share/webstorm/bin/idea.properties:

      idea.filewatcher.disabled=true
```


## Network manager

`networkmgr`

```
Message from doas-6.0p3:

============================================================
To use doas,

/usr/local/etc/doas.conf

must be created.

Refer to doas.conf(5).
============================================================
Message from networkmgr-3.1:

======================================================================

Any bug reports or request of new feature should be addressed at:
    https://github.com/GhostBSD/networkmgr/issues

Make sure that the /usr/local/etc/doas.conf have someting simular like this:

    permit nopass keepenv root
    permit :wheel
    permit nopass keepenv :wheel cmd netcardmgr
    permit nopass keepenv :wheel cmd ifconfig
    permit nopass keepenv :wheel cmd service

When rebooting it should automaticaly start is the desktop support xdg and make
sure that the user using NetworkMgr is in the wheel group.

======================================================================
```


## Time

- See: https://www.freebsd.org/doc/handbook/network-ntp.html
- See: https://www.freebsd.org/cgi/man.cgi?query=tzsetup&sektion=8

`sudo tzsetup /usr/share/zoneinfo/Europe/Moscow`

`sudo vim /etc/ntp.conf`
```
server 0.europe.pool.ntp.org iburst
server 1.europe.pool.ntp.org iburst
server 2.europe.pool.ntp.org iburst
server 3.europe.pool.ntp.org iburst
```

`sudo service ntpd start`


## Gpg key
`sudo pkg install gnupg`
```
Message from gnupg-2.2.17:

***************************************************************************
GnuPG, when run on hosts without IPv6 connectivity, may fail to connect to
dual-stack hkp servers [1].  As a workaround, add

disable-ipv6

to

/usr/local/etc/dirmngr.conf

[1] https://dev.gnupg.org/rGecfc4db3a2f8bc2652ba4ac4de5ca1cd13bfcbec
***************************************************************************
```

- See: https://help.github.com/en/articles/generating-a-new-gpg-key

`gpg --full-gen-key`
`gpg --list-secret-keys --keyid-format LONG`
`gpg --armor --export 3AA5C34371567BD2`
