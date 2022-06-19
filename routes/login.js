const auth = require("../middlewares/auth")
const express = require('express');
const router = express.Router();
const database = require('../database/models')

/* GET home page. */
router.get('/', (req,res) =>{
  res.render('login')
})
router.post('/', async(req, res) => {
  const {email,senha} = req.body
  const usuario = await database.usuarios.findOne({
    where:{
      email
    } 
  })
  req.session.id = usuario.dataValues.id_usuario
  console.log("teste")
  console.log(usuario)
      if(email && senha){
    req.session.isLogged = true
    console.log(req.session)
    return res.redirect('/agendamento') 
  }
})
module.exports = router;