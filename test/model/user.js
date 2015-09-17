var UserModel = require('../../model/user.js'),
    chai = require('chai'),
    assert = chai.assert,
    config = require('config'),
    bcrypt = require('bcrypt');

describe('UserModel', function(){
  before(function() {
    return new UserModel({
      id: 'howdoicomputer',
      email: 'howdoicomputer@fake.com',
      password: 'supersecret',
      admin: true
    }).save();
  });

  after(function(done) {
    UserModel.get('howdoicomputer').then( function(user) {
      user.delete();
      done();
    }).catch(done);
  });

  describe('record retrieval', function(){
    it('should retrieve a user document', function(done){
      UserModel.get('howdoicomputer').then( function(user) {
        console.log(user);
        assert.equal(user.email, 'howdoicomputer@fake.com');
        done();
      }).catch(done);
    });
  });

  describe('password hashing', function(){
    it('should compare stored hash to submitted pswd hash', function(done){
      UserModel.get('howdoicomputer').then( function(user) {
        result = bcrypt.compareSync('supersecret', user.password);
        assert.isTrue(result);
      }).then(done, done);
    });
  });

  describe('record updating', function(){
    it('should update just fine', function(done){
      UserModel.get('howdoicomputer').then( function(user) {
        user.merge({email: 'updated@fake.com', admin: false}).save()
          .then( function(result) {
            console.log(result);
            done();
          });
      }).catch(done);
    });
  });
});


