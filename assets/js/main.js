var app = angular.module("myApp", []);

app.controller('myCtrl', function($scope){
  $scope.alert = function(){
      alert('ATTENTION !!! DERRIÈRE TOI ! :O');
      alert('Ah non, c\'est une fourmi.');
  }
});
