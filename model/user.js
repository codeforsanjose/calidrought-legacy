var config = require('config'),
    thinky = require('thinky')(config.dbConfig),
    type = thinky.type;

var UserModel = thinky.createModel('User', {
  username: type.string(),
  email:    type.string(),
  password: type.string(),
  admin:    type.boolean()
});

module.exports = UserModel;
