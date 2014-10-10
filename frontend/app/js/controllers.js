'use strict';

/* Controllers */

angular.module('sensorsAppSensors', ['ngRoute']).
  controller('SensorsCtrl', ['$scope', '$http', 'appConfig',
    function($scope, $http, $appConfig) {
      $http.get($appConfig['backendBaseUrl'] + '/sensors').
        success(function(data, status, headers, config) {
          $scope.sensors = data;
        }).
        error(function(data, status, headers, config) {
          console.log('data');
          $scope.sensors = []
        });
      // console.log($scope.sensors);
    }]);

// sensorControllers.controller('SensorCreateCtrl', ['$scope', '$routeParams', 'Sensor',
//   function($scope, $routeParams, Sensor) {
//     $scope.sensor = Sensor.create({sensorName: $routeParams.sensorName}, function(sensor) {

//     });
//   }]);
// sensorControllers.controller('SensorUpdateCtrl', ['$scope', '$routeParams', 'Sensor',
//   function($scope, $routeParams, Sensor) {
//     scope.sensor = Sensor.query({id: $routeParams.sensorId}).update({sensorName: $routeParams.sensorName});
//   }]);
