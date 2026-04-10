module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Producto', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        existencia: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        precio_compra: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false
        },
        precio_venta: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false
        },
        codigo_barras: {
            type: DataTypes.STRING,
            allowNull: false
        },
        descripcion: {
            type: DataTypes.STRING,
            allowNull: false
        },
        estado: {
            type: DataTypes.INTEGER,
            defaultValue: 1
        }
    }, {
        timestamps: true,
        tableName: 'productos'
    })
}