const cadastroServices = require('../service/cadastroService')

const controller = {
  TodosCadastro: async (request, response) => {
    const cadastro = await candastroServices.ListarCadastro();
    return response.json(cadastro);
  },
  index: async (request, response) => {  
    const { nome } = request.query;

    const cadastro = await cadastroServices.ProcurarCadastro(nome);

    return response.json(cadastro)
  },

  create: async (request, response) => {
    const {
      nome,
      sexo,
      cpf,
      telefone,
      datanascimento,
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
      datanascimento,
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
  }
}

module.exports = controller;