'use strict';

describe('SensorsCtrl', function(){
  var $q,
      $rootScope,
      $scope,
      $httpBackend,
      queryDeferred,
      SensorsMock,
      sensorsQueryResponse = [{"id":3,"name":"Seattle","featured":true,"temp":69},
                              {"id":7,"name":"Minnesota","featured":true,"temp":60},
                              {"id":12,"name":"New York","featured":true,"temp":25}];

  beforeEach(module('sensorsApp'));

  it('should display sensors list', inject(function($controller, $rootScope) {
    var scope = $rootScope.$new(),
        SensorsMock = function() {
          this.query = function() {
            return sensorsQueryResponse
          }
        },
        ctrl = $controller('SensorsCtrl', {$scope:scope, Sensor: new SensorsMock()});

    expect(scope.sensors).toBe(sensorsQueryResponse);
  }));

});

describe('SensorCtrl', function(){
  var $q,
      $rootScope,
      $scope,
      $httpBackend,
      queryDeferred,
      SensorsMock,
      sensorsQueryResponse = [{"id":3,"name":"Seattle","featured":true,"temp":69},
                              {"id":7,"name":"Minnesota","featured":true,"temp":60},
                              {"id":12,"name":"New York","featured":true,"temp":25}];

  beforeEach(module('sensorsApp'));

  it('should show selected sensor', inject(function($controller, $rootScope) {
    var scope = $rootScope.$new(),
        SensorsMock = function() {
          this.get = function(id) {
            return sensorsQueryResponse[0]
          }
        },
        routeParams = {sensorId: 7},
        ctrl = $controller('SensorCtrl', {$scope:scope, Sensor: new SensorsMock(), $routeParams:routeParams});

    expect(scope.sensor).toBe(sensorsQueryResponse[0]);
  }));

});
