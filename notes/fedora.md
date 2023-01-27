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

Relogin and run:
```shell
startx
```

If you want to run GUI on system load:
```shell
systemctl set-default graphical.target
```
