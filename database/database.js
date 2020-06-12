const sequelize = require("sequelize");
const connection = new sequelize('faleconosco','root','Z@6k50nm',{
    host:'localhost',
    dialect:'mysql'
});
module.exports  = connection;