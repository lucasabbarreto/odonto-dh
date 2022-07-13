var express = require('express');
const controller = require('../controllers/procedimentosController');
var router = express.Router();


router.post('/', controller.criarProcedimento);

router.get('/', controller.telaCriarProcedimento);

router.post('/buscar', controller.buscarProcedimento);

router.get('/lista', controller.listarProcedimentos);

router.get('/alterar/:id', controller.telaAlterarProcedimentos);

router.put('/alterar/:id', controller.alterarProcedimento);

router.delete('/:id', controller.apagarProcedimento);

module.exports = router;