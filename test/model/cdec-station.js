var assert = require('chai').assert,
    StationModel = require('../../model/cdec-station.js');

describe('StationModel', function(){
  describe('document creation', function(){
    it('should create a station document', function(done){
      var fixture = {
        stationID: 'MEA',
        elevation: 3700,
        riverBasin: 'COLORADO R',
        county: 'State of Arizona',
        hydrologicArea: 'COLORADO RIVER'
      };

      var station = new StationModel(
        fixture
      );

      assert.equal(station, fixture);
      done();
    });
  });
});
