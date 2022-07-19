const cadastroServices = require('../service/cadastroService');
const agendamentosServices = require('../service/agendamentosServices');

const controller = {
  index: async (req, res) => {
    const email = req.session.email;
    if (email) {
      const usuario = await agendamentosServices.index(email);
      const nome = usuario.nome
      req.session.nome = nome;
      res.render('cadastro', { nome });
    } else {
      const nome = null
      res.render('cadastro', { nome });
    }

  },

  todosCadastros: async (req, res) => {
    const todosUsuarios = await cadastroServices.ListarCadastro();
    const nome = req.session.nome;
    let usuarios = todosUsuarios.filter(usuario => {
      return usuario.permissao < 3
    })
    return res.render('listaCadastro', { usuarios, nome });
  },

  alterarCadastro: async (req, res) => {
    let { id } = req.params;
    const usuario = await cadastroServices.procurarCadastroPorId(id);

    let nome = req.session.nome;

    let data_nascimento = usuario.data_nascimento;

    data_nascimento = agendamentosServices.formatarData(data_nascimento)

    res.render('alterarCadastro', { usuario, nome, data_nascimento })
  },
  nivelAcesso: async (req, res) => {
    let { id } = req.params;    
    const usuario = await cadastroServices.procurarCadastroPorId(id);

    let nome = req.session.nome

    res.render('telaNivelAcesso', { usuario, nome })
  },
  alterarNivelAcesso: async (req, res)=> {
    let { id } = req.params;

    let { permissao } = req.body;

    await cadastroServices.atualizarNivelAcesso(id, permissao)

    res.redirect('/cadastro/todos')
  },
  criar: async (req, res) => {
    const emailLogado = req.session.email;
    if (emailLogado) {
      var usuario = await agendamentosServices.index(emailLogado);
    } else {
      var usuario = { permissao: 0 }
    }
    let {
      nome,
      sexo,
      cpf,
      telefone,
      data_nascimento,
      email,
      senha,
      cep,
      endereco,
      complemento,
      bairro,
      cidade,
      estado,

    } = req.body

    const permissao = 0;

    if (!senha) {
      senha = "admin"
    }

    data_nascimento = `${data_nascimento}T12:00:00`

    await cadastroServices.CriarCadastro(
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

    if (usuario.permissao > 0) {
      return res.redirect('/agendamento')
    } else {
      return res.redirect('/login')
    }
  },

  atualizar: async (req, res) => {
    const { id } = req.params;

    let {
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

    const usuario = await cadastroServices.procurarCadastroPorId(id);

    if (!senha) {
      senha = usuario.senha
    }

    if (!estado) {
      estado = usuario.estado
    }

    data_nascimento = `${data_nascimento}T12:00:00`

    await cadastroServices.AtualizarUsuario(
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

    return res.redirect('/cadastro/todos');
  },

  apagar: async (req, res) => {
    const { id } = req.params;

    await cadastroServices.apagarUsuario(id)

    return res.redirect('/cadastro/todos')
  }
}

module.exports = controller;