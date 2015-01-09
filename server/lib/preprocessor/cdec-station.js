var request = require('request'),
    cheerio = require('cheerio'),
    slang = require('slang'),
    stampit = require('stampit'),
    mongoose = require('mongoose');

/**
 * This module contains functions for scraping and storing data on
 * California Data Exchange Center stations.
 *
 * @module Station
 */
module.exports = {
  /**
   * Fetch station metadata
   *
   * @param {String} id
   * @return {JSON} metadata
   */
  fetchStation: function(id, callback) {
    var url = 'http://cdec.water.ca.gov/cgi-progs/staMeta?station_id=' + id;

    request(url, function(error, response, html) {
      var $ = cheerio.load(html);
      var table = $('#main_content table').first();
      var rows = table.find('tr');

      // Take each cell and add it as an element to an array
      // [ row1, row1, row2, row2 ]
      array = [];
      rows.has('td').each( function(index, content) {
        $(this).find('td').each( function(index, content) {
          array.push($(content).text());
        });
      });

      // Slice by two elements
      // Create a 2D array containing each key-value object
      var objects = [];
      for (i = 0; i < (array.length / 2); i++) {
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

  /**
   * Fetch a list of station IDs
   *
   * @param {String} url
   * @return {Array} ids
   */
  fetchStationIDList: function(url, callback) {
    request(url, function(error, response, html) {
      $ = cheerio.load(html);
      var table = $('#main_content table td');
      var ids = [];

      var regex = /^[A-Z]{3}$/;

      table.each( function() {
        var td = slang.chop($(this).text());
        if (td.match(regex)) {
          ids.push(td);
        }
      });

      callback(ids);
    });
  },

  /**
   * Stores station metadata in MongoDB
   *
   * @param {JSON} json
   */
  storeStation: function() {
  }
};
