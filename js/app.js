function displayTime() {
  let date = new Date();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let day = date.getDay();
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  if (hour == 0) {
    hour = 12;
  }

  if (hour >= 12) {
    hour = hour;
  }

  hour = `${hour < 10 ? "0" : ""}${hour}`;
  minutes = `${minutes < 10 ? "0" : ""}${minutes}`;
  seconds = `${seconds < 10 ? "0" : ""}${seconds}`;

  let currentTime = `${hour}:${minutes}:${seconds}`;

  document.querySelector(".clock").textContent = currentTime;
  document.querySelector(".day").textContent = weekDays[day];

  setTimeout(displayTime, 1000);
}

displayTime();
