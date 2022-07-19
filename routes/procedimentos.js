var express = require('express');
const controller = require('../controllers/procedimentosController');
var router = express.Router();
const auth = require('../middlewares/auth');


router.post('/', auth, controller.criarProcedimento);

router.get('/', auth, controller.telaCriarProcedimento);

router.post('/buscar', auth, controller.buscarProcedimento);

router.get('/lista', auth, controller.listarProcedimentos);

router.get('/alterar/:id', auth, controller.telaAlterarProcedimentos);

router.put('/alterar/:id', auth, controller.alterarProcedimento);

router.delete('/:id', auth, controller.apagarProcedimento);

module.exports = router;