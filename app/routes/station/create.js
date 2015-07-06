var Station = require('../../../model/cdec-station.js');

module.exports = function (router) {
/*
 *  router.get('/stations/:id', function(req, res) {
 *    var station = new Station(req.body);
 *
 *    station.save().then( function(result) {
 *      res.send(JSON.stringify(result));
 *    }).error();
 *  });
 *
 */
  router.get('/', function(req, res) {
    Station.orderBy({index: 'id'}).run().then( function(result) {
      res.send(JSON.stringify(result));
    }).error();
  });
};
