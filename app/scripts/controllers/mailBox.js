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
    // First Mailbox Data
    $scope.mailBoxOne = {
      messages: [],
      selectedMessage: null
    };
    // Second Mailbox Data
    $scope.mailBoxTwo = {
      messages: [],
      selectedMessage: null
    };

    // Retrieve all the messages from filename.json
    $scope.getMessages = function(mailBox, fileName) {
      // Use the angular $http service to get the messages
      $http.get('assets/' + fileName + '.json')
      .success(function(messagesData) {
        $log.info(messagesData.length + ' Messages Retrieved');
        mailBox.messages = messagesData;
      })
      .error(function(errorData) {
        $log.error('Get Messages Error.');
      });
    };

    $scope.selectMessage = function(mailBox, message) {
      mailBox.selectedMessage = message;
      message.markedAsRead = true;
    };

    // Call the Get messages function on controller initialisation
    $scope.getMessages($scope.mailBoxOne, 'messages');
    $scope.getMessages($scope.mailBoxTwo, 'messages2');
  });
