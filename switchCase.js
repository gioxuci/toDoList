var currentDay = today.getDay();
var day = "";

switch (currentDay) {
  case 0:
    day = "sunday";
    break;

  case 1:
    day = "monday";
    break;

  case 2:
    day = "tuesday";
    break;

  case 3:
    day = "wednesday";
    break;

  case 4:
    day = "thursday";
    break;

  case 5:
    day = "friday";
    break;

  case 6:
    day = "saturday";
    break;

  default:
    console.log("error, current day is equal to " + currentDay);
    break;
}
