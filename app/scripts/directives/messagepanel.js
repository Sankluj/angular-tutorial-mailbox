'use strict';

/**
 * @ngdoc directive
 * @name angularTutorialMailboxApp.directive:messagePanel
 * @description
 * # messagePanel
 */
angular.module('angularTutorialMailboxApp')
  .directive('messagePanel', function () {
    return {
      templateUrl: '/views/directive_templates/message_panel.html',
      restrict: 'E',
      scope: {
        displayedMessage: '='
      },
      link: function postLink(scope, element, attrs) {

      }
    };
  });
