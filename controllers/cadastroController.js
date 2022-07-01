const cadastroServices = require('../service/cadastroService');

const controller = {
  index: (req, res) => {
    res.render('cadastro');
  },
  
  TodosCadastros: async (req, res) => {
    const cadastro = await cadastroServices.ListarCadastro();
    return res.json(cadastro);
  },
  
  create: async (req, res) => {
    const {
      nome,
      sexo,
      cpf,
      telefone,
      data_nascimento,
      email,
      senha,
      permissao,
      cep,
      endereco,
      complemento,
      bairro,
      cidade,
      estado,

    } = req.body

    const cadastro = await cadastroServices.CriarCadastro(
      nome,
      sexo,
      cpf,
      telefone,
      data_nascimento,
      email,
      senha,
      permissao,
      cep,
      endereco,
      complemento,
      bairro,
      cidade,
      estado,
    )

    return res.json(cadastro);
  },

  atualizar: async (req, res) => {
    const { id } = req.params;

    const {
      nome,
      sexo,
      cpf,
      telefone,
      data_nascimento,
      email,
      senha,
      permissao,
      cep,
      endereco,
      complemento,
      bairro,
      cidade,
      estado,

    } = req.body

    console.log(req.body)

    const usuario = await cadastroServices.AtualizarUsuario(
      id,
      nome,
      sexo,
      cpf,
      telefone,
      data_nascimento,
      email,
      senha,
      permissao,
      cep,
      endereco,
      complemento,
      bairro,
      cidade,
      estado,
    )

    return res.json(usuario);
  },

  apagar: async (req, res) => {
    const { id } = req.params;

    await cadastroServices.apagarUsuario(id)

    return res.send("Usuário " + id + " apagado")
  }
}

module.exports = controller;