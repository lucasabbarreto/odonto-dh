const auth = require("../middlewares/auth")
const express = require('express');
const router = express.Router();
const database = require('../database/models')

/* GET home page. */
router.get('/', (req, res) => {
  res.render('login')
});

router.post('/', async (req, res) => {
  const { email, senha } = req.body;
  const usuario = await database.usuarios.findOne({
    where: {
      email: email
    }
  });

  if (usuario) {
    if (usuario.senha === senha) {
      req.session.isLogged = true
      req.session.nome = usuario.nome
      return res.redirect('/agendamento')
    } else {
      return res.redirect('/login')
    }
  }
});

module.exports = router;