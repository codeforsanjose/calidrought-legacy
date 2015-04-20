var thinky = require('thinky');

/**
 * TODO: create a belongsTo relationship with a reservoir model
 * TODO: create the reservoir stuff :p
 *
 */


var Station = thinky.createModel('Station', {
  id: String,
  stationID: String,
  elevation: Number,
  riverBasin: String,
  county: String,
  hydrologicalArea: String
});

exports.get = function (req, res) {
  res.send(station);
}
