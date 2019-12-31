/*
* Translate module
* version 0.3a
* Rakhimov Danil©2019
*/
let indata_head = "";
let indata_text = "";
//functions
function filler(indata_head, indata_text) {
  $("#result_header").val(indata_head);
  $("#result_text").val(indata_text);
}
function valueEqualRu(){
  let inWord = $('#inWords').val();
  for (let i = 0; i < dictRu.length; i++) {
    if (inWord == dictRu[i]){
      filler(dictRu[i], glossaryRu[i]);
      break;
    }
  }
  console.log('translated from ru');
}
function valueEqualKz(){
  let inWord = $('#inWords').val();
  for (let i = 0; i < dictKz.length; i++) {
    if (inWord == dictKz[i]){
      $('#ruWord').val(dictRu[i]);
      $('#enWord').val(dictEn[i]);
      break;
    }
  }
  console.log('translated from kz');
}
function valueEqualEn(){
  let inWord = $('#inWords').val();
  for (let i = 0; i < dictEn.length; i++) {
    if (inWord == dictEn[i]){
      $('#kzWord').val(dictKz[i]);
      $('#ruWord').val(dictRu[i]);
      break;
    }
  }
  console.log('translated from en');
}

//change input and check lang
let app = angular.module("glossaryApp", []);

app.controller("translateCtrl", function($scope)
{
    $scope.translate = function()
    {
      let inWord = $('#inWords').val();
      if(dictEn.indexOf(inWord) != -1){
        valueEqualEn();
      }
      else if (dictRu.indexOf(inWord) != -1) {
        valueEqualRu();
      }
      else if (dictKz.indexOf(inWord) != -1) {
        valueEqualKz();
      }
      else {
        $("#result_header").val("");
        $("#result_text").val("");
        console.log('error:not word');
      }
    }
});
