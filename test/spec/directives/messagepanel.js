'use strict';

describe('Directive: messagePanel', function () {

  // load the directive's module
  beforeEach(module('angularTutorialMailboxApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<message-panel></message-panel>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the messagePanel directive');
  }));
});
