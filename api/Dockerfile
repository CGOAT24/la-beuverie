FROM rust:latest AS builder
WORKDIR /code
COPY Cargo.toml Cargo.toml
COPY src src
RUN cargo fetch
COPY .env .
RUN cargo build --release
FROM debian:latest
WORKDIR /app
COPY --from=builder /code/.env .
COPY --from=builder /code/target/release .
EXPOSE 8000
CMD [ "/app/la-beuverie"]