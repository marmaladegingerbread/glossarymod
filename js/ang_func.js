//Only for AngularJS functions
let app = angular.module("translate-app", []);

app.controller("translate-ctrl", function($scope)
{
    $scope.ch_traslate = function(){
        dynamicTranslate();            
    }
});