const auth = require("../middlewares/auth")
const express = require('express');
const router = express.Router();
const controller = require('../controllers/loginController');

/* GET home page. */
router.get('/', controller.index);

router.post('/validar', controller.validarLogin);

module.exports = router;