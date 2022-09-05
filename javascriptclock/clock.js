const leftPad = (data) => {
  return data < 10 ? 0 + data : data;
};

const getName = (
  promptMessage = "What is your name?",
  promptTextId = "myName"
) => {
  let data = prompt(promptMessage, "");
  dataCapitalized = data.charAt(0).toUpperCase() + data.slice(1).toLowerCase();
  document.getElementById(promptTextId).innerText = dataCapitalized;
};

const showTime = () => {
  let dateObject = new Date();
  let day = dateObject.getDay();
  let time =
    leftPad(dateObject.getHours()) +
    ":" +
    leftPad(dateObject.getMinutes()) +
    ":" +
    leftPad(dateObject.getSeconds());
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
  dayTime = day + " " + time;
  document.getElementById("myClock").innerText = dayTime;
  setTimeout(showTime, 1000);
};

getName();
showTime();
