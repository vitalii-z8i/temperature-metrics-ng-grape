'use strict';

angular.module('sensorsApp.version', [
  'sensorsApp.version.interpolate-filter',
  'sensorsApp.version.version-directive'
])

.value('version', '0.1');
