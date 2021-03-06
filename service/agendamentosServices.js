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
        const agendamentos = todosAgendamentos[0].filter(agendamento => agendamento.id_usuario == id)
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
        await database.agendamentos.destroy({
            where: {
                id_agendamento: id
            }
        })

    },
    formatarData: (data => {

        let ano = data.getFullYear()

        let mes = data.getMonth() + 1;
        mes = mes.toString()
        if (mes.length == 1) {
            mes = `0${mes}`
        }

        let dia = data.getDate()

        dia = dia.toString()
        if (dia.length == 1) {
            dia = `0${dia}`
        }

        novoFormato = `${ano}-${mes}-${dia}`
        return novoFormato
    })
};

module.exports = agendamentosServices;