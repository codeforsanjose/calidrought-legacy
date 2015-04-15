var assert = require('chai').assert;
var station = require('../../lib/preprocessor/cdec-station.js');

describe('station', function(){
  describe('#getStation()', function(){
    it('should return station metadata', function(done){
      var id = 'MEA';

      station.getStation(id, function(stationData){
        console.log(stationData);
        assert.isArray(stationData);
        done();
      });
    });
  });

  describe('#getStationIDList()', function(){
    it('should return an array of IDs', function(done){
      var url = 'http://cdec.water.ca.gov/misc/monthly_res.html';

      station.getStationIDList(url, function(ids) {
        assert.isArray(ids);
        done();
      });
    });
  });

  describe('#getIDListFromHydro()', function(){
    it('collects the IDs from a hydro search page', function(done){
      // not complete
      done();
    });
  });

  describe('#parseStation()', function(){
    it('should parse a station metadata table', function(done){
      // not complete
      done();
    });
  });

  describe('#storeStation()', function(){
    it('should store a station in mongo', function(done){
      //station.storeStation();
      done();
    });
  });
});

