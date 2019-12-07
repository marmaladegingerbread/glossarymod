/*
* Translate module
* version 0.3a
* Rakhimov Danil©2019
*/
//connect dictionaries and value
let dictEn = glossaryEn,
  dictRu = glossaryRu,
  dictKz = glossaryKz,
  inValue = document.getElementById('inWords'),
  outValueRu = document.getElementById('ruWord'),
  outValueKz = document.getElementById('kzWord'),
  outValueEn = document.getElementById('enWord');
//functions
function valueEqualRu(){

}
function valueEqualKz(){

}
function valueEqualEn(){

}
function checkLang(){
  if(dictRu == dictRu) {
    alert("hello");
}
}
//change input
let app = angular.module("glossaryApp", []);

app.controller("translateCtrl", function($scope)
{
    $scope.translate = function()
    {
      checkLang();
    }
});
