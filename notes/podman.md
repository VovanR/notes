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



## Like Docker compose

- See: https://docs.podman.io/en/latest/markdown/podman-kube-generate.1.html

Start:
```shell
sudo podman play kube myplayfile.yaml
```

Stop:
```shell
sudo podman play kube --down myplayfile.yaml
```

### Generate YAML from existed container

```shell
sudo podman kube generate <container_id> -f myplayfile.yaml
```

Will created file `myplayfile.yaml`:
```yaml
# Save the output of this file and use kubectl create -f to import
# it into Kubernetes.
#
# Created with podman-4.3.1

# NOTE: If you generated this yaml from an unprivileged and rootless podman container on an SELinux
# enabled system, check the podman generate kube man page for steps to follow to ensure that your pod/container
# has the right permissions to access the volumes added.
---
apiVersion: v1
kind: Pod
metadata:
  annotations:
    bind-mount-options: /home/myuser/Homer:z
    io.podman.annotations.autoremove/practicalroentgen: "FALSE"
    io.podman.annotations.init/practicalroentgen: "FALSE"
    io.podman.annotations.privileged/practicalroentgen: "FALSE"
    io.podman.annotations.publish-all/practicalroentgen: "FALSE"
  creationTimestamp: "2023-02-10T13:59:50Z"
  labels:
    app: practicalroentgen-pod
  name: practicalroentgen-pod
spec:
  automountServiceAccountToken: false
  containers:
  - image: docker.io/b4bz/homer:latest
    name: practicalroentgen
    ports:
    - containerPort: 8080
      hostPort: 80
    securityContext:
      capabilities: {}
    tty: true
    volumeMounts:
    - mountPath: /www/assets
      name: home-myuser-Homer-host-0
  enableServiceLinks: false
  volumes:
  - hostPath:
      path: /home/myuser/Homer
      type: Directory
    name: home-myuser-Homer-host-0
```
