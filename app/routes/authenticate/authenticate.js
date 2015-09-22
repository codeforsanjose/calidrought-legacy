var UserModel = require('../../../model/user.js'),
    express = require('express'),
    router = express.Router(),
    promise = require('bluebird'),
    jwt = require('jsonwebtoken'),
    config = require('config'),
    bcrypt = promise.promisifyAll(require('bcrypt'));

router.post('/', function(req, res) {
  UserModel.get(req.body.username).then( function(user){
    return [ bcrypt.compareAsync(req.body.password, user.password),
             user ];
  }).spread( function(result, user) {
    if (result) {
      var token = jwt.sign(user, config.jwtSecret, {
        expiresInMinutes: config.jwtExpireTime
      });
      res.json({ success: result, message: 'welcome', token: token });
    } else {
      res.json({ success: result, message: 'authorization failed' });
    }
  }).catch(function(err) {
    console.log(err);
  });
});

module.exports = router;
