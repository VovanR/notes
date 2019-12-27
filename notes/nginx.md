# Nginx

----

- See: https://nginx.ru/
- See: [Nginx config generator](https://nginxconfig.io/) https://github.com/valentinxxx/nginxconfig.io

## Добавить сайт

```shell
unlink /etc/nginx/sites-enabled/default
cp /etc/nginx/sites-available/default /etc/nginx/sites-available/example-com
ln -s /etc/nginx/sites-available/example-com  /etc/nginx/sites-available/example-com
service nginx restart
```

`/etc/nginx/sites-available/example-com`
```nginx
server {
    listen 80;
    server_name example.com;

    access_log /var/log/nginx/example-com-access.log;
    error_log /var/log/nginx/example-com-error.log;

    location / {
        proxy_set_header X-Forwarded-For $remote_addr;
        proxy_set_header Host $http_host;
        proxy_pass http://127.0.0.1:3000/;
    }

    location /robots.txt {
        alias /var/www/example.com/robots.txt;
    }
}
```


## robots.txt

- See: http://www.robotstxt.org/robotstxt.html

Чтобы отключить индексирование сайта поисковиками, создадим файл `robots.txt`
в корне директории сайта
```
User-agent: *
Disallow: /
```

Чтобы он был доступен по адресу `http://www.example.com/robots.txt`
```nginx
server {
    location /robots.txt { alias /home/www/html/robots.txt; }
}
```

Можно не создавая файла
```nginx
server {
    location = /robots.txt {
        add_header Content-Type text/plain;
        return 200 "User-agent: *\nDisallow: /\n";
    }
}
```



## Location regular expression

```nginx
http {
  server {
    location ~ (.*hot-update.js)$ {
      proxy_pass http://172.17.0.1:3000/$1;
    }
  }
}
```


## Proxy `ws:` Web Socket

- See: http://nginx.org/en/docs/http/websocket.html

```nginx
http {
  map $http_upgrade $connection_upgrade {
    default upgrade;
    ''      close;
  }

  server {
    location /sockjs-node/ {
      proxy_pass http://172.17.0.1:3000/sockjs-node/;
      proxy_http_version 1.1;
      proxy_set_header Upgrade $http_upgrade;
      proxy_set_header Connection $connection_upgrade;
    }
  }
}
```



## Upstream name alias

```nginx
http {
  upstream device {
    # Admin's device
    server 172.17.0.1:8888;
    # My device
    # server 192.168.10.5;
  }

  server {
    listen 7272;
    client_max_body_size 60M;

    gzip on;
    gzip_types text/plain application/xml;
    gzip_proxied any;

    location /admin/ {
      proxy_pass http://device/admin/;
    }
    location /api/ {
      proxy_pass http://device/api/;
    }
  }
}
```
