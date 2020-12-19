# Backend Typescript Express API #

## Dockerize MongoDB ##
```
docker run --rm -d -p 27017-27019:27017-27019 \
  -e MONGO_INITDB_ROOT_USERNAME=root \
  -e MONGO_INITDB_ROOT_PASSWORD=rootPassXXX \
  -v "$(pwd)/db/mongo":"/docker-entrypoint-initdb.d" \
  --name mongodb mongo
```
<i>**N.B.**</i> To use Dockerized MongoDB, set ```IN_MEMORY_MONGO = 0``` on ```.env``` file.

---
## API ##

| Method | Route | Description|
|-:|:-|:-|
|GET |/api/v1/users | get all Users |
|GET |/api/v1/users/:_id | get User with <i>```_id```</i> |
|POST |/api/v1/users | add / update User |
|DELETE |/api/v1/users/:_id | delete User with <i>```_id```</i> |
|POST | /api/v1/auth/login | generate a ```JWT``` |


---

### Authentication ###
<code>
http <bold>POST</bold> http://localhost:3000/api/v1/auth/login user="<i>admin</i>" password="<i>12345</i>"
</code>

---
## Project Structure ###

```
.
├── README.md
├── db
│   └── mongo
│       ├── 00-initialization.js
│       └── inMemory
├── logs
│   ├── requests
│   │   ├── all.log
│   │   └── daily
│   │       ├── 2020-12-18.log
│   │       └── 2020-12-19.log
│   └── server
│       ├── all.log
│       ├── daily
│       │   ├── 2020-12-18.log
│       │   └── 2020-12-19.log
│       └── error.log
├── package.json
├── src
│   ├── config
│   │   ├── database.ts
│   │   └── logger.ts
│   ├── controllers
│   │   ├── authentication.controller.ts
│   │   └── user.controller.ts
│   ├── helpers
│   │   └── mongoose.mock.ts
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

---
## Tips ###

### HTTPie ###

For quickier tests with HTTPie
```
$ export HOST=http://localhost:3000/api/v1
```

```
$ eval $(echo export $(http POST http://0.0.0.0:3000/api/v1/auth/login user=user password=123 | grep Authorization | cut -d ':' -f3- | tr -d '"' | cut -d '}' -f1 | tr ':' '=' | tr -d '{'))
```

```
$ http POST $HOST/users Authorization:$Authorization name=test2
```