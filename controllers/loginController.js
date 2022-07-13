const database = require('../database/models');

const controller = {
  index: (req, res) => {
    res.render('login', { loginFail: false })
  },
  validarLogin: async (req, res) => {

    const { email, senha } = req.body;

    const usuario = await database.usuarios.findOne({
      where: {
        email: email
      }
    });

    if (usuario) {
      if (usuario.senha === senha) {
        req.session.isLogged = true
        req.session.email = usuario.email
        req.session.nome = usuario.nome
        return res.redirect('/agendamento')
      } else {
        return res.render('login', { loginFail: true })
      }
    }
  }
}

module.exports = controller;