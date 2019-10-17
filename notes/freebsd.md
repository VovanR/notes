# FreeBSD

----

## TO-DO

- Not working SD card reader
- Can't set first day of week
- Not working fn-keys brightness and sound volume
- Arduino board manager?


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

How to reboot `ifconfig`?
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
sudo pkg install rxvt-unicode alacritty tmux rubygem-tmuxinator
```


## UTF-8

`/etc/login.conf`
Add lines after `umask` in `default`
```
:umask=022:\
:charset=UTF-8:\
:lang=en_US.UTF-8:
```

Rebuild database:

```shell
sudo cap_mkdb /etc/login.conf
```

`sudo vim /etc/profile`
```
export LANG=en_US.UTF-8
export CHARSET=UTF-8
```


## Install Xfce 4

- See: http://mediaunix.com/ustanovka-xfce-na-freebsd-bystryj-desktop/
- See: https://www.freshports.org/x11/xfce4-goodies

```shell
cat xfce_package_list.txt | xargs sudo pkg install
```

`xfce_package_list.txt`:
```
xorg
xfce
xfce4-cpugraph-plugin
xfce4-mount-plugin
xfce4-netload-plugin
xfce4-notes-plugin
xfce4-power-manager
xfce4-pulseaudio-plugin
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


## User environment

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
- See: https://wiki.freebsd.org/Graphics/Intel-GPU-Matrix


- Graphics: `HD Graphics 4600`
- Processor: `Core i7-4700HQ`
- Code name: `Haswell`


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

plex-ttf
hack-font

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

grc

gnupg

xfburn
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


### MPlayer

```shell
sudo pkg install mplayer
```

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
sudo pkg install arduino18 arduino-tools
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



## WebStorm

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


## GPG key
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



## USB and SD card

- See: https://www.freebsd.org/doc/handbook/usb-disks.html

`/etc/auto_master`
Uncomment line
```
/media		-media		-nosuid
```

`/etc/devd.conf`
```
notify 100 {
	match "system" "GEOM";
	match "subsystem" "DEV";
	action "/usr/sbin/automount -c";
};
```

`/etc/rc.conf`
```
autofs_enable="YES"
devfs_system_ruleset="localrules"
```

```shell
sudo service automount restart
sudo service automountd restart
sudo service autounmountd restart
sudo service devd restart
```

`/etc/sysctl.conf`
```
# Mount SD Cards
vfs.usermount=1
```

```shell
sudo mkdir /mnt/<user_name>
sudo chown <user_name>:<user_name> /mnt/<user_name>
```

`/etc/devfs.rules`
```
[localrules=10]
add path 'da*s*' mode 0660 group operator
```

`/boot/loader.conf`
```
# Fuse
fuse_load="YES"
```


### Check device insert

```shell
sudo tail -f /var/log/messages
```

```shell
sudo camcontrol devlist
sudo camcontrol rescan all
sudo usbconfig
```




## don't hang the boot process while waiting on DHCP

`/boot/loader.conf`
```
background_dhclient="YES"
```



## Backlight

`/etc/rc.conf`
```
# enable LCD backlight control, ThinkPad buttons, etc
acpi_asus_load="YES"
```



## Pulseaudio

```shell
xfce4-pulseaudio-plugin
```

```
Message from pulseaudio-12.2_5:

Pulseaudio tries to determine default values for FreeBSD OSS driver at first
start, based on /dev/sndstat output. The hw.snd.default_unit sysctl may affect
these values, but restart of the Pulseaudio might be needed to rescan it again,
e.g. `pacmd exit`.

Pulseaudio has separate input and output configure lines. You can change them
with using following commands:

To change the default sink (output):
# pacmd set-default-sink 3
To change the default source (input):
# pacmd set-default-source 3

This can also be set in /usr/local/etc/pulse/default.pa

Replace the number '3' with the new default you want to set.

The audio/freedesktop-sound-theme is needed if the default sound files
are uncommented in the /usr/local/etc/pulse/default.pa file.
Message from keybinder-gtk3-0.3.2:

===>   NOTICE:

The keybinder-gtk3 port currently does not have a maintainer. As a result, it is
more likely to have unresolved issues, not be up-to-date, or even be removed in
the future. To volunteer to maintain this port, please create an issue at:

https://bugs.freebsd.org/bugzilla

More information about port maintainership is available at:

https://www.freebsd.org/doc/en/articles/contributing/ports-contributing.html#maintain-port
```



## Xfburn

`/boot/loader.conf`

```
# Xfburn
scbus_load="YES"
cd_load="YES"
pass_load="YES"
atapicam_load="YES"
```

```
Message from libburn-1.5.0:

You will need to enable CAM support in the kernel.  Your kernel
configuation should include:
    for SCSI CD/DVD devices:
        device scbus
        device cd
        device pass
    for ATA CD/DVD devices you will need the above, plus:
        device atapicam

You will also want to make the CD devices world read- and writable.
In /etc/devfs.rules, add the following:
        [system=10]
        add path 'acd*' mode 0666
        add path 'cd*' mode 0666
        add path 'pass*' mode 0666
        add path 'xpt*' mode 0666
```



## Температура ядра

- See: https://skeletor.org.ua/?p=579

```shell
sysctl -a | grep temperature
```


## Загрузка модуля

Запустить сразу
```shell
sudo kldload coretemp.ko
```

Запускать при загрузке
`/boot/loader.conf`
```
coretemp_load="YES"
```


## Tmuxinator

```
Message from ruby-2.5.5_2,1:

====
Some of the standard commands are provided as separate ports for ease
of upgrading:

    devel/ruby-gems:        gem - RubyGems package manager
    devel/rubygem-rake:     rake - Ruby Make

And some of the standard libraries are provided as separate ports
since they require extra dependencies:

    databases/rubygem-dbm:  DBM module
    databases/rubygem-gdbm: GDBM module

Install them as occasion demands.
====
```


## Display

`pciconf -lv | grep VGA`
```
vgapci0@pci0:0:2:0:     class=0x030000 card=0x122d1043 chip=0x04168086 rev=0x06 hdr=0x00
    vendor     = 'Intel Corporation'
    device     = '4th Gen Core Processor Integrated Graphics Controller'
    class      = display
    subclass   = VGA
```

List of displays
`xrandr --listmonitors`
```
Monitors: 1
 0: +eDP1 1600/382x900/215+0+0  eDP1
```

Set brightness
`xrandr --output eDP1 --brightness 1`

```
xdpyinfo | grep -B2 resolution
screen #0:
    dimensions:    1600x900 pixels (423x238 millimeters)
    resolution:    96x96 dots per inch
```



## Webcam

```
sudo pkg install pwcview webcamd
```

```
Message from webcamd-4.20.0.1_2:

*********************************************************************
1) webcamd requires the cuse4bsd(3) or cuse(3) kernel module, depending on
how webcamd was compiled. Please load this dependency by doing:

    # FreeBSD < 11.x, package from ports
    # kldload cuse4bsd
or
    # FreeBSD >= 11.x, part of default kernel build
    # kldload cuse

or by adding

    cuse4bsd_load="YES"
or
    cuse_load="YES"

to your /boot/loader.conf.

2) add webcamd_enable="YES"

to your /etc/rc.conf

3) Please restart devd to start webcamd

    # service devd restart

4) Optionally add a user to the "webcamd" group

    # pw groupmod webcamd -m <username>

5) If webcamd still did not start, consult the installed webcamd rc.d
script for more help and instructions on how to start webcamd.
*********************************************************************
```



## Upgrade FreeBSD

- See: https://www.freebsd.org/doc/handbook/updating-upgrading-freebsdupdate.html

### Packages upgrade
```shell
sudo pkg upgrade
```

### Security upgrades
```shell
sudo freebsd-update fetch
sudo freebsd-update install
```

Reboot
```shell
sudo shutdown -r now
```



## Remove unused packages

- See: https://www.freebsd.org/doc/handbook/pkgng-intro.html

```shell
sudo pkg autoremove
```



## Skype

- See: https://daemon-notes.com/articles/desktop/skype


## VirtualBox

- See: https://daemon-notes.com/articles/other/virtualbox

```shell
sudo pkg install virtualbox-ose
```

```
Message from qtchooser-66:

qtchooser is a wrapper that allows selecting whether Qt4 or Qt5 binaries for
qmake, moc and other tools will be run when invoking the binaries in $PATH.

By default, the Qt5 versions are run. It is possible to change the behavior by
setting the QT_SELECT environment variable to "qt4". See qtchooser(1) for more
information.
Message from virtualbox-ose-5.2.32_1:

VirtualBox was installed.

You need to load the vboxdrv kernel module via /boot/loader.conf:

vboxdrv_load="YES"

You also have to add all users to your vboxusers group in order to use vbox.

% pw groupmod vboxusers -m jerry

Reboot the machine to load the needed kernel modules.


Bridging Support:
=================

For bridged networking please add the following line to your /etc/rc.conf:

vboxnet_enable="YES"


USB Support:
============

For USB support your user needs to be in the operator group and needs read
and write permissions to the USB device.

% pw groupmod operator -m jerry

Add the following to /etc/devfs.rules (create if it doesn't exist):

[system=10]
add path 'usb/*' mode 0660 group operator

To load these new rule add the following to /etc/rc.conf:

devfs_system_ruleset="system"

Then restart devfs to load the new rules:

% /etc/rc.d/devfs restart


Troubleshooting:
================

Running VirtualBox as non-root user may fail with a fatal error
NS_ERROR_FACTORY_NOT_REGISTERED. In this case delete /tmp/.vbox-*-ipc file.

If you experience "Network: write Failed: Cannot allocate memory" errors
try to increase net.graph.maxdata in /boot/loader.conf

If you are using AIO, then increase these limits (PR#168298):
vfs.aio.max_buf_aio=8192
vfs.aio.max_aio_queue_per_proc=65536
vfs.aio.max_aio_per_proc=8192
vfs.aio.max_aio_queue=65536
To check if AIO is used use: kldstat -v | grep aio

Check wiki page for known issues and troubleshooting:
http://wiki.freebsd.org/VirtualBox

Please report any problems to emulation@. Thanks!
```

```shell
sudo kldload vboxdrv
sudo pw groupmod vboxusers -m <user_name>
```

`sudo vim /etc/devfs.rules`
```
[system=10]
	add path 'vboxnetctl' mode 0660 group vboxusers
```

```shell
sudo service devfs restart
sudo service vboxnet start
```



## Docker

- See: https://wiki.freebsd.org/Docker

```shell
sudo pkg install docker docker-compose docker-machine
```

```shell
docker-machine create --driver virtualbox --virtualbox-memory 2048 --virtualbox-cpu-count 2 --virtualbox-disk-size 102400 --virtualbox-hostonly-cidr "10.2.1.1/24" docker1
```

Check
```shell
docker-machine ls
```


```shell
docker-machine stop docker1
docker-machine start docker1
docker-machine env docker1
```

```
Error checking TLS connection: Error checking and/or regenerating the certs: There was an error validating certificates for host "10.2.1.100:2376": x509: certificate signed by unknown authority
You can attempt to regenerate them using 'docker-machine regenerate-certs [name]'.
Be advised that this will trigger a Docker daemon restart which might stop running containers.
```

```shell
docker-machine regenerate-certs docker1
```

```shell
eval `docker-machine env docker1`
```



## Linux mode

- See: https://www.freebsd.org/doc/handbook/linuxemu-lbc-install.html
- See: https://daemon-notes.com/articles/system/linux
- See: https://www.freshports.org/emulators/linux_base-c7

```shell
sudo kldload linux
sudo kldload linux64
sudo pkg install linux_base-c7
```

`sudo vim sysctl.conf`
```
compat.linux.osrelease=4.18.0
```

`sudo vim /etc/fstab`
```
linprocfs   /compat/linux/proc  linprocfs       rw      0       0
linsysfs    /compat/linux/sys   linsysfs        rw      0       0
tmpfs    /compat/linux/dev/shm  tmpfs   rw,mode=1777    0       0
```

```shell
sudo mount /compat/linux/proc
sudo mount /compat/linux/sys
sudo mount /compat/linux/dev/shm
```


## Ports

- See: https://www.freebsd.org/doc/handbook/ports-using.html

First run
```shell
sudo portsnap fetch extract
```

Update ports
```shell
sudo portsnap fetch update
```



## SD-Card reader. Not solved.

```shell
sudo pkg install pcsc-lite
```

```
Message from pcsc-lite-1.8.24,2:

PC/SC-Lite has been installed.

You need to install a driver for your smartcard reader e.g.,
- devel/libccid
- security/ifd-slb_rf60

For cardreaders connected to the serial port: After installing the driver,
please update the pcscd configuration file:
/usr/local/etc/reader.conf

For USB cardreaders add the following lines to /etc/devd.conf to enable
hotplugging:

attach 100 {
        device-name "ugen[0-9]+";
        action "/usr/local/sbin/pcscd -H";
};

detach 100 {
        device-name "ugen[0-9]+";
        action "/usr/local/sbin/pcscd -H";
};
```

```shell
sudo pkg install ccid
```
