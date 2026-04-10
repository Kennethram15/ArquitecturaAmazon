const { TipoProducto } = require('../models')

exports.create = async (req, res) => {
    try {
        // 1. Aquí sacamos el campo "tipo" (ej. "Celulares", "Tablets")
        const { tipo } = req.body;

        // 2. Buscamos si ya existe ese tipo en la base de datos
        const tipoExistente = await TipoProducto.findOne({ where: { tipo: tipo } });

        // 3. Si ya existe, aplicamos la idempotencia (200 OK)
        if (tipoExistente) {
            return res.status(200).json({
                message: "El tipo de producto '" + tipo + "' ya existe",
                tipoproducto: tipoExistente,
                idempotente: true
            });
        }

        // 4. Si no existe, lo creamos normalmente (201 Created)
        const nuevoTipo = await TipoProducto.create(req.body);
        return res.status(201).json({
            message: "El tipo de producto '" + nuevoTipo.tipo + "' ha sido creado exitosamente",
            tipoproducto: nuevoTipo,
            idempotente: false
        });

    } catch (error) {
        return res.status(500).json({ message: 'Error interno del servidor', error });
    }
}

exports.getAll = async (req, res) => {
    const tipos = await TipoProducto.findAll()
    res.status(200).json(tipos)
}

exports.update = async (req, res) => {
    const { id } = req.params

    await TipoProducto.update(req.body, {
        where: { id }
    })

    res.status(200).json({
        code: 200,
        message: 'Tipo de producto actualizado correctamente'
    })
}

exports.delete = async (req, res) => {
    const { id } = req.params

    await TipoProducto.update(
        { estado: 0 },
        { where: { id } }
    )

    res.status(200).json({
        message: 'Tipo de producto eliminado correctamente'
    })
}