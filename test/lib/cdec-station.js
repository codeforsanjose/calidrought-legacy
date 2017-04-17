var _ = require('lodash');
var assert = require('chai').assert;
var cdec = require('../../lib/preprocessor/cdec-station.js');

describe('CDEC', function(){
  describe('#fetchStation()', function(){
    it('should return station metadata', function(done){
      var id = 'MEA';

      cdec.fetchStation(id, function(stationData){
          var fixture = {
            'Station ID':      'MEA',
            'Elevation':       '3700\' ft',
            'River Basin':     'COLORADO R',
            'County':          'State of Arizona',
            'Hydrologic Area': 'COLORADO RIVER'
          };

        assert.isObject(stationData);
        assert.deepEqual(stationData, fixture);

        done();
      });
    });
  });

  describe('#fetchHydroAreaIDList()', function(){
    it('should return IDs from a hydro search', function(done){
      var hydroArea = 'CENTRAL COAST';

      cdec.fetchHydroAreaIDList(hydroArea, function(stationIDs){
        _.each(stationIDs, function(id){
          assert.match(id, /^[A-Z]{3}$/);
        });

        done();
      });
    });
  });
});
