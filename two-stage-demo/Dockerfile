FROM node:16.16.0-alpine3.16 AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY ./ ./
RUN npm run build

FROM node:16.16.0-alpine3.16
WORKDIR /app
COPY --from=build /app/package*.json ./
RUN npm ci --omit=dev
COPY --from=build /app/dist dist/
EXPOSE 8080
ENTRYPOINT npm run start
