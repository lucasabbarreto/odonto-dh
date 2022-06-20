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
    nome
  ) => {
    const novoProcedimento = await database.procedimentos.create({
      nome
    });

    return novoProcedimento;
  },
  alterarProcedimento: async (
    nomeAtual,
    nomeAtualizado
  ) => {
    await database.procedimentos.update({
      nome: nomeAtualizado
    }, {
      where: {
        nome: nomeAtual
      }
    })
  },
  apagarProcedimento: async (nome) => {
      await database.procedimentos.destroy({
        where: {
          nome
        }
      })
    }      
};

module.exports = procedimentosServices;