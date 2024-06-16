# Podman

----

- See: [Podman](https://podman.io/)



## Start containers after system reboot

```shell
sudo systemctl enable podman-restart.service
```



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



## Yacht

- See: https://yacht.sh/docs/Installation/Podman/
- See: https://yacht.sh/docs/Installation/Getting_Started/

```shell
sudo podman volume create yacht
```

Create `yacht.yaml`
```yaml
# Save the output of this file and use kubectl create -f to import
# it into Kubernetes.
#
# Created with podman-4.3.1

# NOTE: If you generated this yaml from an unprivileged and rootless podman container on an SELinux
# enabled system, check the podman generate kube man page for steps to follow to ensure that your pod/container
# has the right permissions to access the volumes added.
apiVersion: v1
kind: ConfigMap
metadata:
  name: foo
data:
  PUID: 0
  PGID: 0
  UID: 0
  GID: 0
  COMPOSE_DIR: /compose
---
apiVersion: v1
kind: Pod
metadata:
  annotations:
    io.kubernetes.cri-o.TTY/Yacht: "false"
    io.podman.annotations.autoremove/Yacht: "FALSE"
    io.podman.annotations.init/Yacht: "TRUE"
    io.podman.annotations.privileged/Yacht: "TRUE"
    io.podman.annotations.publish-all/Yacht: "FALSE"
  creationTimestamp: "2023-02-12T18:31:16Z"
  labels:
    app: Yacht-pod
  name: Yacht-pod
spec:
  automountServiceAccountToken: false
  containers:
  - image: docker.io/selfhostedpro/yacht:latest
    name: Yacht
    # env:
    # - name: PUID
    #   value: 0
    # - name: PGID
    #   value: 0
    envFrom:
    - configMapRef:
        name: foo
        optional: false
    ports:
    - containerPort: 8000
      hostPort: 8282
    securityContext:
      privileged: true
    restartPolicy: always
    volumeMounts:
    - mountPath: /var/run/docker.sock
      name: var-run-podman-podman.sock-host-0
    - mountPath: /config
      name: yacht-pvc
  enableServiceLinks: false
  volumes:
  - hostPath:
      path: /var/run/podman/podman.sock
      type: File
    name: var-run-podman-podman.sock-host-0
  - name: yacht-pvc
    persistentVolumeClaim:
      claimName: yacht
```

Run
```shell
sudo podman play kube yacht.yaml
```


## Image

```shell
podman image ls
```

```shell
podman image rm <image_hash>
```

Update image
```shell
podman pull docker.io/filebrowser/filebrowser:latest
```


## Add port to firewall

- See: https://jellyfin.org/docs/general/installation/container/

```shell
sudo firewall-cmd --add-port=8096/tcp --permanent
sudo firewall-cmd --reload
```


## [WIP] Photoview

- See: https://github.com/photoview/photoview

Create dirs:
```shell
mkdir -p ~/Containers/Photoview/{storage,database/mariadb}
```

Create `photoview.yaml`:
```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: photoview-env
data:
  PHOTOPRISM_ADMIN_USER: "admin"
  # PHOTOVIEW_MYSQL_URL: "${MARIADB_USER}:${MARIADB_PASSWORD}@tcp(photoview-mariadb)/${MARIADB_DATABASE}"
  PHOTOVIEW_MYSQL_URL: "photoview:photosecret@tcp(photoview-mariadb)/photoview"
  PHOTOVIEW_LISTEN_IP: "photoview"
  HOST_PHOTOVIEW_BACKUP: "/mnt/backups/Photoview"
  PHOTOVIEW_DATABASE_DRIVER: "mysql"
---
apiVersion: v1
kind: ConfigMap
metadata:
  name: mariadb-env
data:
  MARIADB_AUTO_UPGRADE: "1"
  MARIADB_DATABASE: "photoview"
  MARIADB_USER: "photoview"
  MARIADB_PASSWORD: "photosecret"
  MARIADB_ROOT_PASSWORD: "superphotosecret"
---
apiVersion: v1
kind: Pod
metadata:
  annotations:
    bind-mount-options: /home/vovanr/Containers/Photoview:z
  creationTimestamp: "2023-03-12T14:38:00Z"
  labels:
    app: photoview-pod
  name: photoview-pod
spec:
  containers:
  - image: docker.io/viktorstrate/photoview:latest
    name: Photoview
    securityContext:
      privileged: true
    tty: true
    ports:
    - containerPort: 80
      hostPort: 2342
    restartPolicy: unless-stopped
    envFrom:
    - configMapRef:
        name: photoview-env
        optional: false
    volumeMounts:
    - mountPath: /etc/localtime:ro
      name: localtime
    - mountPath: /etc/timezone:ro
      name: timezone
    - mountPath: /home/photoview/media-cache
      name: mediaCache
    - mountPath: /photos
      name: photos

  - image: docker.io/library/mariadb:lts
    name: photoview-mariadb
    restartPolicy: unless-stopped
    ## Optimized MariaDB startup command for better performance and compatibility
    args:
      - mariadbd
      - --innodb-buffer-pool-size=512M
      - --transaction-isolation=READ-COMMITTED
      - --character-set-server=utf8mb4
      - --collation-server=utf8mb4_unicode_ci
      - --max-connections=512
      - --innodb-rollback-on-timeout=OFF
      - --innodb-lock-wait-timeout=120
    ## Uncomment next 2 lines if you want to access the database directly
    # ports:
      # - "3306:3306"
    securityContext:
      privileged: true
    envFrom:
    - configMapRef:
        name: mariadb-env
        optional: false
    volumeMounts:
    - mountPath: /etc/localtime:ro
      name: localtime
    - mountPath: /etc/timezone:ro
      name: timezone
    - mountPath: /var/lib/mysql
      name: database
    livenessProbe:
      exec:
        command:
          - healthcheck.sh
          - --connect
          - --innodb_initialized
      periodSeconds: 60
      timeoutSeconds: 5
      failureThreshold: 5
      # initialDelaySeconds: 180

  volumes:
    - name: localtime
      hostPath:
        path: /etc/localtime
        type: File
    - name: timezone
      hostPath:
        path: /etc/timezone
        type: File
    ## This is the current folder, where all Photoview files and folders (except of your media library) are located
    - name: mediaCache
      hostPath:
        path: /home/vovanr/Containers/Photoview/storage
        type: Directory
    ## This is where your original photos and videos located.
    ## Provide here the path to single root folder for your media collection.
    - name: photos
      hostPath:
        path: /mnt/photos/vovanr
        type: Directory
    - name: database
      hostPath:
        path: /home/vovanr/Containers/Photoview/database/mariadb
        type: Directory
```

Start:
```shell
sudo podman kube play photoview.yaml
```
