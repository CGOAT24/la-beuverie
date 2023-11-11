FROM node:alpine AS build

WORKDIR /app

COPY package*.json .
RUN npm ci
COPY . .
RUN npm run build

FROM node:alpine as deploy
WORKDIR /app
COPY --from=build /app .

CMD ["node", "build/index.js"]