# Nginx 伪静态配置

```nginx
location / {
    try_files $uri $uri/ $uri.html =404;
}

```
