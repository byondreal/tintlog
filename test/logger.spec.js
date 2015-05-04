var assert = require('assert'),
    sinon = require('sinon');
var Logger = require('..');

describe('Logger', function () {
  var obj;

  beforeEach(function () {
    sinon.stub(console, 'log');
    obj = {};
    Logger.call(obj);
  });

  afterEach(function () {
    console.log.restore();
  });

  it('provides a log function on host object', function () {
    assert('function' === typeof obj.log);
  });

  it('logs to console', function () {
    assert(!console.log.called);
    obj.log('log message');
    assert(console.log.called);
  });

  describe('Logger.disable()', function () {
    it('disables all logging', function () {
      Logger.disable();
      obj.log('log message');
      assert(!console.log.called);
    });
  });

  describe('Logger.enable()', function () {
    it('enables all logging again', function () {
      Logger.disable();
      Logger.enable();
      obj.log('log message');
      assert(console.log.called);
    });
  });
});

