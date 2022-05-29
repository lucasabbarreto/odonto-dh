const procedimentosServices = require('../service/procedimentosServices')

const controller = {
  TodosProcedimentos: async (request, response) => {
    const procedimentos = await procedimentosServices.ListarProcedimentos();
    return response.json(procedimentos);
  },
  index: async (request, response) => {  
    const { nome } = request.query;

    const procedimento = await procedimentosServices.ProcurarProcedimento(nome);

    return response.json(procedimento)
  },
  create: async (request, response) => {
    const {
      nome,
           
    } = request.body

    const procedimento = await procedimentosServices.CriarProcedimento(
      nome,
    )

    return response.json(procedimento);
  }
}

module.exports = controller;