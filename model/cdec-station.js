/* exported Station */

var config = require('config'),
    thinky = require('thinky')(config.dbConfig),
    type = thinky.type;

var StationModel = thinky.createModel('Station', {
  id:             type.string(),
  url:            type.string(), 
  stationID:      type.string(),
  elevation:      type.number(),
  riverBasin:     type.string(),
  county:         type.string(),
  hydrologicArea: type.string(),
  nearbyCity:     type.string(),
  point:          type.point(),
  operator:       type.point()
});

module.exports = StationModel;
