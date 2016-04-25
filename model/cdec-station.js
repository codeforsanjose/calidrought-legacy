/* exported Station */

var config = require('config')
var thinky = require('thinky')(config.dbConfig)
var type = thinky.type

var StationModel = thinky.createModel('Station', {
  stationID: type.string(),
  url: type.string(),
  elevation: type.number(),
  riverBasin: type.string(),
  county: type.string(),
  hydrologicArea: type.string(),
  nearbyCity: type.string(),
  point: type.point(),
  operator: type.string()
}, {
  pk: 'stationID'
})

module.exports = StationModel
