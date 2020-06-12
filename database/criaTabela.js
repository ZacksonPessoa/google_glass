const sequelize = require('sequelize');
const connection = require('./database')

const faleconosco = connection.define('faleconosco',{
    nome: {
        type: sequelize.STRING,
        allowNull: false
    },
   

    email:{
        type: sequelize.STRING,
        allowNull: false
    }

}); 

faleconosco.sync({force: false}).then(()=>{});

module.exports = faleconosco;