'use strict';

describe('sensorsApp.version module', function() {
  beforeEach(module('sensorsApp.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
