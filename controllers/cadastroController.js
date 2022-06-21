const cadastroServices = require('../service/cadastroService');

const controller = {
  index: (req, res) => {
    res.render('cadastro');
  },
  
  TodosCadastros: async (request, response) => {
    const cadastro = await cadastroServices.ListarCadastro();
    return response.json(cadastro);
  },
  
  create: async (request, response) => {
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
      numero,
      complemento,
      bairro,
      cidade,
      estado,

    } = request.body

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
      numero,
      complemento,
      bairro,
      cidade,
      estado,
    )

    return response.json(cadastro);
  },

  atualizar: async (request, response) => {
    const { id } = request.params;

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
      numero,
      complemento,
      bairro,
      cidade,
      estado,

    } = request.body

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
      numero,
      complemento,
      bairro,
      cidade,
      estado,
    )

    return response.json(usuario);
  },

  apagar: async (request, response) => {
    const { id } = request.params;

    await cadastroServices.apagarUsuario(id)

    return response.send("Usuário " + id + " apagado")
  }
}

module.exports = controller;