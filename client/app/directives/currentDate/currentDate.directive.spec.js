'use strict';

describe('Directive: currentDate', function() {
  // load the directive's module and view
  beforeEach(module('currentDate'));
  beforeEach(module('app/directives/currentDate/currentDate.html'));

  var element, scope;

  beforeEach(inject(function($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function($compile) {
    element = angular.element('<current-date></current-date>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the currentDate directive');
  }));
});
