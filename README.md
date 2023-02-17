<p align="center">
  <a href="https://www.medusa-commerce.com">
    <img alt="Medusa" src="https://i.imgur.com/USubGVY.png" width="100" />
  </a>
  <a href="https://uffizzi.com">
    <img alt="Uffizzi" src="https://avatars.githubusercontent.com/u/68303350?s=200&v=4" width="100" />
  </a>
</p>
<h1 align="center">
  Medusa Uffizzi Previews
</h1>
<p align="center">
This repo provides the skeleton to get you started with using <a href="https://github.com/medusajs/medusa">Medusa</a> with <a href="https://github.com/UffizziCloud/uffizzi">Uffizzi</a>. Follow the steps below to get ready.
</p>


## Prerequisites

This starter has minimal prerequisites and most of these will usually already be installed on your computer.

- [Install Node.js](https://nodejs.org/en/download/)
- [Install git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- [Install SQLite](https://www.sqlite.org/download.html)

## Setting up your store

- Install the Medusa CLI
  ```
  npm install -g @medusajs/medusa
  yarn global add @medusajs/medusa
  ```
- Create a new Medusa project
  ```
  medusa new my-medusa-store
  ```
- Run your project
  ```
  cd my-medusa-store
  medusa develop
  ```

Your local Medusa server is now running on port **9000**.

### Seeding your Medusa store

---

To seed your medusa store run the following command:

```
medusa seed -f ./data/seed.json
```

This command seeds your database with some sample data to get you started, including a store, an administrator account, a region and a product with variants. What the data looks like precisely you can see in the `./data/seed.json` file.

## Setting up your store with Docker

- Install the Medusa CLI
  ```
  npm install -g @medusajs/medusa-cli
  ```
- Create a new Medusa project
  ```
  medusa new my-medusa-store
  ```
- Update project config in `medusa-config.js`:

  ```
  module.exports = {
    projectConfig: {
      redis_url: REDIS_URL,
      database_url: DATABASE_URL, //postgres connectionstring
      database_type: "postgres",
      store_cors: STORE_CORS,
      admin_cors: ADMIN_CORS,
    },
    plugins,
  };
  ```

- Run your project

  When running your project the first time `docker compose` should be run with the `build` flag to build your container locally:

  ```
  docker-compose up --build
  ```

  When running your project subsequent times you can run docker compose with no flags to spin up your local environment in seconds:

  ```
  docker-compose up
  ```

Your local Medusa server is now running on port **9000**.

### Seeding your Medusa store with Docker

---

To add seed data to your medusa store running with Docker, run this command in a seperate terminal:

```
docker exec medusa-server medusa seed -f ./data/seed.json
```

This will execute the previously described seed script in the running `medusa-server` Docker container.

## Try it out

```
curl -X GET localhost:9000/store/products | python -m json.tool
```

After the seed script has run you will have the following things in you database:

- a User with the email: admin@medusa-test.com and password: supersecret
- a Region called Default Region with the countries GB, DE, DK, SE, FR, ES, IT
- a Shipping Option called Standard Shipping which costs 10 EUR
- a Product called Cool Test Product with 4 Product Variants that all cost 19.50 EUR

Visit [docs.medusa-commerce.com](https://docs.medusa-commerce.com) for further guides.

<p>
  <a href="https://www.medusa-commerce.com">
    Website
  </a> 
  |
  <a href="https://medusajs.notion.site/medusajs/Medusa-Home-3485f8605d834a07949b17d1a9f7eafd">
    Notion Home
  </a>
  |
  <a href="https://twitter.com/intent/follow?screen_name=medusajs">
    Twitter
  </a>
  |
  <a href="https://docs.medusa-commerce.com">
    Docs
  </a>
</p>
