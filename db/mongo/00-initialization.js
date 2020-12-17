const user = "root"
const pass = "rootPassXXX"

db = db.getSiblingDB('admin')
db.auth(user, pass);
db.adminCommand( { listDatabases: 1 } );

db = db.getSiblingDB('test')
db.createUser({user: user, pwd: pass, roles:['dbOwner']})

db = db.getSiblingDB('development')
db.createUser({user: user, pwd: pass, roles:['dbOwner']})