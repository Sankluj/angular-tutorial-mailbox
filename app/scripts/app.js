'use strict';

/**
 * @ngdoc overview
 * @name angularTutorialMailboxApp
 * @description
 * # angularTutorialMailboxApp
 *
 * Main module of the application.
 */
angular
  .module('angularTutorialMailboxApp', [
    'ui.bootstrap',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/mailbox.html',
        controller: 'MailboxCtrl'
      })
      .when('/bindings-example', {
        templateUrl: 'views/binding_example.html',
      })
      .otherwise({
        redirectTo: '/'
      });
  });
