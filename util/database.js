// Constructor imported 
const Sequelize = require('sequelize');

// instance created to make a connection with "nodejsdb" db in "mysql" dbms 
const sequelizeNodeJSDB = new Sequelize('nodejsdb', 'root', 'Sahil@root@786', 
    {
        dialect: 'mysql',
        host: 'localhost'
    }
);

// connection or "sequelizeNodeJSDB" database exproted
module.exports = sequelizeNodeJSDB;
 