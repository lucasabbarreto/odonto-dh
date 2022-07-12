const auth = require("../middlewares/auth")
const express = require('express');
const router = express.Router();
const controller = require('../controllers/agendamentoController');

router.get('/', auth, controller.index);

router.get('/agendar', controller.telaAgendar);

router.get('/usuarios', controller.listarUsuarios);

router.get('/prontuario/:id', controller.prontuario);

router.get('/alterar/:id', controller.exibirAgendamento);

router.get('/sair', controller.logout);

router.post('/criar', controller.criarAgendamento);

router.get('/all', controller.listarAgendamento);

router.put('/alterar/:id', controller.alterarAgendamento);

router.delete('/apagar/:id', controller.apagarAgendamento);

module.exports = router;