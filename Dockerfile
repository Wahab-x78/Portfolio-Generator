FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm installx
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]