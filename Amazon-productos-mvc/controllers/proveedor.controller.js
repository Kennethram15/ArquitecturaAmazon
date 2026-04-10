const { Proveedor } = require('../models')

exports.create = async (req, res) => {
    try {
        const { nombre } = req.body;

        const proveedorExistente = await Proveedor.findOne({ where: { nombre: nombre } });

        if (proveedorExistente) {
            return res.status(200).json({
                message: 'El proveedor ' + nombre + ' ya existe',
                proveedor: proveedorExistente,
                idempotente: true
            });
        }

        const nuevoProveedor = await Proveedor.create(req.body);
        return res.status(201).json({
            message: 'El proveedor ' + nuevoProveedor.nombre + ' ha sido creado exitosamente',
            proveedor: nuevoProveedor,
            idempotente: false
        });

    } catch (error) {
        return res.status(500).json({ message: 'Error interno del servidor', error });
    }
}

exports.getAll = async (req, res) => {
    const proveedores = await Proveedor.findAll()
    res.status(200).json(proveedores)
}

exports.update = async (req, res) => {
    const { id } = req.params

    await Proveedor.update(req.body, {
        where: { id }
    })

    res.status(200).json({
        code: 200,
        message: 'Proveedor actualizado correctamente'
    })
}

exports.delete = async (req, res) => {
    const { id } = req.params

    await Proveedor.update(
        { estado: 0 },
        { where: { id } }
    )

    res.status(200).json({
        message: 'Proveedor eliminado correctamente' 
    })
}