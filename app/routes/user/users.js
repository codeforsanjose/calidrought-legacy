var UserModel = require('../../../model/user.js'),
    express = require('express'),
    router = express.Router();

router.get('/', function(req, res) {
  UserModel.orderBy({index: 'id'}).run().then( function(result) {
    res.json(result);
  }).error( function(error) {
    res.status(500).send({error: error.message});
  });
});

router.get('/:id', function(req, res) {
  UserModel.get(req.params.id).then( function(user) {
    res.json(user);
  }).error( function(error) {
    res.status(500).send({error: error.message});
  });
});

router.put('/:id', function(req, res) {
  UserModel.get(req.params.id).update(req.body).run().then( function(user) {
    res.json(req.body);
  }).error( function(error) {
    res.status(500).send({error: error.message});
  });
});

router.post('/new', function(req, res) {
  userData = req.body;
  var user = new UserModel(
    userData
  );

  try{
    user.validate()
  } catch(error) {
    res.status(500).send({error: error.message});
  }

  user.save();
  res.json(user);
});

