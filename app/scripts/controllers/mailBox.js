'use strict';

/**
 * @ngdoc function
 * @name angularTutorialMailboxApp.controller:MailboxCtrl
 * @description
 * # MailboxCtrl
 * Controller of the angularTutorialMailboxApp
 */
angular.module('angularTutorialMailboxApp')
  .controller('MailboxCtrl', function ($scope, $http, $log) {
    // List Of Messages
    $scope.messages = [];
    // Selected Message
    $scope.selectedMessage = null;

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

    $scope.selectMessage = function(message) {
      $scope.selectedMessage = message;
      message.markedAsRead = true;
    };

    // Call the Get messages function on controller initialisation
    $scope.getMessages();
  });
