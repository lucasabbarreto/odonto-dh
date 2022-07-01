const database = require('../database/models')

const agendamentosServices = {
    index: async (email) => {

        const usuario = await database.usuarios.findOne({
            where: {
                email
            }
        });
        return usuario;
    },
    criarAgendamento: async (id_usuario, data_agendamento, id_procedimento, id_dentista) => {
        const agendamento = await database.agendamentos.create({
            id_usuario,
            data_agendamento,
            agendamento_confirmado: false,
            id_procedimento,
            id_dentista            
        })

        return agendamento
    },
    listarAgendamentos: async () => {
        const agendamentos = await database.agendamentos.findAll();

        return agendamentos;
    },
    listarAgendamentosComId_usuario: async (id) => {
        const agendamentos = await database.agendamentos.findAll({
            where: {
                id_usuario: id
            },
            attributes : {
                exclude: ['createdAt', 'updatedAt']
            },
            include: {
                model: database.procedimentos,
                as: 'procedimentos'
            }
        });

        return agendamentos;
    },
    alterarAgendamento: async (id, agendamento_confirmado, id_usuario, data_agendamento, id_procedimento) => {
        await database.agendamentos.update({
            id_usuario,
            agendamento_confirmado,
            data_agendamento,
            id_procedimento
        }, {
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
        const agendamento = await database.agendamentos.findOne({
            where: {
                id_agendamento: id
            }
        })

        const agendamento_confirmado = agendamento.agendamento_confirmado

        if (agendamento_confirmado) {
            return agendamento_confirmado
        } else {
            await database.agendamentos.destroy({
                where: {
                    id_agendamento: id
                }
            })

        }
    },
    formatarAgendamentos: (agendamentos) => {
        agendamentos.map(agendamento =>{
            agendamento.data_agendamento = `${agendamento.data_agendamento.getDate()}/${agendamento.data_agendamento.getMonth()+1}/${agendamento.data_agendamento.getFullYear()}`
            return agendamento
        })
    }
};

module.exports = agendamentosServices;