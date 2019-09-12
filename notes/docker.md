# Docker

----

- See: [Docker Hub](https://hub.docker.com/)
- See: [Best practices for writing `Dockerfile`s](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/)
- See: [Docker and Node.js Best Practices](https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md)
- See: https://blog.docker.com/2015/04/tips-for-deploying-nginx-official-image-with-docker/
- See: [Исчерпывающее руководство по написанию `Dockerfile` для веб-приложений на Node.js](https://medium.com/devschacht/praveen-durairaj-an-exhaustive-guide-to-writing-dockerfiles-for-node-js-web-apps-7b033bcc0b4f)
- See: [Docker For Front-end Developers](https://dev.to/akanksha_9560/docker-for-frontend-developers-1dk5)
- See: [`ENTRYPOINT` vs `CMD`: назад к основам](https://habr.com/ru/company/southbridge/blog/329138/)
- See: [Как и для чего использовать Docker](https://guides.hexlet.io/docker/)



## Изучаем Docker, Джефф Хейл в переводе на Хабре

- See: https://mobile.twitter.com/webstandards_ru/status/1098568101535322112


1. [Основы](https://habr.com/p/438796/)
1. [Термины и концепции](https://habr.com/p/439978/)
1. [Файлы `Dockerfile`](https://habr.com/p/439980/)
1. [Оптимизация и ускорение](https://habr.com/p/440658/)
1. [Команды](https://habr.com/p/440660/)



## Examples

- See: https://github.com/rstacruz/cheatsheets/pull/583/files


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



## Узнать версию программы на запущенном контейнере

```shell
docker exec -it <container_name> sh
```

Запустится шелл, где можно проверить версии
```shell
perl --version
```



## Просмотрщик слоёв

- See: https://github.com/wagoodman/dive



## Traefik — The Cloud Native Edge Router

- See: https://github.com/containous/traefik/



## `WORKDIR`

- See: https://docs.docker.com/engine/reference/builder/#workdir

The `WORKDIR` instruction specifies a new default directory within the images file system.  
If the directory doesn't exist, it'll be created automatically.  
Any RUN, COPY or ADD instructions that follow the `WORKDIR` instruction in
the Docker file will be executed within the specified directory.

Следующий `WORKDIR` относителен предыдущему


## Освободить место

```shell
docker system prune
```

Стереть все images

```shell
docker rmi $(docker images --format '{{.ID}}')
```



## Сборка

```shell
docker build -t <c_name> .
```

Сборка с указанием докер-файла
```shell
docker build -f ./Dockerfile-test .
```

## Запуск

```shell
docker run -it --rm <c_name>
```

## Запустить слой

```shell
docker run -it --rm <layer_id> bash
```

Где `<layer_id>` — хеш из `Step 11/15` (который отображается при сборке)  
или даже так

```shell
docker run -it --rm <layer_id> -- gulp -v
```


## Пересобрать

```shell
docker rmi <c_name>
```
```shell
docker rmi 0c7915522eaa
```
```
Error response from daemon: conflict: unable to delete 0c7915522eaa (must be forced) - image is being used by stopped container 8133eb3a00d0
```
```shell
docker rm 8133eb3a00d0
```
