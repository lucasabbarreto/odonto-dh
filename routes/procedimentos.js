var express = require('express');
const controller = require('../controllers/procedimentosController');
var router = express.Router();


router.post('/', controller.create);

module.exports = router;