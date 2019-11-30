function bgEnter(){
  let date = new Date(),
      hour = date.getHours(),
      day = date.getUTCDay(),
      month = date.getMonth();
  if (hour >= 3 || hour <= 11) {
    $("section").css('background-image', 'url(img/wall/wall_sunrise.jpg)');
  }
  else if (hour >= 12 || hour <= 17) {
    $("section").css('background-image', 'url(img/wall/wall_main.jpg)');
  }
  else if (hour >= 18 || hour <= 22) {
    $("section").css('background-image', 'url(img/wall/wall_sunset.jpg)');
  }
  else {
    $("section").css('background-image', 'url(img/wall/wall_sunmain.jpg)');
  }
}
