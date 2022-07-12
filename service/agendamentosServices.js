const { sequelize } = require('../database/models');
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
    criarAgendamento: async (data_agendamento, id_procedimento, id_usuario, id_dentista) => {
        const agendamento = await database.agendamentos.create({            
            data_agendamento,
            agendamento_confirmado: false,
            id_procedimento,
            id_usuario,
            id_dentista            
        })

        return agendamento
    },
    procurarAgendamentoPorId: async (id) => {
        const agendamento = await database.agendamentos.findByPk(id);

        return agendamento;
    },
    listarAgendamentos: async () => {
        const agendamentos = await database.agendamentos.findAll();

        return agendamentos;
    },
    listarAgendamentosComId_usuario: async (id) => {
       const todosAgendamentos = await sequelize.query('SELECT id_agendamento, data_agendamento, nome, id_usuario FROM agendamentos INNER JOIN procedimentos ON agendamentos.id_procedimento = procedimentos.id_procedimento ORDER BY data_agendamento ASC')
        console.log(todosAgendamentos[0])
       const agendamentos = todosAgendamentos[0].filter(agendamento=> agendamento.id_usuario == id)
        console.log(agendamentos)
       return agendamentos    
    },
    alterarAgendamento: async (id, id_dentista, data_agendamento, id_procedimento) => {
        await database.agendamentos.update({
            id_dentista,
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