var assert = require('chai').assert;
station = require('../../lib/preprocessor/cdec-station.js');

describe('station', function(){
  describe('#fetchStation()', function(){
    it('should return station metadata', function(done){
      var id = 'MEA';

      station.fetchStation(id, function(stationData){
        console.log(stationData);
        assert.isArray(stationData);
        done();
      });
    });
  });

  describe('#fetchStationIDList()', function(){
    it('should return an array of IDs', function(done){
      var url = 'http://cdec.water.ca.gov/misc/monthly_res.html';

      station.fetchStationIDList(url, function(ids) {
        assert.isArray(ids);
        done();
      });
    });
  });

  describe('#storeStation()', function(){
    it('should store a station in mongo', function(){
      //station.storeStation();
    });
  });
});

