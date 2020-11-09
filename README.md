# Docker Web App

Testing docker meets node.

## About 

https://nodejs.org/en/docs/guides/nodejs-docker-webapp/

## Access 
http://localhost:80

## Build

```
make build
```
or
```
docker build -t im .
```

## Run
```
make run
```
or
```
docker run --rm -p 80:80 --name cont im
```

## Clean
```
make clean
```
or
```
## Close browser tab
docker stop cont
docker rmi im
```