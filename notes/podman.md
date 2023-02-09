# Podman

----

- See: [Podman](https://podman.io/)



## File Browser

- See: https://filebrowser.org/installation#docker

```shell
mkdir ~/Filebrowser
touch ~/Filebrowser/database.db
touch ~/Filebrowser/config.json
```

Fill `~/Filebrowser/config.json` file with default settings [`settings.json`](https://github.com/filebrowser/filebrowser/blob/master/docker/root/defaults/settings.json)
```json
{
  "port": 80,
  "baseURL": "",
  "address": "",
  "log": "stdout",
  "database": "/database/filebrowser.db",
  "root": "/srv"
}
```

```shell
podman run -it --rm --name filebrowser -v ~/Filebrowser:/srv -v ~/Filebrowser/database.db:/database/filebrowser.db -v ~/Filebrowser/config.json:/config/settings.json -e PUID=$(id -u) -e PGID=$(id -g) -p 8080:80 docker.io/filebrowser/filebrowser
```

Service will be acceptable on `http://localhost:8080`
