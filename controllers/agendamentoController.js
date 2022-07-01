const agendamentosServices = require('../service/agendamentosServices');

const controller = {
    index: async function(req, res) {
        const email = req.session.email 
        const usuario = await agendamentosServices.index(email);
        const id = usuario.id_usuario
        const agendamentos = await agendamentosServices.listarAgendamentosComId_usuario(id)
        console.log(agendamentos)
        res.render('agendamento', {usuario, agendamentos});
    },
    criarAgendamento: async (req, res) => {
        const { id } = req.params;
        const id_usuario = Number(id);
        const { data_agendamento, id_dentista, id_procedimento } = req.body;

        const agendamento = await agendamentosServices.criarAgendamento(
            id_usuario, 
            data_agendamento, 
            id_procedimento,
            id_dentista
        );

        return res.json(agendamento)

    },
    listarAgendamento: async (req, res) => {

        const agendamentos = await agendamentosServices.listarAgendamentos();

        return res.json(agendamentos);

    },
    alterarAgendamento: async (req, res) => {
        const { id } = req.params;
        const { id_usuario, agendamento_confirmado, data_agendamento, id_procedimento } = req.body;

        const agendamento = await agendamentosServices.alterarAgendamento(
            id,
            agendamento_confirmado,
            id_usuario,
            data_agendamento,
            id_procedimento 
        )
        
        return res.send("Agendamento " + agendamento.id_agendamento + " alterado com sucesso");
    },
    apagarAgendamento: async (req, res) => {
        const { id } = req.params;

        const agendamento = await agendamentosServices.apagarAgendamento(id);
        if(agendamento){
            return res.send("Não é possivel apagar o agendamento") 
        }else{
            return res.send("Agendamento " + id + " apagado.")
        }

       

    },
    logout: async (req, res) => {
        req.session.isLogged = false;
        req.session.email = null;
        res.redirect('/login')
    }
};

module.exports = controller;