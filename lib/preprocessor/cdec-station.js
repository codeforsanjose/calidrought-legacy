/* exported CDEC */

var _ = require('lodash')
var config = require('config')
var request = require('request')
var cheerio = require('cheerio')

/**
 * This module contains functions for scraping and storing data on
 * California Data Exchange Center stations.
 *
 * @module CDEC
 */
var CDEC = module.exports = {
  /**
   * Fetch station metadata
   *
   * @param {String} id
   * @return {JSON} metadata
   */
  fetchStation: function (id, callback) {
    var cdec = config.get('CDEC')
    var url =
    cdec.endpoints.base +
      cdec.endpoints.station +
      id

    request(url, function (response, html) {
      var $ = cheerio.load(html)
      var table = $('#main_content table').first()
      var rows = table.find('tr')

      // Take each cell and add it as an element to an array
      // [ row1, row1, row2, row2 ]
      var array = []
      rows.has('td').each(function () {
        $(this).find('td').each(function (index, content) {
          array.push($(content).text())
        })
      })

      var stationAttributes = conAttributes(array)

      callback(stationAttributes)
    })
  },

  /**
   * Goes through a hydro search and collects station ids
   *
   * @param {String} hydroArea
   * @return {Array} ids
   */
  fetchHydroAreaIDList: function (hydroArea, callback) {
    hydroArea = validHydroArea(hydroArea)

    var url =
    config.get('CDEC').endpoints.base +
      config.get('CDEC').endpoints.hydroUrl +
      hydroArea

    fetchStationIDList(url, function (stationIDs) {
      callback(stationIDs)
    })
  }
}

/**
* Fetch a list of station IDs
*
* @param {String} url
* @return {Array} ids
*/
function fetchStationIDList (url, callback) {
  request(url, function (response, html) {
    var $ = cheerio.load(html)
    var table = $('#main_content table td')
    var regex = /^[A-Z]{3}$/
    var ids = []

    table.each(function () {
      var td = _.trim($(this).text())
      if (td.match(regex)) {
        ids.push(td)
      }
    })

    callback(ids)
  })
}

/**
 * Constructs an object using an array of HTML
 * elements
 *
 * @param {Array} elements
 * @return {Object} A JSON object representation
 */
function conAttributes (elements) {
  var stationAttributes = {}
  for (var i = 0; i < (elements.length / 2); i++) {
    var subArray = elements.splice(0, 2)
    var key = subArray[0]
    var value = subArray[1]
    stationAttributes[key] = value
  }

  return stationAttributes
}

/**
 * Validates a hydroArea argument
 *
 * @param {String} hydroArea
 * @return {String} hydroArea
 */
function validHydroArea (hydroArea) {
  var areas = config.get('hydroAreas')

  if (!_.includes(areas, hydroArea)) {
    var err = new Error('Incorrect hydroArea passed as argument.')
    throw err
  }
  return (hydroArea.replace(' ', '+'))
}
