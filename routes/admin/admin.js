let express = require("express");
let router = express.Router();

router.get('/', function (req, res) {
    res.render('administracao/admin')
})

module.exports = router