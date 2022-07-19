var express = require('express');
const controller = require('../controllers/cadastroController');
var router = express.Router();
const auth = require('../middlewares/auth');

/* GET home page. */
router.get('/', controller.index);

router.get('/todos', auth, controller.todosCadastros);

router.get('/alterar/:id', auth, controller.alterarCadastro);

router.get('/nivelacesso/:id', auth, controller.nivelAcesso);

router.put('/nivelacesso/:id', auth, controller.alterarNivelAcesso);

router.post('/', controller.criar);

router.put('/alterar/:id', auth, controller.atualizar);

router.delete('/apagar/:id', auth, controller.apagar);

module.exports = router;