FROM node:16.16.0-alpine3.15
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY ./ ./
ENTRYPOINT node index.js
