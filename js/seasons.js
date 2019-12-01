function changeClassToWinter() {
  $().css();
}
function changeClassToSpring() {
  $().css();
}
function changeClassToSummer() {
  $().css();
}
function changeClassToAutumn(){
  $().css();
}

function MonthToggle(){
  let subtitle = document.getElementById('subtitle');
  let date = new Date(),
      month = date.getMonth();
  switch (month) {
    case 11:
    case 0:
    case 1:
      $("section").css('background-image', 'url(img/winter.jpg)');
      subtitle.value = "Winter";
      changeClassToWinter();
      break;
    case 2:
    case 3:
    case 4:
      $("section").css('background-image', 'url(img/spring.jpg)');
      subtitle.value = "Spring";
      changeClassToSpring();
      break;
    case 5:
    case 6:
    case 7:
      $("section").css('background-image', 'url(img/summer.jpg)');
      subtitle.value = "Summer";
      changeClassToSummer();
      break;
    case 8:
    case 9:
    case 10:
      $("section").css('background-image', 'url(img/autumn.jpg)');
      subtitle.value = "Autumn";
      changeClassToAutumn();
      break;
  }
}

function MonthToggleAnotherPage(){
  let date = new Date(),
      month = date.getMonth();
  switch (month) {
    case 11:
    case 0:
    case 1:
      $("section").css('background-image', 'url(../img/winter.jpg)');

      break;
    case 2:
    case 3:
    case 4:
      $("section").css('background-image', 'url(../img/spring.jpg)');
      break;
    case 5:
    case 6:
    case 7:
      $("section").css('background-image', 'url(../img/summer.jpg)');
      break;
    case 8:
    case 9:
    case 10:
      $("section").css('background-image', 'url(../img/autumn.jpg)');
      break;
  }
}
