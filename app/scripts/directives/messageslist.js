'use strict';

/**
 * @ngdoc directive
 * @name angularTutorialMailboxApp.directive:messagesList
 * @description
 * # messagesList
 */
angular.module('angularTutorialMailboxApp')
  .directive('messagesList', function () {
    return {
      templateUrl: '/views/directive_templates/messages_list.html',
      restrict: 'E',
      scope: {
        mailBox: '=',
        selectMessageFunction: '='
      },
      link: function postLink(scope, element, attrs) {

      }
    };
  });
