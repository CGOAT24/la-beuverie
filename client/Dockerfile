FROM oven/bun:slim as build

WORKDIR /app
COPY package.json package-lock.json ./
RUN bun install install

COPY . .
RUN bun run build

FROM oven/bun:slim

WORKDIR /app

COPY --from=build /app/package*.json .
RUN bun install

COPY --from=build /app/build/. .

EXPOSE 3000
CMD ["bun", "run", "./index.js"]