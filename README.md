** Backend Express API**

```
docker run --rm -d -p 27017-27019:27017-27019 \
  -e MONGO_INITDB_ROOT_USERNAME=root \
  -e MONGO_INITDB_ROOT_PASSWORD=rootPassXXX \
  -v "$(pwd)/db/mongo":"/docker-entrypoint-initdb.d" \
  --name mongodb mongo
```


## Authentication ##
```
http POST http://0.0.0.0:3000/api/v1/login user="admin" password="12345"
```