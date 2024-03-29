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
- See: [Portus](https://github.com/SUSE/Portus)
- See: [Convert Docker run to Docker compose](https://www.composerize.com/)



## Install on Ubuntu

- See: https://docs.docker.com/install/linux/docker-ce/ubuntu/#install-using-the-repository



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



## Start, stop, attach

To stop active container press `Ctrl + c` key  
Collapse active container press `Ctrl + p` + `Ctrl + q` key  

```shell
docker start my_docker_container
```


```shell
docker stop my_docker_container
```


```shell
docker attach my_docker_container
```



## Restart Nginx in running container

- See: https://www.shellhacks.com/docker-reload-nginx-inside-container/

```shell
docker container exec <container> nginx -s reload
```



## Check Nginx config is correct

```shell
docker container exec <container> nginx -t
```



## Install *Docker* on virtual machine with *Ubuntu Server*

Install *VirtualBox*

```shell
sudo apt-get install virtualbox
```

Create virtual machine with [Ubuntu 18.04 LTS (Bionic Beaver)](https://www.ubuntu.com/download/server)

Run virtual machine

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



## Check some program version on running container

```shell
docker exec -it <container_name> sh
```

It will start an shell session where you can run command like that
```shell
perl --version
```



## Explore layers in a Docker image

- See: https://github.com/wagoodman/dive



## Traefik — The Cloud Native Edge Router

- See: https://github.com/containous/traefik/



## `WORKDIR`

- See: https://docs.docker.com/engine/reference/builder/#workdir

The `WORKDIR` instruction specifies a new default directory within the images file system.  
If the directory doesn't exist, it'll be created automatically.  
Any RUN, COPY or ADD instructions that follow the `WORKDIR` instruction in
the Docker file will be executed within the specified directory.

Next `WORKDIR` is relative to previous


## Clear disk space

```shell
docker system prune
```

Remove all images

```shell
docker rmi $(docker images --format '{{.ID}}')
```



## Build

```shell
docker build -t <c_name> .
```

Build with Docker-file name
```shell
docker build -f ./Dockerfile-test .
```

## Run

```shell
docker run -it --rm <c_name>
```

## Run image with environment variables

- See: https://docs.docker.com/engine/reference/commandline/run/#set-environment-variables--e---env---env-file

From file
```shell
docker run --env-file .env -it --rm <image_name>
```

Pass variable value
```shell
docker run --env VARNAME=<value> -it --rm <image_name>
```

Pass current environment variable
```shell
docker run --env VARNAME -it --rm <image_name>
```

## Run a layer of image

```shell
docker run -it --rm <layer_id> bash
```

Where `<layer_id>` is hash from `Step 11/15` (which shown in building process)  
or you can:

```shell
docker run -it --rm <layer_id> -- gulp -v
```


## Rebuild

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



## IP

- See: https://docs.docker.com/network/network-tutorial-standalone/

```shell
docker network inspect bridge
```

```
[
    {
        "Name": "bridge",
        "Id": "17e324f459648a9baaea32b248d3884da102dde19396c25b30ec800068ce6b10",
        "Created": "2017-06-22T20:27:43.826654485Z",
        "Scope": "local",
        "Driver": "bridge",
        "EnableIPv6": false,
        "IPAM": {
            "Driver": "default",
            "Options": null,
            "Config": [
                {
                    "Subnet": "172.17.0.0/16",
                    "Gateway": "172.17.0.1"
                }
            ]
```


## Docker ignore `.dockerignore`

```
# dependencies
/node_modules

# testing
/coverage

# production
/build

# misc
.idea/
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*
```


## Create React App

- See: https://typeofnan.dev/how-to-serve-a-react-app-with-nginx-in-docker/

`Dockerfile`
```dockerfile
FROM node:16-alpine AS builder
WORKDIR /app
# Copy package files and install dependencies before copy all project
# to prevent redundant container rebuilds
COPY package.json .
COPY package-lock.json .
RUN npm ci
# Copy all from current directory to working directory in image
COPY . .
RUN npm run build

FROM nginx:alpine
# Set working directory to nginx assets directory
WORKDIR /usr/share/nginx/html
# Remove default nginx static assets
RUN rm -rf ./*
# Copy static assets from builder stage
COPY --from=builder /app/build .
# Replace builded environment variables with actual if set
COPY ./entrypoint.sh /entrypoint.sh
ENTRYPOINT [ "/entrypoint.sh" ]
# Containers run nginx with global directives and daemon off
CMD ["nginx", "-g", "daemon off;"]
```


## Docker Copy

- See: https://docs.docker.com/engine/reference/commandline/cp/
- See: https://stackoverflow.com/questions/22907231/how-to-copy-files-from-host-to-docker-container

### Copy container file or directory to host

```shell
docker cp <container_id>:/www ./www
```

### Copy file from host to container

```shell
docker cp file_name.txt <container_id>:/file_name.txt
```


## Compare containers

- See: https://twitter.com/VovanR/status/1443864220878217216

Run images
```shell
docker run -it --rm <image_1> sh
docker run -it --rm <image_2> sh
```

See container IDs
```shell
docker ps
```

Copy container results to host
```shell
docker cp <container_1>:/www ./www-1
docker cp <container_2>:/www ./www-2
```

Compare directories
```shell
meld ./www-1 ./www-2
```


## Container already in use but not listed

```
docker: Error response from daemon: Conflict. The container name "container-name" is already in use by container "b2a023". You have to remove (or rename) that container to be able to reuse that name.
```

But container not listed by `docker container ls`. 
Use `docker container ls -a` instead to see this container. And remove container.

```shell
docker rm container-name
```
