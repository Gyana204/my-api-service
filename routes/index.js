var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/api', function(req, res, next) {
  res.render('index', { title: 'Express123' });
});

module.exports = router;
