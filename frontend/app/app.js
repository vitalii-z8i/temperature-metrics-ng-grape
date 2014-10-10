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
      templateUrl: 'views/sensors.html',
      controller:  'SensorsCtrl'
    }).
    when('/sensors/:sensorId', {
      templateUrl: 'views/sensors.html',
      controller:  'SensorUpdateCtrl'
    }).
    otherwise(function () {
      console.log("OLOLOLO");
    });
  }]);

$sensorsApp.constant('appConfig', {
  backendBaseUrl: 'http://localhost:9292/api'
});
