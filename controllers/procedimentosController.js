const procedimentosServices = require('../service/procedimentosServices')

const controller = {
  telaCriarProcedimento: async (req, res)=> {
    let nome = req.session.nome;

    res.render('criarProcedimento', {nome})
  },
  listarProcedimentos: async (req, res)=>{
    let nome = req.session.nome;

    const procedimentos = await procedimentosServices.ListarProcedimentos();

    res.render('todosProcedimentos', {nome, procedimentos})
  },
  criarProcedimento: async (req, res) => {
    const { nome } = req.body

    await procedimentosServices.CriarProcedimento(nome)

    return res.redirect('/procedimento/lista');
  },

  telaAlterarProcedimentos: async (req, res) => {
    let { id } = req.params;

    let nome = req.session.nome;

    const procedimento = await procedimentosServices.ProcurarProcedimento(id)

    return res.render('alterarProcedimento', {procedimento, nome});
  },

  buscarProcedimento: async (request, response) => {  
    const { nome } = request.body;

    const procedimento = await procedimentosServices.ProcurarProcedimento(nome);

    return response.json(procedimento)
  },

  alterarProcedimento: async (req, res) => {

    let { id } = req.params;
    const { nome } = req.body;

    await procedimentosServices.alterarProcedimento(id, nome);

    return res.redirect('/procedimento/lista')
  },

  apagarProcedimento: async (req, res) => {
    let { id } = req.params;

    await procedimentosServices.apagarProcedimento(id);

    return res.redirect('/procedimento/lista')
  }
  
}

module.exports = controller;