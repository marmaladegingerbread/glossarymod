/*
* Translate module
* version 0.3a
* Rakhimov Danil©2019
*/
//connect dictionaries and value
let dictEn = glossaryEn;
let dictRu = glossaryRu;
let dictKz = glossaryKz;

//change input
let app = angular.module("glossaryApp", []);

app.controller("translateCtrl", function($scope)
{
    $scope.translate = function()
    {
      checkLang();
    }
});
