var app = angular.module('glossaryApp', []);
app.controller('translateCtrl', function ($scope) {
    $scope.translate = function () {
      alert("hello");
    }
});
