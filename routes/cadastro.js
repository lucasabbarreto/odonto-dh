var express = require('express');
const controller = require('../controllers/cadastroController');
var router = express.Router();

/* GET home page. */
router.get('/', controller.index);

router.get('/all', controller.TodosCadastros);

router.post('/',controller.create);

router.put('/:id', controller.atualizar);

router.delete('/apagar/:id', controller.apagar);

module.exports = router;