/*
* Translate module
* version 0.3a
* Rakhimov Danil©2019
*/
//connect dictionaries
let dictEn = glossaryEn,
  dictRu = glossaryRu,
  dictKz = glossaryKz;
let id = '';
//functions
function spawn(id){
    $('#'+id).fadeIn();
}
function unspawn(id){
    $('#'+id).fadeOut();
}
function valueEqualRu(){
  let inWord = $('#inWords').val();
  for (let i = 0; i < dictRu.length; i++) {
    if (inWord == dictRu[i]){
      $('#kzWord').val(dictKz[i]);
      $('#enWord').val(dictEn[i]);
      break;
    }
  }
  spawn('kzWord');
  spawn('enWord');
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
  spawn('ruWord');
  spawn('enWord');
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
  spawn('kzWord');
  spawn('ruWord');
  console.log('translated from en');
}

unspawn('kzWord');
unspawn('enWord');
unspawn('ruWord');

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
        $('#enWord').fadeOut('slow', function(){
            $('#enWord').val('');
        });
        $('#kzWord').fadeOut('slow', function(){
            $('#kzWord').val('');
        });
        $('#ruWord').fadeOut('slow', function(){
            $('#ruWord').val('');
        });
      }
    }
});
