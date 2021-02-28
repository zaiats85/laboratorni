## pull Image from DockerHub
docker pull mattrayner/lamp

## Launch a 18.04 based image
docker run -p "8090:80" -v ${PWD}/app:/app mattrayner/lamp:latest-1804

##where 
#### 8090 - localport 
#### 80   - container apache 80 exposed.
#### app - php application folder;

## SSH into container 
docker exec -t -i container_id /bin/bash
