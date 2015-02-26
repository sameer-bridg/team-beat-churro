'use strict';

describe('Service: dynamo', function () {

  // load the service's module
  beforeEach(module('teamChurroApp'));

  // instantiate service
  var dynamo;
  beforeEach(inject(function (_dynamo_) {
    dynamo = _dynamo_;
  }));

  it('should do something', function () {
    expect(!!dynamo).toBe(true);
  });

});
