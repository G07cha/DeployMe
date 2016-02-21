var argv = require('minimist')(process.argv.slice(1));
var fs = require('fs');
var join = require('path').join;

var server = require('./lib/server');
var handler = require('./lib/handler');

if(argv.help || argv.h) {
  console.log("Usage:\n deploy-me ./config.json \n\n\
Parameters: \n\
  -h --help - get usage and parameters info \n\
  -p --port [portnum] - specify port on which server will run");
} else {
  var path = join(__dirname, argv._[0]);
  fs.readFile(path, function(err, data) {
    if(err) throw err;
    var config = JSON.parse(data);
    server(argv.p || argv.port, handler(config));
  });
}
