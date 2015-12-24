var http = require('http');
var fs = require('fs');
var sys = require('sys')
var exec = require('child_process').exec;

// Handler for bash output
function puts(error, stdout, stderr) {
    if(error) throw error;
    if(stderr) console.log(stderr);
    console.log(stdout) 
}

var config = JSON.parse(fs.readFileSync(process.argv[3] || './config.json', 'utf8'));
const PORT = config.port || 8000;

function handleRequest(req, res) {
    var data = '';
    req.on('data', function(chunk) {
	data += chunk;
    });

    req.on('end', function() {
	data = JSON.parse(data);
	if(data.ref === 'refs/heads/' + config.triggerBranch) {
	   exec('/bin/sh ' + config.script, puts);
	}
    });

    res.end('Ohai! Path:', req.url);
}

var server = http.createServer(handleRequest);

server.listen(PORT, function() {
    console.log("Server listening :" + PORT);
});
