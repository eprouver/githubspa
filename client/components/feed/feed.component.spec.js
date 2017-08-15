'use strict';

describe('Component: feed', function() {
  // load the component's module
  beforeEach(module('feed'));

  var feedComponent;

  // Initialize the component and a mock scope
  beforeEach(inject(function($componentController) {
    feedComponent = $componentController('feed', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
