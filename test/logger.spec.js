var assert = require('assert');
var Logger = require('..');

describe('Logger', function () {
  it('provides a log function on host object', function () {
    var obj = {};
    Logger.call(obj, 'namespace');
    assert('function' === typeof obj.log,
      'Didn\'t provide obj.log()');
  });

  //describe('Logger.disable()', function () {
    //it('disables all logging', function () {

    //});
  //});
});

