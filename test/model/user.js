var UserModel = require('../../model/user.js'),
    chai = require('chai'),
    assert = chai.assert,
    bcrypt = require('bcrypt');

var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

describe('UserModel', function(){

/*
 *  before(function(done) {
 *    var user = new UserModel({
 *      username: 'howdoicomputer',
 *      email: 'howdoicomputer@fake.com',
 *      password: 'supersecret',
 *      admin: true
 *    }).save();
 *
 *    done();
 *  });
 *
 *  after(function() {
 *    UserModel.get('howdoicomputer').then( function(user) {
 *      user.delete();
 *    });
 *  });
 *
 */

  describe('it should save a user document', function(){
    it('should save a user doc', function(done) {
      var user = UserModel({
        username: 'howdoicomputer',
        email: 'howdoicomputer@fake.com',
        password: 'supersecret',
        admin: true
      });

      user.save().then( function(user) {
        assert.equal(user.username, 'howdoicomputer');
        done();
      }).error( function(err) {
        done(err);
      });
    });
  });

  describe('record retrieval', function(){
    it('should retrieve a user document', function(done){
      UserModel.get('howdoicomputer').then( function(user) {
        assert.equal(1, 2);
        // assert.equal(user.email, 'howdoicomputer@fake.com');
        done();
      }).catch(function(err) {
        done(err);
      });
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
});
