var StationModel = require('../../../model/cdec-station.js')
var cdec = require('../../../lib/preprocessor/cdec-station.js')
var CDECJobs = require('../../../kue/cdec-station.js')
var kue = require('kue')
var express = require('express')
var router = express.Router()
var queue = kue.createQueue()

router.get('/', function (req, res) {
  StationModel.orderBy({index: 'stationID'}).run().then(function (result) {
    res.json(result)
  }).error(function (error) {
    res.status(500).send({error: error.message})
  })
})

router.get('/:id', function (req, res) {
  StationModel.get(req.params.id).then(function (station) {
    res.json(station)
  }).error(function (error) {
    res.status(500).send({error: error.message})
  })
})

router.put('/:id', function (req, res) {
  var station = StationModel.get(req.params.id)

  station.update(req.body).run().then(function (station) {
    res.json(station)
  }).error(function (error) {
    res.status(500).send({error: error.message})
  })
})

router.post('/new', function (req, res) {
  var stationData = req.body
  var station = new StationModel(
    stationData
  )

  try {
    station.validate()
  } catch (error) {
    res.status(500).send({error: error.message})
  }

  station.save()
  res.json(station)
})

router.post('/start', function (req, res) {
  CDECJobs.createCDECJob('MEA')

  queue.process('cdec-station', function (job) {
    cdec.fetchStation(job.data.stationID, function (stationData) {
      var station = new StationModel(
        stationData
      )
      station.save()
    })
  })

  res.send('job started')
})

module.exports = router
