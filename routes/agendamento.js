const auth = require("../middlewares/auth")
const express = require('express');
const router = express.Router();
const database = require('../database/models')


/* GET home page. */
router.get('/', auth,  async function(req, res) {
  const usuario = await database.usuarios.findOne({
    where: {
      nome: req.session.nome
    }
  })
  res.render('agendamento', {usuario});
});

router.get('/sair', async (req, res) => {
  req.session.isLogged = false;
  req.session.nome = null;
  res.redirect('/login')
})

module.exports = router;