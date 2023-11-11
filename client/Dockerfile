FROM node:alpine AS build

WORKDIR /app

COPY package*.json .
RUN npm ci
COPY . .
RUN npm run build
CMD ["node", "build/index.js"]