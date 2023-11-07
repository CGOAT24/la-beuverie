FROM rust:latest AS builder
WORKDIR /code
RUN USER=root cargo init
COPY Cargo.toml Cargo.toml
RUN cargo fetch
COPY src src
RUN cargo build --release
FROM debian:latest
WORKDIR /app
COPY --from=builder /code/target/release/la-beuverie la-beuverie
USER 1001
EXPOSE 8000
CMD [ "/app/la-beuverie" ]