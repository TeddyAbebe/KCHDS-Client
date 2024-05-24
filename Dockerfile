FROM node:18.15

WORKDIR /app
COPY package*.json ./
COPY . .

RUN CI=false npm install

CMD ["npm", "start"]
