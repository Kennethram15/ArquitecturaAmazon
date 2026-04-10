const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(
    'amazon_inventario',
    'root',
    null, //Si no hay nada, se pone null
    {
        host: 'localhost',
        dialect: 'mysql',
        logging: false
    }
)

module.exports = sequelize