// Need to parse a table listing station ids and pass those ids into a function that scrapes each individual station page

var cheerio = require('cheerio');
var request = require('request');
var mongoose = require('mongoose');
var slang = require('slang');


/*
mongoose.connect('mongodb://127.0.0.1/test');

var db = mongoose.connection;

db.once('open', function callback() {
  console.log('yay');
});

mongoose.disconnect();
*/

var url = 'http://cdec.water.ca.gov/misc/monthly_res.html';

function fetch_ids(url, callback) {
  request(url, function(error, response, html) {
    // Dollar sign indicates that we're using a jQuery object
    var $ = cheerio.load(html);
    var ids = [];

    // Collect table cells
    var table = $('#main_content table td');

    // A three letter string that only consists of capital letters
    // Represents station IDs
    var regex = /^[A-Z]{3}$/

    // Iterate over them
    table.each( function() {
      var td = slang.chop($(this).text());
      if (td.match(regex)) {
        ids.push(td);
      };
    });

    callback(ids);
  });
}

// A function that takes in an ID
function fetch_reservoir(id) {
  var url = 'http://cdec.water.ca.gov/cgi-progs/staMeta?station_id=' + id;

  request(url, function(error, response, html) {
    var $ = cheerio.load(html);

    // Tables on the CDEC do not have IDs - which is awesome.
    var table = $('#main_content table').first();
    var rows = table.find('tr');
    var data = [];

    // console.log(table);

    rows.has('td').each( function(row, v) {
      $(this).find('td').each(function(cell, v) {
        if (typeof data[cell] === 'undefined') {
          data[cell] = [];
        }

        data[cell][row] = $(this).text();
      });
    });

    array = [];
    rows.has('td').each( function(index, content) {
      $(this).find('td').each( function(index, content) {
        array.push($(content).text());
      });
    });

    // console.log(array);

    var objects = [];
    for (i = 0; i < (array.length / 2); i++) {
      var subArray = array.splice(0, 2);
      var key = subArray[0];
      var value = subArray[1];
      var kv = {};

      kv[key] = value;
      objects.push(kv);
    }

    console.log(objects);
  });
}

function storeID {

// Fetches reservoir data
/*
[ { 'Station ID': '5SI' },
  { Elevation: '0\' ft' },
  { 'River Basin': 'SAN JOAQUIN R' },
  { County: '' },
  { 'Hydrologic Area': 'SAN JOAQUIN RIVER' } ]
*/

fetch_reservoir('5SI');

// A function that takes the output from fetch_ids and stores that in
// mongodb.
function store_ids() {
  fetch_ids(url, function(ids){
    console.log(ids);
  });
};

//store_ids();
