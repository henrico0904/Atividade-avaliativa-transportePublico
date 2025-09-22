import dados from "../models/dados.js"
const {onibus} = dados

const getAll = (req, res) =>{
    const resultado = onibus

    res.status(200).json({
        total: onibus.length,
        onibus: resultado
    })
}

export {getAll}