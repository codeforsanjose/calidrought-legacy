var config = require('config'),
    thinky = require('thinky')(config.dbConfig),
    bcrypt = require('bcrypt'),
    type = thinky.type;

var UserModel = thinky.createModel('User', {
  username: type.string(),
  email:    type.string(),
  password: type.string(),
  admin:    type.boolean()
});

UserModel.pre('save', function(next) {
  this.password = bcrypt.hashSync(this.password, 10);
  next();
});

module.exports = UserModel;
