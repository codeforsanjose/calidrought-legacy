var StationModel = require('../../../model/cdec-station.js'),
    cdec = require('../../../lib/preprocessor/cdec-station.js'),
    CDECJobs = require('../../../kue/cdec-station.js'),
    kue = require('kue'),
    express = require('express'),
    router = express.Router(),
    queue = kue.createQueue();

router.get('/list', function(req, res) {
  StationModel.orderBy({index: 'id'}).run().then( function(result) {
    res.send(JSON.stringify(result));
  }).error();
});

router.post('/start', function(req, res) {
  CDECJobs.createCDECJob('MEA');

  queue.process('cdec-station', function(job) {
    cdec.fetchStation(job.data.stationID, function(stationData) {
      var station = new StationModel(
        stationData
      );
      station.save();
    });
  });

  res.send('job started');
});

module.exports = router;
