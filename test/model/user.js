var UserModel = require('../../model/user.js'),
    assert = require('chai').assert,
    bcrypt = require('bcrypt');

describe('UserModel', function(){
  before(function() {
    var user = new UserModel({
      username: 'howdoicomputer',
      email: 'howdoicomputer@fake.com',
      password: 'supersecret',
      admin: true
    })

    user.save();
  });

/*
 *  after(function() {
 *    UserModel.get('howdoicomputer').then( function(user) {
 *      user.delete();
 *    });
 *  });
 *
 */
  describe('record retrieval', function(){
    it('should retrieve a user document', function(done){
      return UserModel.get('howdoicomputer').then( function(user) {
        assert.equal(1, 2);
        // assert.equal(user.email, 'howdoicomputer@fake.com');
        done();
      }).catch(function (err) {
        done(err);
      });
    });
  });

  describe('test test', function(){
    it('should blow up' , function(done){
      assert.equal(1, 2);
      done();
    })
  })

  describe('password hashing', function(){
    it('should compare stored hash to submitted pswd hash', function(done){
      UserModel.get('howdoicomputer').then( function(user) {
        result = bcrypt.compareSync('supersecret', user.password);
        assert.isTrue(result);
      }).then(done);
    });
  });
});
