// module imported to use static methods or properties
const Sequelize = require('sequelize');

// database imported
const sequelizeNodeJSDB = require('../util/database');

// model (table) created with domain names & constraints
const Usersnames = sequelizeNodeJSDB.define('usernames', {

    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    user:{
        type: Sequelize.STRING,
        allowNull: false,
        autoIncrement: false
    }
});

// database model (table) exported to work with
module.exports = Usersnames;

