'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {

  describe('sensor ops', function() {
    var newSensorName = 'New Test Sensor';
    it('creates new sensor successfully', function() {
      browser.get('#/sensors');
      var sensorsCount = element.all(by.repeater('sensor in sensors'));

      sensorsCount.count().then(function(originalCount) {
        startCount = originalCount;
      });
      var startCount = sensorsCount.count();

      browser.get('#/sensors/new');

      element(by.model('sensor.name')).sendKeys(newSensorName);
      element(by.model('sensor.featured')).click();
      element(by.css('[ng-click]')).click();
      setTimeout(function() {
        expect(element(by.xpath('//a[text()="'+newSensorName+'"]')).isPresent()).toBe(true);
      }, 1000);
    });

    it('updates data each few seconds if the feature is enabled', function() {
      var temps = [];
      browser.get('#/sensors');
      var temps = element.all(by.xpath('//td/span')).map(function(temp) { return temp.getText(); });

      element(by.xpath('//span[@class="pull-right"]/input')).click();
      browser.sleep(5000);
      expect(element.all(by.xpath('//td/span')).map(function(temp) { return temp.getText(); })).not.toEqual(temps);
    });

    it('deletes selected sensor successfully', function() {
      var sensorsCount = element.all(by.repeater('sensor in sensors'));
      sensorsCount.count().then(function(originalCount) {
        startCount = originalCount;
      });
      var startCount = sensorsCount.count();
      element.all(by.xpath('//a[text()="'+newSensorName+'"]/ancestor::tr//button')).click();

      expect(element(by.xpath('//a[text()="'+newSensorName+'"]')).isPresent()).toBe(false);
    });
  });
});
