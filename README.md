# bookShelf

## Installation project for Developers:

- install nodejs v18.12.1 https://nodejs.org/en/download
- install GIT

## Using local

```bash
git clone http://gitlab.sys.ecix/ntdl/npms/bookShelf
npm install
npm run build
npm start
```

## Using docker

```bash
  docker pull artifactory.devbit.io/ntdl-local-docker-release/bookshelf:latest
  docker build --no-cache -t bookshelf:latest .
  docker run -it -d --name bookshelf -p 3000:3000  {imageID}
  docker exec -it bookshelf /bin/bash
```

## Using docker-compose

```bash
  docker-compose build
  docker-compose up -d
  docker-compose up -d <specific docker name>
  docker-compose -f <file name>.yml <command> <-params>
  docker-compose down
  docker-compose logs
```

## Usage Swagger

Go to [http://localhost:3000](http://localhost:3000) to view it in the browser.
