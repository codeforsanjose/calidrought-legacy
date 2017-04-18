var kue = require('kue')
var station = require('../lib/preprocessor/cdec-station.js')
var jobs = kue.createQueue()

var CDECJobs = module.exports = {
  /**
   * A kue job that wraps the scraping job
   *
   * @param {String} stationID
   */
  createCDECJob: function (stationID) {
    var job = jobs.create('cdec-station', {
      title: 'collect cdec station metadata for ' + stationID,
      stationID: stationID

    }).on('complete', function () {
      console.log('job complete')
    }).on('failed', function () {
      console.log('job failed')
    }).save(function (err) {
      if (!err) console.log(job.id)
    })
  },

  /**
   * A kue job to go through each hydrological area and load the
   * station ids to fetch
   *
   * @param {Array} hydroAreas
   */
  loadJobs: function (hydroAreas) {
    var job = jobs.create('cdec-station-load', {
      title: 'collect cdec stations within hydro areas',
      hydroAreas: hydroAreas

    }).on('complete', function () {
      console.log('job complete')
    }).on('failed', function () {
      console.log('job failed')
    }).save(function (err) {
      if (!err) console.log(job.id)
    })
  }
}
