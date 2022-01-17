# Docker
## Examples
> list all container
>
> `docker ps -a`

> list all image
>
> `docker images -a`

> stop container
>
> `docker stop` **container_ID**

> remove image
>
> `docker rmi` **image_name**

> delete all containers & images
>
> `docker system prune -a`

> show log
>
> `docker logs f tail 20` **containerID**

> build docker
>
> `docker build .`

> start container
>
> `docker start` **containerID**

> docker build
>
> `docker compose` || *f docker-compose-dev.yml* `up -d --build`

> run docker
>
> `docker exec it` **container_ID** || `composer update`

> `docker run d p` *port_run*:*port_listen* **name_image**

> `sudo groupadd docker`
> `sudo usermod aG docker` **$USER**
> `newgrp docker`
> `docker run` helloworld
> `reboot`
> `sudo chmod 666` **/var/run/docker.sock**                        error sudo docker

/** Dockerfile Structure **/
** FROM
FROM [platform=<platform>] <image> [AS <name>] or
FROM [platform=<platform>] <image>[:<tag>] [AS <name>] or
FROM [platform=<platform>] <image>[@<digest>] [AS <name>]
 FROM khởi tạo 1 build stage và đặt base image
 trong Dockerfile phải bắt đầu với FROM
 kéo image từ Public Repositories (https://hub.docker.com/).
 FROM xuất hiện nhiều lần trong Dockerfile để tạo ra nhiều images hoặc sử dụng 1 build stage như 1 phụ thuộc cho cái khác
 có thể đặt tên cho build stage bằng cách thêm AS name trong FROM. Tên có thể được sử dụng trong bước tiếp theo FROM và COPY from=<name> để hướng đến image build trong stage. 
 tag hoặc digest value là tùy chọn. Mặc định sẽ là lasest tag. Builder sẽ có lỗi nếu không xác định được tag
 tùy chọn platform có thể xác định plaform image trong trường hợp FROM có multiplatform image
Ex: linux/amd64, linux/arm64, or windows/amd64

** ARG
ARG <name>[=<default value>]
 ARG là chỉ dẫn duy nhất đứng trước FROM
 FROM hỗ trợ các biến được khai báo bởi bất kỳ ARG xảy ra trước FROM thứ nhất
 ARG khai báo trước FROM bên ngoài build stage
 Để sử dụng các biến được khai báo bởi ARG trước FROM thứ nhất, sử dụng ARG với các biến không gán giá trị

** RUN
RUN <command> (shell form, lệnh chạy trong shell, mặc định linux là /bin/sh c)
RUN ["executable", "param1", "param2"] (exec form)
 thực thi command trong 1 layer mới trên image hiện tại và commit kết quả. 
 image với committed sẽ được sử dụng cho bước tiếp theo.
 sử dụng "\" để tiếp tục RUN trong line tiếp theo
 cache không tự động vô hiệu trong lần build sau (RUN aptget distupgrade y)
 vô hiệu cache sử dụng nocache, Ex: docker build nocache

** CMD
CMD ["executable","param1","param2"] (exec form, this is the preferred form)
CMD ["param1","param2"] (as default parameters to ENTRYPOINT)
CMD command param1 param2 (shell form)
 chỉ có duy nhất 1 CMD. Nếu có nhiều CMD, CMD cuối cùng take effect.
 cung cấp các giá trị mặc định cho container, có thể bao gồm an executable, hoặc bỏ sót an executable và phải xác định ENTRYPOINT
 nếu CMD cung cấp các giá trị mặc định cho ENTRYPOINT, cả 2 CMD và ENTRYPOINT cần xác định mảng json
*The exec form is parsed as a JSON array, which means that you must use doublequotes (“) around words not singlequotes (‘).*
** WORKDIR
WORKDIR /path/to/workdir
WorkSpace của docker, thường sẽ là var/www/html nếu chạy qua apache hoặc định nghĩa trong vhost.config
** COPY
** ADD
/** dockercompose.yml **/
volumne || mount file ouside server
port 3636 : 8080
     host : container
apachevhost.conf : rewite DocumentRoot (workspace mà docker sẽ chạy)

dockercompose.yml
{
     cách 1: build: . (chạy dockerfile trong project hiện tại)
     cách 2: context: .
          dockerfile: Dockerfile (chạy dockerfile theo đường dẫn context)
     cách 3: image: mysql (tự động pull image từ public hub hoặc registry)
}
{
     dockerize build multi container (xem port) 
     docker giống như máy ảo, cấu hình laravel và mysql, cần gì thì tạo thêm container trong đó
     cấu hình port: xem image listen port trong hub.public / images / tag
     dockercompose = docker run
}