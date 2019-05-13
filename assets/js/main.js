var app = angular.module("myApp", []);

app.controller('myCtrl', function($scope, $window){
  $scope.alert = function(){
      $window.alert('ATTENTION !!! DERRIÈRE TOI ! :O');
      $window.alert('Ah non, c\'est une fourmi.');
  }
});
