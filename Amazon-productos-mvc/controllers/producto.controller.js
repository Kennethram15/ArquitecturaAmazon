const { Producto } = require('../models')

exports.create = async (req, res) => {
    try {
        const { nombre } = req.body;

        const productoExistente = await Producto.findOne({ where: { nombre: nombre } });

        if (productoExistente) {
            return res.status(200).json({
                message: 'El producto ' + nombre + ' ya existe',
                producto: productoExistente,
                idempotente: true
            });
        }

        const nuevoProducto = await Producto.create(req.body);
        return res.status(201).json({
            message: 'El producto ' + nuevoProducto.nombre + ' ha sido creado exitosamente',
            producto: nuevoProducto,
            idempotente: false
        });

    } catch (error) {
        return res.status(500).json({ message: 'Error interno del servidor', error });
    }
}

exports.getAll = async (req, res) => {
    const productos = await Producto.findAll()
    res.status(200).json(productos)
}

exports.update = async (req, res) => {
    const { id } = req.params

    await Producto.update(req.body, {
        where: { id }
    })

    res.status(200).json({
        code: 200,
        message: 'Producto actualizado correctamente'
    })
}

exports.delete = async (req, res) => {
    const { id } = req.params

    await Producto.update(
        { estado: 0 },
        { where: { id } }
    )

    res.status(200).json({
        message: 'Producto eliminado correctamente'
    })
}