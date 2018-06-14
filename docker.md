# Docker

----

- See: [Docker Hub](https://hub.docker.com/)
- See: [Best practices for writing Dockerfiles](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/)
- See: [Docker and Node.js Best Practices](https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md)
- See: https://blog.docker.com/2015/04/tips-for-deploying-nginx-official-image-with-docker/
- See: [Исчерпывающее руководство по написанию Dockerfile для веб-приложений на Node.js](https://medium.com/devschacht/praveen-durairaj-an-exhaustive-guide-to-writing-dockerfiles-for-node-js-web-apps-7b033bcc0b4f)

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



## Перезагрузить Nginx в запущенном контейнере

- See: https://www.shellhacks.com/docker-reload-nginx-inside-container/

```shell
docker container exec <container> nginx -s reload
```



## Проверить корректность Nginx конфига

```shell
docker container exec <container> nginx -t
```



## Установка *Docker* на виртуальную машину с *Ubuntu Server*

Установить *VirtualBox*

```shell
sudo apt-get install virtualbox
```

Создать виртуальную машину с [Ubuntu 18.04 LTS (Bionic Beaver)](https://www.ubuntu.com/download/server)

Запускаем виртуальную машину

- See: [Install Docker CE](https://docs.docker.com/install/linux/docker-ce/ubuntu/#install-docker-ce)

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
