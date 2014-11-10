angular.module('sensorsAppResources', ['ngResource']).
  factory('Sensor', function($resource){
    return $resource('/api/sensors/:id', {id: '@id'}, {
      update: {
        method: 'PUT'
      }
    });
  });