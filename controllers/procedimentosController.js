const procedimentosServices = require('../service/procedimentosServices')

const controller = {
  criarProcedimento: async (request, response) => {
    const { nome } = request.body

    const procedimento = await procedimentosServices.CriarProcedimento(nome)

    return response.json(procedimento);
  },

  TodosProcedimentos: async (request, response) => {
    const procedimentos = await procedimentosServices.ListarProcedimentos();
    return response.json(procedimentos);
  },

  buscarProcedimento: async (request, response) => {  
    const { nome } = request.body;

    const procedimento = await procedimentosServices.ProcurarProcedimento(nome);

    return response.json(procedimento)
  },

  alterarProcedimento: async (req, res) => {
    const { nomeAtual, nomeAtualizado } = req.body;

    await procedimentosServices.alterarProcedimento(nomeAtual, nomeAtualizado);

    return res.send("Procedimento " + nomeAtual + " alterado com sucesso para " + nomeAtualizado)
  },

  apagarProcedimento: async (req, res) => {
    const { nome } = req.body;

    await procedimentosServices.apagarProcedimento(nome);

    return res.send("Procedimento " + nome + " apagado com sucesso.")
  }
  
}

module.exports = controller;