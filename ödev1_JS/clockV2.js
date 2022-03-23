//get name
const getN = (promptMessage = "What is your name?", promptTextId = "name") => {
  let data = prompt(promptMessage, "");
  document.getElementById(promptTextId).innerText = data.toLowerCase();
};
function leftPad(data) {
  return data < 10 ? "0" + data : data;
}
function showTime() {
  var date = new Date();
  var hour = date.getHours;
  var min = date.getMinutes;
  var sec = date.getSeconds;
  var day = date.getDay;

  switch (day) {
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
    case 7:
      day = "Sunday";
      break;
  }

  let time =
    leftPad(hour) + "." + leftPad(min) + "." + leftPad(sec) + " " + day;
  document.getElementById("showTime").innerText = time;
  setTimeout(showTime, 1000);
}

getN();
showTime();
