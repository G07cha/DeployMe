var fs = require('fs');
var sys = require('sys');
var exec = require('child_process').exec;

// Handler for bash output
function puts(error, stdout, stderr) {
  if(error) throw error;
  if(stderr) console.error(stderr);
  console.log(stdout);
}

module.exports = function(config) {
  if(typeof config.script !== 'string') {
    throw new Error('Script path should be string');
  }
  return function(req, res) {
    var data = '';
    req.on('data', function(chunk) {
      data += chunk;
    });

    req.on('end', function() {
      try {
        data = JSON.parse(data);
        if(config.triggerBranch) {
          if(data.ref === 'refs/heads/' + config.triggerBranch) {
            exec('/bin/sh ' + config.script, puts);
          }
        } else {
          exec('/bin/sh ' + config.script, puts);
        }
      } catch (err) {
        console.error(err);
      }
    });

    res.end('Ohai, Path:', req.url);
  };
};
