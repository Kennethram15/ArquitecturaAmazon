const Sequelize = require('sequelize')
const sequelize = require('../config/database')

//Importar todos los modelos
const TipoProducto = require('./TipoProducto')(sequelize, Sequelize)
const Dimension = require('./Dimension')(sequelize, Sequelize)
const Proveedor = require('./Proveedor')(sequelize, Sequelize)
const Producto = require('./Producto')(sequelize, Sequelize)
const DetalleTipoProducto = require('./DetalleTipoDeProducto')(sequelize, Sequelize)

//Relaciones
Proveedor.hasMany(Producto)
Producto.belongsTo(Proveedor)

Dimension.hasMany(Producto)
Producto.belongsTo(Dimension)

TipoProducto.hasMany(DetalleTipoProducto)
DetalleTipoProducto.belongsTo(TipoProducto)

Producto.hasMany(DetalleTipoProducto)
DetalleTipoProducto.belongsTo(Producto)

module.exports = {
    sequelize,
    TipoProducto,
    Dimension,
    Proveedor,
    Producto,
    DetalleTipoProducto
}