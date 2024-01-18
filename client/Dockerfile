FROM node as build

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM node

WORKDIR /app

COPY --from=build /app/package*.json .
RUN npm ci

COPY --from=build /app/build/. .

EXPOSE 3000
CMD ["node", "./index.js"]