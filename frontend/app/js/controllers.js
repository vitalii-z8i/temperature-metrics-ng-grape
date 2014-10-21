'use strict';

/* Controllers */

angular.module('sensorsAppSensors', ['ngRoute']).
  controller('SensorsCtrl', ['$scope', '$http', 'appConfig',
    function($scope, $http, $appConfig) {
      $http.get($appConfig['backendBaseUrl'] + '/sensors').
        success(function(data, status, headers, config) {
          $scope.sensors = data;
          $scope.update = function(index) {
            $http({
              url: $appConfig['backendBaseUrl'] + '/sensors/' + $scope.sensors[index].id,
              method: "PUT",
              params: {sensor: $scope.sensors[index]}
            }).
            success(function(data, status, headers, config) {

            });
          }
        }).
        error(function(data, status, headers, config) {
          console.log(data);
          $scope.sensors = []
        });
    }]).
  controller('SensorCtrl', ['$scope', '$routeParams', '$http', 'appConfig',
    function($scope, $routeParams, $http, $appConfig) {
      $http.get($appConfig['backendBaseUrl'] + '/sensors/' + $routeParams.sensorId).
        success(function(data, status, headers, config) {
          $scope.sensor = data;
        }).
        error(function(data, status, headers, config) {
          console.log(data);
          $scope.sensor = {}
        });
    }]).
  controller('SensorUpdateCtrl', ['$scope', '$routeParams', '$http', 'appConfig',
    function($scope, $routeParams, $http, $appConfig) {
      $http.put($appConfig['backendBaseUrl'] + '/sensors/' + $routeParams.sensorId).
        success(function(data, status, headers, config) {
          $scope.sensor = data;
        }).
        error(function(data, status, headers, config) {
          console.log(data);
          $scope.sensor = {}
        });
    }]);
// sensorControllers.controller('SensorCreateCtrl', ['$scope', '$routeParams', 'Sensor',
//   function($scope, $routeParams, Sensor) {
//     $scope.sensor = Sensor.create({sensorName: $routeParams.sensorName}, function(sensor) {

//     });
//   }]);
