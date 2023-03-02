const config = require('./config.json');
const { Sequelize } = require('sequelize');

var database = new Sequelize(config.db);

database.authenticate()
  .then(()=>{
    console.log("connected to db");
  })
  .catch((error)=>{
    console.log(error);
  });

  module.exports = database;