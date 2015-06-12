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
    'ui.bootstrap'
  ])
  .controller('MailboxCtrl', function ($scope, $http, $log) {
    // List Of Messages
    $scope.messages = [];

    // Retrieve all the messages from messages.json
    $scope.getMessages = function() {
      // Use the angular $http service to get the messages
      $http.get('assets/messages.json')
      .success(function(messagesData) {
        $log.info(messagesData.length + ' Messages Retrieved')
        $scope.messages = messagesData;
      })
      .error(function(errorData) {
        $log.error('Get Messages Error.')
      });
    };

    $scope.markMessageAsRead = function(message) {
      message.markedAsRead = true;
    };

    // Call the Get messages function on controller initialisation
    $scope.getMessages();

  });
