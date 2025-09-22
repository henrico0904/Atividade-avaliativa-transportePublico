import dados from "../models/dados.js";
const { onibus } = dados;

const getAll = (req, res) => {
  const resultado = onibus;

  res.status(200).json({
    total: onibus.length,
    onibus: resultado,
  });
};

const getByID = (req, res) => {
  let id = parseInt(req.params.id);
  const o = onibus.find((o) => o.id === id);

  if (o) {
    res.status(200).json({
      sucess: true,
      onibus: onibu,
    });
  }
  res.status(400).json({
    sucess: false,
    message: "Onibus não encontrado",
  });
};

const createOnibus = (req, res) => {
  const { linha, origem, destino, horario, tarifa, veiculo, status } = req.body;

  //regras de negócio
  if (tarifa < 0) {
    res.status(400).json({
      sucess: false,
      message: "o campo 'tarifa' não pode ser menor que 0",
    });
  }
  if (destino.toLowerCase() === origem.toLowerCase()) {
    res.status(400).json({
      success: false,
      message: "os campos 'origem' e 'destino' não podem ser iguais",
    });
  }

  const novoOnibus = {
    id: onibus.length + 1,
    linha: linha.toLowerCase(),
    origem: origem.toLowerCase(),
    destino: destino.toLowerCase(),
    horario: horario.toLowerCase(),
    tarifa: tarifa,
    veiculo: veiculo.toLowerCase(),
    status: status.toLowerCase(),
  };
  onibus.push(novoOnibus);
  res.status(200).json({
    sucess: true,
    message: "Nova linha adicionada com sucesso",
    onibus: novoOnibus,
  });
};

const deletaOnibus = (req, res) => {
  let id = parseInt(req.params.id);
  const onibusParaDeletar = onibus.find((o) => o.id === id);

  if (!onibusParaDeletar) {
    return res.status(400).json({
      sucess: false,
      message: "Esse onibus não existe",
    });
  }
  const onibusFiltrado = onibus.filter((o) => o.id !== id);
  onibus.splice(0, onibus.length, ...onibusFiltrado);

  res.status(200).json({
    sucess: true,
    message: "onibus excluido com sucesso",
    onibusDeletado: onibusParaDeletar,
  });
};

const updateOnibus = (req, res) => {
  const id = parseInt(req.params.id);

  const { linha, origem, destino, horario, tarifa, veiculo, status } = req.body;

  const idParaEdit = id;

  //regras de negócio
  if (tarifa < 0) {
    res.status(400).json({
      sucess: false,
      message: "o campo 'tarifa' não pode ser menor que 0",
    });
  }
  if (destino.toLowerCase() === origem.toLowerCase()) {
    res.status(400).json({
      success: false,
      message: "os campos 'origem' e 'destino' não podem ser iguais",
    });
  }
  

  if (isNaN(idParaEdit)) {
    return res.status(400).json({
      success: false,
      message: "O id deve ser valido",
    });
  }

  const onibusExiste = onibus.find((o) => o.id === idParaEdit);
  if (!onibusExiste) {
    return res.status(400).json({
      sucess: false,
      message: "onibus com esse id não existe",
    });
  }

  const onibusAtualizados = onibus.map((o) =>
    o.id === idParaEdit
      ? {
          ...o,
          ...(linha && { linha }),
          ...(origem && { origem }),
          ...(destino && { destino }),
          ...(horario && { horario }),
          ...(tarifa && { tarifa: parseInt(tarifa) }),
          ...(veiculo && { veiculo }),
          ...(status && { status }),
        }
      : o
  );

  onibus.splice(0, onibus.length, ...onibusAtualizados);

  const novoOnibus = onibus.find((o) => o.id === idParaEdit);

  res.status(200).json({
    sucess: true,
    message: "onibus atualizado com sucesso",
    onibus: novoOnibus,
  });
};

export { getAll, getByID, createOnibus, deletaOnibus, updateOnibus };
