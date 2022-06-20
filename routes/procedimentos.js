var express = require('express');
const controller = require('../controllers/procedimentosController');
var router = express.Router();


router.post('/', controller.criarProcedimento);

router.get('/', controller.TodosProcedimentos);

router.post('/buscar', controller.buscarProcedimento);

router.put('/', controller.alterarProcedimento);

router.delete('/', controller.apagarProcedimento);

module.exports = router;