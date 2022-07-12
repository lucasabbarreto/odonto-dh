const auth = require("../middlewares/auth")
const express = require('express');
const router = express.Router();
const controller = require('../controllers/agendamentoController');

router.get('/', auth, controller.index);

router.get('/sair', controller.logout);

router.post('/criar', controller.criarAgendamento);

router.get('/all', controller.listarAgendamento);

router.put('/alterar', controller.alterarAgendamento);

router.delete('/apagar', controller.apagarAgendamento);

module.exports = router;