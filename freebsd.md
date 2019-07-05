# FreeBSD

----

https://en.wikipedia.org/wiki/List_of_Intel_graphics_processing_units
HD Graphics 4600
Core i7-4700HQ
Haswell
https://wiki.freebsd.org/Graphics/Intel-GPU-Matrix
For haswell based systems, if the drm-kmod port does not work, it is suggested to install the drm-legacy-kmod.


TODO
https://forums.gentoo.org/viewtopic-t-801993.html
https://wiki.archlinux.org/index.php/Xorg
https://wiki.archlinux.org/index.php/Intel_graphics#Installation
https://wiki.archlinux.org/index.php/Intel_graphics#Xorg_configuration
https://wiki.archlinux.org/index.php/Intel_graphics#SNA_issues
https://www.freebsd.org/doc/en_US.ISO8859-1/books/handbook/x-config.html
https://www.tecmint.com/things-to-do-after-installing-freebsd/



## Installation process

Add new user to `wheel` group


## After installation

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


## Add Wi-Fi

```shell
vi /etc/wpa_supplicatn.conf
```

```
network={
    ssid="<wifi_name>"
    psk="<wifi_password>"
}
```

```shell
wpa_supplicant -c wpa-actinet.conf -i wlan0
```


## PKG

```shell
pkg install tmux git vim-console
```


## Install SUDO

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

Relogin or reboot



## Install XFCE 4

- See: http://mediaunix.com/ustanovka-xfce-na-freebsd-bystryj-desktop/

```shell
sudo pkg install xorg xfce
```

### Video driver

- See: https://wiki.freebsd.org/Graphics#Intel_Integrated_Graphics_.28aka_HD_Graphics.29

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


## Configure Xorg

- See: https://wiki.archlinux.org/index.php/Intel_graphics#Xorg_configuration

Dont add files like
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


## Video

```shell
pciconf -lv
```


## Some

```shell
echo "/usr/local/bin/startxfce4" > ~/.xinitrc
echo "#!/bin/sh" > ~/.xsession
echo "/usr/local/bin/startxfce4" >> ~/.xsession
chmod +x ~/.xsession
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

Корректируем `/etc/rc.conf` командами (`hald` и db`us нужны нам будут для нормального завершения работы ОС с кнопочек в графическом интерфейсе, а не через консоль от имени root’a):
```shell
echo 'hald_enable="YES"' >> /etc/rc.conf
echo 'dbus_enable="YES"' >> /etc/rc.conf
```


## Slim

```shell
sudo pkg install slim
```

`/etc/rc.conf`
```
slim_enable="YES"
```




## Battery life

- See: https://www.cyberciti.biz/faq/freebsd-finding-out-battery-life-state-on-laptop/

```shell
sysctl hw.acpi.battery
```
