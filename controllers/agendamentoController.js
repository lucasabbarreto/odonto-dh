const agendamentosServices = require('../service/agendamentosServices');
const cadastroServices = require('../service/cadastroService');
const procedimentosServices = require('../service/procedimentosServices');

const controller = {
    index: async function (req, res) {
        const email = req.session.email
        const usuario = await agendamentosServices.index(email);
        const dentistas = await cadastroServices.listarDentistas();
        const id = usuario.id_usuario
        const agendamentos = await agendamentosServices.listarAgendamentosComId_usuario(id);
        console.log(agendamentos)
        const nome = usuario.nome
        const permissao = usuario.permissao
        req.session.nome = nome;
        res.render('agendamentoTeste', {nome, permissao, dentistas, agendamentos});
    },
    telaAgendar: async (req, res) => {
        const todosUsuarios = await cadastroServices.ListarCadastro();
        const dentistas = await cadastroServices.listarDentistas();
        const procedimentos = await procedimentosServices.ListarProcedimentos();
        const nome = req.session.nome;
        res.render('agendar',{todosUsuarios, dentistas, procedimentos, nome});
    },
    listarUsuarios: async (req, res) => {
        let todosUsuarios = await cadastroServices.ListarCadastro();

        todosUsuarios = todosUsuarios.filter(usuario=>{
            return usuario.permissao < 3
        })
        const nome = req.session.nome;
        res.render('agendamentosAdmin',{todosUsuarios, nome});
    },
    prontuario: async (req, res) => {
        let { id } = req.params;
        const agendamentos = await agendamentosServices.listarAgendamentosComId_usuario(id);
        console.log(agendamentos)
        const cadastro = await cadastroServices.procurarCadastroPorId(id);
        let nome = cadastro.nome;
        const usuarioLogado = req.session.nome;
        res.render('prontuario', {agendamentos, usuarioLogado, nome});
    },
    exibirAgendamento: async (req, res) => {
        let { id } = req.params;

        const email = req.session.email
        const usuarioLogado = await agendamentosServices.index(email);
        const permissao = usuarioLogado.permissao;
        
        const dentistas = await cadastroServices.listarDentistas();
        const procedimentos = await procedimentosServices.ListarProcedimentos();
        const agendamento = await agendamentosServices.procurarAgendamentoPorId(id);
        let id_usuario = agendamento.id_usuario;
        const cadastro = await cadastroServices.procurarCadastroPorId(id_usuario);
        const nome = cadastro.nome
        res.render('alterarAgendamento', {dentistas, procedimentos, nome, agendamento, permissao, usuarioLogado})
    },
    criarAgendamento: async (req, res) => {
        let { data_agendamento, id_dentista, id_procedimento, id_usuario } = req.body;
        if (!id_usuario) {
            const cadastro = await cadastroServices.procurarCadastroPorEmail(req.session.email);
            id_usuario = cadastro.id_usuario;
        }
        if (!id_procedimento) {
            id_procedimento = 1;
        }


         data_agendamento = data_agendamento.toLocaleString()

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
        const { id } = req.params
        const { id_dentista, data_agendamento, id_procedimento } = req.body;

        const email = req.session.email
        const usuario = await agendamentosServices.index(email);
        const permissao = usuario.permissao

        await agendamentosServices.alterarAgendamento(
            id,
            id_dentista,
            data_agendamento,
            id_procedimento
        )

        const agendamento = await agendamentosServices.procurarAgendamentoPorId(id);
        const id_usuario = agendamento.id_usuario

        if(permissao > 0){
            return res.redirect(`/agendamento/prontuario/${id_usuario}`)
        } else{
            return res.redirect('/agendamento')
        }    
    },
    apagarAgendamento: async (req, res) => {
        const { id } = req.params;
        
        const procurarAgendamento = await agendamentosServices.procurarAgendamentoPorId(id);        
        let id_usuario = procurarAgendamento.id_usuario

        const agendamento = await agendamentosServices.apagarAgendamento(id);
        const email = req.session.email
        const usuario = await agendamentosServices.index(email);
        const permissao = usuario.permissao

        if (agendamento) {
            return res.send("Não é possivel apagar o agendamento")
        } else if(permissao == 0) {
            return res.redirect('/agendamento');
        } else {
            return res.redirect(`/agendamento/prontuario/${id_usuario}`);
        }



    },
    logout: async (req, res) => {
        req.session.isLogged = false;
        req.session.email = null;
        res.redirect('/login')
    }
};

module.exports = controller;