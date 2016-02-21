var http = require('http');

module.exports = function(port, cb) {
  var selectedPort = port || 3000;
  var server = http.createServer(cb);

  server.listen(selectedPort, function() {
      console.log("Server listening :" + selectedPort);
  });

  return server;
};
