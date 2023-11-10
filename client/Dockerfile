FROM node:lts as build
WORKDIR /app
COPY package*.json .
RUN npm ci --omit-dev
COPY . .
ENTRYPOINT ["node", "build"]