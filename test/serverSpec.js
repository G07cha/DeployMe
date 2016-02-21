var assert = require('assert');
var request = require('supertest');

var server = require('../lib/server');

describe('Server tests', function() {
  it('server should start on default port', function(done) {
    var app = server(undefined, function() {
      done();
    });

    request('http://localhost:3000')
      .get('/')
      .expect(200)
      .end();
  });

  it('server should start on specified port', function(done) {
    var app = server(1337, function() {
      done();
    });

    request('http://localhost:1337')
      .get('/')
      .expect(200)
      .end();
  });
});
