var express = require('express');
const controller = require('../controllers/cadastroController');
var router = express.Router();

/* GET home page. */
router.get('/', controller.index);

router.get('/todos', controller.todosCadastros);

router.get('/alterar/:id', controller.alterarCadastro);

router.post('/',controller.criar);

router.put('/alterar/:id', controller.atualizar);

router.delete('/apagar/:id', controller.apagar);

module.exports = router;