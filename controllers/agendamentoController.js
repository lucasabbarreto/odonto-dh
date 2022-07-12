const agendamentosServices = require('../service/agendamentosServices');
const cadastroServices = require('../service/cadastroService');
const procedimentosServices = require('../service/procedimentosServices');

const controller = {
    index: async function (req, res) {
        const email = req.session.email
        const usuario = await agendamentosServices.index(email);
        const id = usuario.id_usuario
        const agendamentos = await agendamentosServices.listarAgendamentosComId_usuario(id)
        const dentistas = await cadastroServices.listarDentistas()
        const todosUsuarios = await cadastroServices.ListarCadastro()
        const procedimentos = await procedimentosServices.ListarProcedimentos();
        const todosAgendamentos = await agendamentosServices.listarAgendamentos();
        console.log(agendamentos)
        const permissao = 0
        let usuarioSelecionado = null;
        res.render('agendamento', { usuario, todosUsuarios, procedimentos, agendamentos, todosAgendamentos, dentistas, permissao, usuarioSelecionado });
    },
    criarAgendamento: async (req, res) => {
        const { data_agendamento, id_dentista, id_procedimento, id_usuario } = req.body;
        if (!id_usuario) {
            const cadastro = await cadastroServices.procurarCadastroPorEmail(req.session.email);
            id_usuario = cadastro.id_usuario;
        }
        if (!id_procedimento) {
            id_procedimento = 1;
        }

        await agendamentosServices.criarAgendamento(
            data_agendamento,
            id_procedimento,
            id_usuario,
            id_dentista
        );

        return res.redirect('/agendamento')

    },
    listarAgendamento: async (req, res) => {

        const agendamentos = await agendamentosServices.listarAgendamentos();

        return res.json(agendamentos);

    },
    alterarAgendamento: async (req, res) => {
        const {id_agendamento, id_usuario, agendamento_confirmado, data_agendamento, id_procedimento } = req.body;

        const agendamento = await agendamentosServices.alterarAgendamento(
            id_agendamento,
            agendamento_confirmado,
            id_usuario,
            data_agendamento,
            id_procedimento
        )

        return res.send("Agendamento " + agendamento.id_agendamento + " alterado com sucesso");
    },
    apagarAgendamento: async (req, res) => {
        const { id_agendamento } = req.body;
        const agendamento = await agendamentosServices.apagarAgendamento(id_agendamento);
        if (agendamento) {
            return res.send("Não é possivel apagar o agendamento")
        } else {
            return res.send("Agendamento " + id_agendamento + " apagado.")
        }



    },
    logout: async (req, res) => {
        req.session.isLogged = false;
        req.session.email = null;
        res.redirect('/login')
    }
};

module.exports = controller;