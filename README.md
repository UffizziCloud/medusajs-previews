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
This repo provides the skeleton to get you started with using <a href="https://github.com/UffizziCloud/uffizzi">Uffizzi</a> to create ephemeral environments for <a href="https://github.com/medusajs/medusa">Medusa</a>. To better understand the whole system check out our blog on Medusa applications here. Follow the steps below to try out the previews for Medusa and better understand how the previews are build.
</p>

## Try out Uffizzi

1. Fork the repo
2. Create a small change anywhere in the repo
3. Create a pull requests with the change commit to trigger the Github action workflows to see Uffizzi in action !

The following section provides information on how the ephemeral environments work.

## Ephemeral environment builds for MedusaJS applications

### Application architecture 

The following is the architecutre of the Medusa application we will be building and previewing in Uffizzi in this repo. 


![alt text](public/architecture.png?raw=true "NextJS + MedusaJS Application")


The above is the architecture of the medusajs + nextjs application where medusajs is the backend and nextjs is the frontend. Considering we can have only one final ingress for the ephemeral environments as of now; we are going to set frontend as the ingress service. Frontend uses the backend which uses the other database and cache services so it will help us get a better idea if the application is working well or not.


Let's look at what the Uffizzi configuration looks like and what configuration we need to add to make the above possible. 


### The Uffizzi configuration

The `docker-compose.uffizzi.yml` in the root of the repo is the main configuration file for Uffizzi. It is an everyday docker-compose file with the following changes made to it :-

1. The `x-uffizzi` configuration. 

```yaml
x-uffizzi:
  ingress:
    service: frontend
    port: 8000
```

The above configuration let's the Uffizzi engine know that this docker-compose file has been configured for Uffizzi. Here we define the ingress which points to the frontend of the application. The final Uffizzi URL for the ephemeral environment is created routes requests directly to the frontend service in this case.

2. Values for the `image` parameter for the services which need to be built on every change.

The values for these are are updated to use ${MEDUSA_IMAGE} and the ${STOREFRONT_IMAGE} placeholders instead of local build contexts so that we can replace these placeholders with the image tags from the github action builds.

Considering that the frontend has been configured to consume the backend service, let's see how the medusajs backend consumes the postgres and the redis services.

###  The MedusaJS configuration

The medusa.config.js projectConfig object below gives a better idea of how the medusa backend connects to other services : 

```js
module.exports = {
 projectConfig: {
   redis_url: REDIS_URL,
   database_url: DATABASE_URL,
   database_type: "postgres"
 },
 plugins,
};
```

In the above configuration the values for REDIS_URL and DATABASE_URL are pointing to the sockets exposed by the redis and postgres services. Check out https://docs.medusajs.com/ for any other configuration you would like to add.

## Next steps

To learn more above creating epehemral environments for MedusaJS applications, check out our blog here and if you have any issues setting up Uffizzi or configuring MedusaJS, follow the links below.

Visit [docs.uffizzi.com](https://docs.uffizzi.com) for more information on epehemeral environments.
Visit [docs.medusa-commerce.com](https://docs.medusa-commerce.com) for further guides.
