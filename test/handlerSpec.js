var assert = require('assert');
var handler = require('../lib/handler');

describe('Handler', function() {
  it('should return function', function() {
    assert.equal(typeof handler({script: 'foo', triggerBranch: 'bar'}), 'function');
  });

  it('should throw an error if no script provided', function() {
    assert.throws(function() {
      handler();
    });
  });
});
