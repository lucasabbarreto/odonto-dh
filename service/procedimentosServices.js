const database = require('../database/models');

const procedimentosServices = {
  ListarProcedimentos: async () => {
    const procedimentos = await database.procedimentos.findAll();
    return procedimentos;
  },
  ProcurarProcedimento: async (procedimento) => {
   
    const nomeProcedimento = await database.procedimentos.findOne({
      where: {
        nome: procedimento
      }
    });
    return nomeProcedimento;
  },
  CriarProcedimento: async (
    nome,
  ) => {
    const novoProcedimento = await database.procedimentos.create({
      nome,
    });

    return novoProcedimento;
  }
}

module.exports = procedimentosServices;