# Docker

----

- See: [Docker Hub](https://hub.docker.com/)
- See: https://blog.docker.com/2015/04/tips-for-deploying-nginx-official-image-with-docker/

## Docker Toolbox

Docker machine IP-address

```shell
docker-machine ip
```

## List of containers

```shell
docker container ls
```

```shell
docker ps
```


## List of images

```shell
docker image ls
```



## Запустить, остановить, подключиться

Чтобы остановить активный контейнер, жмем `Ctrl + c`  
Свернуть активный контейнер `Ctrl + p` + `Ctrl + q`  

```shell
docker start my_docker_container
```


```shell
docker stop my_docker_container
```


```shell
docker attach my_docker_container
```



## Установка *Docker* на виртуалку с *Ubuntu Server*

Установить *VirtualBox*

```shell
sudo apt-get install virtualbox
```

Создать виртуалку с [Ubuntu 18.04 bionic](https://www.ubuntu.com/download/server)

Запускаем виртуальную машину

- See: [Install Docker CE](https://docs.docker.com/install/linux/docker-ce/ubuntu/#install-docker-ce)

```shell
sudo apt-get update
sudo apt-get upgrade
sudo apt-get install apt-transport-https ca-certificates curl software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo apt-key fingerprint 0EBFCD88
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
sudo apt-get update
sudo apt-get install docker.io
sudo service docker status
docker --version
```
