const database = require('../database/models')

const agendamentosServices = {
    index: async (nome) => {
        
        const usuario = await database.usuarios.findOne({
        where: {
          nome: nome
        }
    });
        return usuario;
    },
    criarAgendamento:  async (id_usuario, data_agendamento, id_procedimento) => {
        const agendamento = await database.agendamentos.create({
            data_agendamento,
            agendamento_confirmado: false,
            id_procedimento,
            id_usuario
        })

        return agendamento;

    },
    listarAgendamentos: async () => {
        const agendamentos = await database.agendamentos.findAll();

        return agendamentos;
    },
    alterarAgendamento: async (id, agendamento_confirmado, id_usuario, data_agendamento, id_procedimento) =>{
        await database.agendamentos.update({
            id_usuario,
            agendamento_confirmado,
            data_agendamento,
            id_procedimento
        },{
            where: {
                id_agendamento: id
            }
        })
        const agendamento = await database.agendamentos.findOne({
            where: {
                id_agendamento: id
            }
        })
        return agendamento
    },
    apagarAgendamento: async (id) => {
        await database.agendamentos.destroy({
            where: {
                id_agendamento: id
            }
        })
    }
};

module.exports = agendamentosServices;