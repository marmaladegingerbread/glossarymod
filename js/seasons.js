function MonthToggle(){
  let date = new Date(),
      month = date.getMonth();
      hour = date.getHours();
  if (hour >= 4 && hour <= 18){
      $("section").css('background-image', 'url(img/wall/wall_sunrise.jpg)');
  }
  else if (hour >= 18 && hour <= 22) {
      $("section").css('background-image', 'url(img/wall/wall_sunset.jpg)');
  }
}

function MonthToggleAnotherPage(){
  let date = new Date(),
      month = date.getMonth();
      hour = date.getHours();
  if (hour >= 4 && hour <= 18){
      $("section").css('background-image', 'url(../img/wall/wall_sunrise.jpg)');
  }
  else if (hour >= 18 && hour <= 22) {
      $("section").css('background-image', 'url(../img/wall/wall_sunset.jpg)');
  }
}
