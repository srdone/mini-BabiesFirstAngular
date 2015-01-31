var app = angular.module('friendsList');

app.controller('mainCtrl', function($scope) {
  $scope.friends = ['Tiffany', 'Jed'];
  $scope.addFriend = function () {
    $scope.friends.push($scope.newFriend);
    $scope.newFriend = null;
  };
});
