var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/api/hello', function (req, res, next) {
  res.send('Hi, I am server. How are you');
});

module.exports = router;
