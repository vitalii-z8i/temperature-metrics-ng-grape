'use strict';

// Declare app level module which depends on views, and components
var $sensorsApp = angular.module('sensorsApp', [
  'ngRoute',
  'ngResource',
  'sensorsAppResources',
  'sensorsAppSensors',
  'sensorsApp.version'
]);

$sensorsApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/', {
      templateUrl: 'views/sensors/list.html',
      controller:  'SensorsCtrl',
    }).
    when('/sensors', {
      templateUrl: 'views/sensors/list.html',
      controller:  'SensorsCtrl',
    }).
    when('/sensors/new', {
      templateUrl: 'views/sensors/new.html',
      controller:  'CreateSensorCtrl',
    }).
    when('/sensors/:sensorId', {
      templateUrl: 'views/sensors/sensor.html',
      controller:  'SensorCtrl',
    }).
    otherwise({
      templateUrl: 'views/error_template.html'
    });
  }]);

$sensorsApp.constant('appConfig', {
  backendBaseUrl: 'http://localhost:9292/api'
});
