const auth = require("../middlewares/auth")
const express = require('express');
const router = express.Router();
const database = require('../database/models')


/* GET home page. */
router.get('/', async function(req, res) {
  // const id = request.getSession().getAttribute("id")
  // const usuario = await database.usuarios.findOne({
  //   where:{
  //     id_usuario:id
  //   }
  // })
  
  res.render('agendamento');
});

module.exports = router;