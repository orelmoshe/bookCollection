# docker build --no-cache -t bookshelf:latest .
FROM artifactory.devbit.io/e-cix-local-docker-general/base/nodejs:latest

WORKDIR /app

ENV CENTRAL_REGISTRY=http://artifactory.devbit.io/artifactory/api/npm/npm
ENV REACT_APP_HOST=${HOSTNAME}

COPY package.json .

RUN npm install -f

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
