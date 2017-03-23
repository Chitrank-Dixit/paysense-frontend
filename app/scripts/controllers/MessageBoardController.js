'use strict';


app
  .controller('MessageBoardCtrl', function ($scope, $http, MessageBoard) {

    $scope.main = {
      title: 'Message Board app',
      base_url: "http://127.0.0.1:8000/api/v1/",
    };

    MessageBoard.get_messages($scope.main.base_url+'chat-messages/').then(function(response){
      $scope.messages = response['data']['data'];
    }).catch(function(error_response){

    });

    $scope.reload_messages = function () {
      MessageBoard.get_messages($scope.main.base_url+'chat-messages/').then(function(response){
        $scope.messages = response['data']['data'];
      }).catch(function(error_response){

      });
    }

    MessageBoard.get_user_ip($scope.main.base_url+'get-user-ip/').then(function(response){
      $scope.user_ip = response['data']['data']['ip_address'];
    }).catch(function(error_response){
      $scope.user_ip = "127.0.0.1";
    });
    //MessageBoard.
    $scope.post_message = function() {
      MessageBoard.create_message($scope.main.base_url+'chat-messages/', { "text": $scope.text, "source_ip": $scope.user_ip}).then(function(response){
        $scope.reload_messages();
      }).catch(function(error_response){

      });
    };

    $scope.delete_message = function(id) {
      var action = confirm("Are you sure");
      if (action==true) {
        var token = prompt("Please enter the secret key to delete messages", "");
        MessageBoard.delete_all_messages($scope.main.base_url+'chat-messages/'+id.toString()+'/', {"secret_token": token}).then(function(response){
          $scope.reload_messages();
        }).catch(function(error_response){

        });
      }

    };

    $scope.delete_all_messages = function() {
      var token = prompt("Please enter the secret key to delete messages", "");
      MessageBoard.delete_all_messages($scope.main.base_url+'delete-all-messages/', {"secret_token": token}).then(function(response){
        $scope.reload_messages();
      }).catch(function(error_response){

      });
    };








  });
