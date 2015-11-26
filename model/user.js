var config = require('config'),
    thinky = require('thinky')(config.get('dbConfig')),
    bcrypt = require('bcrypt'),
    type = thinky.type;

var UserModel = thinky.createModel('User', {
  id:       type.string(),
  email:    type.string(),
  password: type.string(),
  admin:    type.boolean()
});

UserModel.pre('save', function(next){
  if (this.password.match(/^\$2a\$.{56}$/)) {
    next();
  } else {
    this.password = bcrypt.hashSync(this.password, 1);
    next();
  }
});

module.exports = UserModel;
