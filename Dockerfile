# Dockerfile
FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

COPY .env.production .env.local

RUN npm run build

EXPOSE 80
CMD ["npm", "start"]
