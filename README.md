<h1 align="center">
  <br>
  <a href="https://github.com/cgoat24/la-beuverie"><img src="static/logo.png" alt="La Beuverie" width="200"></a>
  <br>
  La Beuverie
  <br>
</h1>

<h4 align="center">An app to share cocktail recipes with everyone!</h4>

<p align="center">
    <img src="https://badge.fury.io/gh/cgoat24%2Fla-beuverie.svg" alt="version number">
</p>

<p align="center">
  <a href="#roadmap">Roadmap</a> •
  <a href="#dev-setup">Dev setup</a> •
  <a href="#credits">Credits</a> •
  <a href="#license">License</a>
</p>

![screenshot](./static/screenshot.png)

## Roadmap

- [ ] Validation error messages
- [ ] Viewing, adding and modifying recipes
- [ ] Filtering and search
- [ ] Mobile support

## Dev setup

To clone and run this application, you'll need [Git](https://git-scm.com), [Docker](https://www.docker.com/) and [Node](https://nodejs.org/). From your command line:

```bash
# Clone this repository.
$ git clone https://github.com/cgoat24/la-beuverie

# Go into the repository.
$ cd la-beuverie

# Install dependencies.
$ npm install

# Start the database.
$ docker compose up -d

# Write the database connection string to the environment file.
$ echo "DATABASE_PRISMA_URL=postgresql://postgres:password@127.0.0.1:5432/la-beuverie" > .env

# Run migrations
$ npm run postinstall

# Optional: seed the database
$ npx prisma db seed

# Run tests
$ npm run test

# Start the app.
$ npm run dev
```

## Credits

This software uses the following open source packages:

- [Sveltekit](https://kit.svelte.dev/)
- [Prisma](https://www.prisma.io/)
- [Lucia](https://lucia-auth.com/)

## License

Refer to the `LICENSE` file
