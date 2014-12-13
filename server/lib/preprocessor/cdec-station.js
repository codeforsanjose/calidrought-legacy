// CDEC station collection
var mongoose = require('mongoose');

module.exports = {
  /**
   * Fetch station metadata
   *
   * @param {String} url
   * @return {JSON} metadata
   */
  fetchStation: function(url, callback) {
  },

  /**
   * Fetch a list of station IDs
   *
   * @param {String} url
   * @return {Array} ids
   */
  fetchStationIDList: function(url, callback) {
  },

  /**
   * Stores station metadata in MongoDB
   *
   * @param {JSON} json
   */
  storeStation: function() {
  }
};
