'use strict';

// Declare app level module which depends on views, and components
var $sensorsApp = angular.module('sensorsApp', [
  'ngRoute',
  'sensorsAppSensors',
  'sensorsApp.version'
]);

$sensorsApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/sensors', {
      templateUrl: 'views/sensors/list.html',
      controller:  'SensorsCtrl',
      animation: 'slide'
    }).
    when('/sensors/:sensorId', {
      templateUrl: 'views/sensors/sensor.html',
      controller:  'SensorCtrl',
      animation: 'slide'
    }).
    when('/sensors/:sensorId/update', {
      templateUrl: 'views/sensors/sensor.html',
      controller:  'SensorCtrl',
      animation: 'slide'
    }).
    otherwise(function () {
      ''
    });
  }]);

$sensorsApp.constant('appConfig', {
  backendBaseUrl: 'http://localhost:9292/api'
});
