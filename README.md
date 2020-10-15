[Demo Site](https://frosty-benz-573425.netlify.app)

# banana-shop

An example website demonstrating how you can consume content from Umbraco Heartcore using GraphQL and Nuxt.

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# generate static project
$ npm run generate
```

## Connecting to Umbraco

This project uses [Apollo](https://www.apollographql.com/) as a GraphQL client. It's a quick way to get up and running and integrates well with Nuxt

Add the following to nuxt.config. Replace 'dev-toms-hc-talk' with your environment.

```js
  ...
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: process.env.BACKEND_URL || 'https://graphql.umbraco.io',
        httpLinkOptions: {
          headers: {
            'umb-project-alias': 'dev-toms-hc-talk',
          },
        },
        inMemoryCacheOptions: {
          addTypename: false,
        },
      },
    },
  },
  ...
```

## Issues

One major issue I had while setting up apollo with Umbraco was due to some automatic properties that apollo adds to handle caching better. Specifically, apollo adds the `__typename` property to your queries which would normally return the type name of the requested object (obviously).

Unfortunately, at the time of building this project it will completely break Umbraco's GraphQL handling, and you won't get anything back. Fortunately, it can be turned off with by adding the lines to your clientConfig in nuxt.config.

```js
inMemoryCacheOptions: {
  addTypename: false,
},
```

I haven't seen any caching issues caused by this so far.
