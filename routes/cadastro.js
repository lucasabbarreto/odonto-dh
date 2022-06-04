var express = require('express');
const controller = require('../controllers/cadastroController');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('cadastro');
});

router.post('/',controller.create);

module.exports = router;