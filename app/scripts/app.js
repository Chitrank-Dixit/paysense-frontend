'use strict';

var app = angular
  .module('MessageBoardApp', ['ui.router'])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/message_board');

      $stateProvider
      .state('message', {
        url: '/message_board',
        controller: 'MessageBoardCtrl',
        templateUrl: 'templates/message_board.html'
      });
    }]);
