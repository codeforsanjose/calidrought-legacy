/* exported Station */

var _ = require('lodash'),
    /*
     *async = require('async'),
     */
    kue = require('kue'),
    config = require('config'),
    request = require('request'),
    cheerio = require('cheerio'),
    jobs = kue.createQueue(),
    thinky = require('thinky');

/**
 * This module contains functions for scraping and storing data on
 * California Data Exchange Center stations.
 *
 * @module Station
 */
Station = module.exports = {
  /**
   * Fetch station metadata
   *
   * @param {String} id
   * @return {JSON} metadata
   */
  fetchStation: function(id, callback) {
    var cdec = config.get('CDEC');
    var url = cdec.endpoints.base + cdec.endpoints.station + id;

    request(url, function(error, response, html) {
      var $ = cheerio.load(html);
      var table = $('#main_content table').first();
      var rows = table.find('tr');

      // Take each cell and add it as an element to an array
      // [ row1, row1, row2, row2 ]
      var array = [];

      rows.has('td').each( function() {
        $(this).find('td').each( function(index, content) {
          array.push($(content).text());
        });
      });

      // Slice by two elements
      // Create a 2D array containing each key-value object
      var objects = [];

      for (var i = 0; i < (array.length / 2); i++) {
        var subArray = array.splice(0, 2);
        var key = subArray[0];
        var value = subArray[1];
        var kv = {};

        kv[key] = value;
        objects.push(kv);
      }

      callback(objects);
    });
  },

  traverseHydroArea: function() {
  },

  /**
   * Fetch a list of station IDs
   *
   * @param {String} url
   * @return {Array} ids
   */
  fetchStationIDList: function(url, callback) {
    request(url, function(error, response, html) {
      var $ = cheerio.load(html);
      var table = $('#main_content table td');
      var ids = [];

      var regex = /^[A-Z]{3}$/;

      table.each( function() {
        var td = _.trim($(this).text());
        if (td.match(regex)) {
          ids.push(td);
        }
      });

      callback(ids);
    });
  },

  /**
   * Traverses hydro search page and collects all the station IDs from that page
   *
   * @param {String} Hydrological area
   * @return {Array} ids
   */
  fetchIDListFromHydro: function() {
  },

  /**
   * Stores station metadata in RethinkDB
   *
   * @param {JSON} json
   */
  storeStation: function() {
  },

  /**
    * Will traverse the staSearch page using hydrological area as a broad filter
    * creating jobs from each station found with that area
    *
    * @return {Job} job
    */
  createQueueStationsFromHydroJob: function() {
    var job = jobs.create('cdecStationsFromHydro', {
      title: 'CDEC Hydro Area Collect'
    });

    job.save();
  },

  /**
   * A job wrapper for a station collection
   *
   * @param {String} id
   * @return {Job} job
   */
  createStationJob: function() {
    var job = jobs.create('cdecStation', {
      title: 'CDEC Station Collection'
    });

    job.save();
  }
};
