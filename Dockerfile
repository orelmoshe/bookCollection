# docker build --no-cache -t bookshelf:latest .
# docker run -d -p 3000:3000 bookshelf:latest 
FROM node:18

WORKDIR /app

ENV REACT_APP_HOST=${HOSTNAME}

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
