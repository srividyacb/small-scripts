var turf = require('turf');
var lineDistance = require('turf-line-distance');
var fs = require('fs');
var geojsonStream = require('geojson-stream');
var concat = require('concat-stream');
var argv = require('minimist')(process.argv.slice(2));

var file = process.argv[2];
var number = process.argv[3];

var content = geojsonStream.parse();
fs.createReadStream(file)
    .pipe(content)
    .pipe(concat(function(data) {
        var allTR = data;
        var maxFiles = allTR.length/number;
        for (var i = 0; i <= maxFiles; i++) {
          var splicedFeatures = allTR.splice(0, number);
          var fc = turf.featureCollection(splicedFeatures);
          fs.writeFile(number + '-' + i + '.geojson', JSON.stringify(fc), function (err) {
            if (err) throw err;
            console.log('file created and saved!');
          });
}}));
