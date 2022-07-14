const auth = require("../middlewares/auth")
const express = require('express');
const router = express.Router();
const controller = require('../controllers/agendamentoController');

router.get('/', auth, controller.index);

router.get('/agendar', auth, controller.telaAgendar);

router.get('/usuarios', auth, controller.listarUsuarios);

router.get('/prontuario/:id', auth, controller.prontuario);

router.get('/alterar/:id', auth, controller.exibirAgendamento);

router.get('/sair', controller.logout);

router.post('/criar', controller.criarAgendamento);

router.get('/all', controller.listarAgendamento);

router.put('/alterar/:id', auth, controller.alterarAgendamento);

router.delete('/apagar/:id', auth, controller.apagarAgendamento);

module.exports = router;