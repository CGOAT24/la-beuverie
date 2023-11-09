FROM node:lts as build
WORKDIR /app
COPY package*.json .
RUN npm ci
COPY . .
RUN npm run build

CMD ["node", "/app/.svelte-kit/output/server/index.js"]