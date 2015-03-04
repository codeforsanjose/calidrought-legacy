var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/collections', function(req, res, next) {

  collections = get_collections();
  make_collections_available_on_page();

  res.render('index', { title: 'Express' });
});

module.exports = router;
