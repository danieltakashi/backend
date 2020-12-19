** Backend Express API**

```
docker run --rm -d -p 27017-27019:27017-27019 \
  -e MONGO_INITDB_ROOT_USERNAME=root \
  -e MONGO_INITDB_ROOT_PASSWORD=rootPassXXX \
  -v "$(pwd)/db/mongo":"/docker-entrypoint-initdb.d" \
  --name mongodb mongo
```


## Authentication ##
<code>
http <bold>POST</bold> http://0.0.0.0:3000/api/v1/login user="<i>admin</i>" password="<i>12345</i>"
</code>


## Project Structure ###

```
├── README.md
├── db
│   └── mongo
│       └── 00-initialization.js
├── package-lock.json
├── package.json
├── src
│   ├── config
│   │   ├── database.ts
│   │   └── logger.ts
│   ├── controllers
│   │   ├── authentication.controller.ts
│   │   └── user.controller.ts
│   ├── index.ts
│   ├── interfaces
│   │   └── user.interface.ts
│   ├── middlewares
│   │   ├── auth.middleware.ts
│   │   └── error.middleware.ts
│   ├── models
│   │   └── user.model.ts
│   ├── routes
│   │   ├── authentication.route.ts
│   │   ├── authentication.test.ts
│   │   ├── index.test.ts
│   │   ├── index.ts
│   │   ├── user.route.ts
│   │   └── user.test.ts
│   ├── services
│   │   ├── user.service.ts
│   │   └── user.test.ts
│   ├── utils
│   │   └── user.util.ts
│   └── validators
│       └── user.validator.ts
└── tsconfig.json
```
