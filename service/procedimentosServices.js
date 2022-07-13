const database = require('../database/models');

const procedimentosServices = {
  ListarProcedimentos: async () => {
    const procedimentos = await database.procedimentos.findAll();
    return procedimentos;
  },
  ProcurarProcedimento: async (id) => {

    const procedimento = await database.procedimentos.findByPk(id);
    return procedimento;
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
    id,
    nome
  ) => {
    await database.procedimentos.update({
      nome
    }, {
      where: {
        id_procedimento: id
      }
    })
  },
  apagarProcedimento: async (id) => {
      await database.procedimentos.destroy({
        where: {
          id_procedimento: id
        }
      })
    }      
};

module.exports = procedimentosServices;