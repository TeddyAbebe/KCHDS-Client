FROM node:18.15

WORKDIR /app
COPY package*.json ./
COPY . .

RUN npm install

CMD ["npm", "start"]
