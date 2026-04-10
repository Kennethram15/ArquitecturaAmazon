const { Dimension } = require('../models')

exports.create = async (req, res) => {
    try {
        const { nombre } = req.body;

        const dimensionExistente = await Dimension.findOne({ where: { nombre: nombre } });

        if (dimensionExistente) {
            return res.status(200).json({
                message: 'La dimensión ' + nombre + ' ya existe',
                dimension: dimensionExistente,
                idempotente: true
            });
        }
        const nuevaDimension = await Dimension.create(req.body);
        return res.status(201).json({
            message: 'La dimensión ' + nuevaDimension.nombre + ' ha sido creada exitosamente',
            dimension: nuevaDimension,
            idempotente: false
        });

    } catch (error) {
        return res.status(500).json({ message: 'Error interno del servidor', error });
    }
}

exports.getAll = async (req, res) => {
    const tipos = await Dimension.findAll()
    res.status(200).json(tipos)
}

exports.update = async (req, res) => {
    const { id } = req.params

    await Dimension.update(req.body, {
        where: { id }
    })

    res.status(200).json({
        code: 200,
        message: 'Dimensión actualizada correctamente'
    })
}

exports.delete = async (req, res) => {
    const { id } = req.params

    await Dimension.update(
        { estado: 0 },
        { where: { id } }
    )

    res.status(200).json({
        message: 'Dimensión eliminada correctamente'
    })
}