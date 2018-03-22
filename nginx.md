# Nginx

----

- See: https://nginx.ru/

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
