'use strict';

/* Controllers */

angular.module('sensorsAppSensors', ['ngRoute']).
  controller('HomeCtrl', ['$location',
    function($location) {
      $location.url('/sensors');
    }]).
  controller('SensorsCtrl', ['$scope', 'appConfig', '$interval', 'Sensor',
    function($scope, $appConfig, $interval, Sensor) {
      var intervals = [];
      $scope.sensors = Sensor.query();
      $scope.working = false;

      $scope.update = function(sensor, index) {
        Sensor.update({id: sensor.id, sensor: {featured: sensor.featured}}, function() {
          $scope.sensors[index] = sensor;

          $scope.clearIntevals();
          $scope.startGettingData();
        });
      }
      $scope.delete = function(sensorId, index) {
        Sensor.delete({id: sensorId});
        $scope.sensors.splice(index, 1);
      }

      $scope.clearIntevals = function() {
        angular.forEach(intervals, function(interval, index){
          $interval.cancel(interval)
        })
      }

      $scope.startGettingData = function() {
        if ($scope.working) {
          var index = 0;
          angular.forEach($scope.sensors, function(sensor, index) {
            if (sensor.featured) {
              var refreshTime = 3000;
            }
            else {
              var refreshTime = 14000;
            }
            intervals.push($interval(function(){
              $scope.sensors[index].temp = Math.floor(Math.random() * 60) -40 // Sensor.get({id: sensor.id});
            }, refreshTime));
          })
        }
        else {
          $scope.clearIntevals();
        }
      }
    }]).
  controller('SensorCtrl', ['$scope', '$routeParams', 'appConfig', 'Sensor',
    function($scope, $routeParams, $appConfig, Sensor) {
      $scope.sensor = Sensor.get({id: $routeParams.sensorId});
    }]).
  controller('CreateSensorCtrl', ['$scope', '$routeParams', '$location', 'appConfig', 'Sensor',
    function($scope, $routeParams, $location, $appConfig, Sensor) {
      $scope.sensor = new Sensor();
      $scope.save = function(sensor){
        Sensor.save({sensor: {name: sensor.name, featured: sensor.featured}}, function() {
          $location.url('/sensors');
        });
      }
    }]);

