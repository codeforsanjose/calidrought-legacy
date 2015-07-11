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
 * This piece is the start of that with an individual job
 *
 */

var kue = require('kue'),
    station = require('../lib/preprocessor/cdec-station.js'),
    jobs = kue.createQueue();

var CDECJobs = module.exports = {
  createCDECJob: function(stationID) {
    var job = jobs.create('cdec-station', {
          title: 'collect cdec station metadata',
          stationID: stationID

      } ).on( 'complete', function() {
        console.log( 'job complete' );

      } ).on( 'failed', function() {
        console.log( 'job failed' );

      } ).save( function(err){
          if( !err ) console.log( job.id );
      } );
  }
};
