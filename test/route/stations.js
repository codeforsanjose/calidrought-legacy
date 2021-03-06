var _ = require('lodash'),
  assert = require('chai').assert,
  request = require('supertest'),
  app = require('../../app.js');

describe('Station integration', function() {
  describe('POST /api/station/new', function() {
    it('should create a new station', function(done) {
      done();
    });
  });

  describe('GET /api/stations', function() {
    it('should return a list of stations', function(done) {
      done();
    });
  });

  describe('GET /api/station/:id', function() {
    it('should get a station by its id', function(done) {
      done();
    });
  });
});
