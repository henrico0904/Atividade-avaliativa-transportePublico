import dados from "../models/dados.js"
const {onibus} = dados

const getAll = (req, res) =>{
    const resultado = onibus

    res.status(200).json({
        total: onibus.length,
        onibus: resultado
    })
}

const getByID = (req, res) =>{
    
    let id = parseInt(req.params.id)
    const onibu = onibus.find(o => o.id === id) //deixei ""onibu" escrito porque ele no singular é plural e tava dando conflito

    if(onibu){
        res.status(200).json({
            sucess: true,
            onibus: onibu
        })
    }
    res.status(400).json({
        sucess: false,
        message: "Onibus não encontrado"
    })
}

const createOnibus = (req, res) => {
    const { linha, origem, destino, horario, tarifa, veiculo, status } = req.body

    const novoOnibus = {
        id: onibus.length+1,
        linha: linha.toLowerCase(),
        origem: origem.toLowerCase(),
        destino: destino.toLowerCase(),
        horario: horario.toLowerCase(),
        tarifa: tarifa,
        veiculo: veiculo.toLowerCase(),
        status: status.toLowerCase(),
    }
    onibus.push(novoOnibus)
    res.status(200).json({
        sucess: true,
        message: "Nova linha adicionada com sucesso",
        onibus: novoOnibus
    })
}







export {getAll, getByID, createOnibus}