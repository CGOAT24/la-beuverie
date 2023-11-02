FROM rust:alpine AS builder
WORKDIR /code
RUN USER=root cargo init
COPY Cargo.toml Cargo.toml
RUN cargo fetch
COPY src src
RUN cargo build --release
FROM debian:bullseye-slim
WORKDIR /app
COPY --from=builder /code/target/release/la-beuverie la-beuverie
USER 1001
CMD [ "/app/la-beuverie" ]