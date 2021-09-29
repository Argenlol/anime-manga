const { Sequelize } = require('sequelize');

const { 
PGUSER ,
PGHOST,
PGPASSWORD,
PGDATABASE,
PGPORT,
} = process.env;

const sequelize = new Sequelize(PGDATABASE, PGUSER, PGPASSWORD, {
    dialect: 'postgres',
    host: PGHOST,
    port: PGPORT,
});

module.exports = sequelize;