// CDEC station collector kue job
/*
 * The idea is to collect each individual station and create a
 * job for traversing to that station and scraping its data.
 *
 * There is a station search page that has an hydrological area query filter
 * and those filters seem to have the broadest scope.
 *
 * This is how I'm going to get the total number of cdec stations.
 *
 * I think it might be prudent to have each traversal
 * to a hydrological area page be a job that enqueues other
 * jobs based on the contents of that page. That way we can chunkify
 * the collection jobs.
 *
 */

var kue = require('kue'),
    station = require('../lib/preprocessor/cdec-station.js'),
    jobs = kue.createQueue();

/**
 * A master job to kick off several child jobs
 *
 *
 */
jobs.process('cdecStationsFromHydro', 1, function() {
  var hydrologicalAreas = config.get('hydrologicalAreas');

  for (var i in hydrologicalAreas); i++) {
    station.createQueueStationsFromHydroJob(hydrologicalArea[i]);
  }
});
