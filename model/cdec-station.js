/* exported Station */

var config = require('config'),
    thinky = require('thinky')(config.dbConfig),
    type = thinky.type;

var StationModel = thinky.createModel('Station', {
  stationID:      type.string(),
  url:            type.string(),
  elevation:      type.number(),
  riverBasin:     type.string(),
  county:         type.string(),
  hydrologicArea: type.string(),
  nearbyCity:     type.string(),
  point:          type.point(),
  operator:       type.string()
});

StationModel.pre('save', function(next) {
    if (this.age < 18) {
      next(new Error("A user must be at least 18 years old."));
    }
    else {
      next();
    }
});

module.exports = StationModel;
