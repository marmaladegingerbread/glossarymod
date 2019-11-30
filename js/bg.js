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
      break;
    case 2:
    case 3:
    case 4:
      $("section").css('background-image', 'url(img/spring.jpg)');
      subtitle.value = "Spring";
      break;
    case 5:
    case 6:
    case 7:
      $("section").css('background-image', 'url(img/summer.jpg)');
      subtitle.value = "Summer";
      break;
    case 8:
    case 9:
    case 10:
      $("section").css('background-image', 'url(img/autumn.jpg)');
      subtitle.value = "Autumn";
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
