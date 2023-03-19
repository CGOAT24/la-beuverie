FROM node:lts-alpine
WORKDIR /app
RUN npm install -g http-server
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
CMD [ "http-server", "dist" ]