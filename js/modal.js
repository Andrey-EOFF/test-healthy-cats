// -- скрол до секцій -- //
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({
      behavior: "smooth",
    });
  });
});

// -- таймер у формі -- //
function startTimer(duration, display) {
  var timer = duration,
    hours,
    minutes,
    seconds;
  setInterval(function () {
    hours = parseInt(timer / 3600, 10);
    minutes = parseInt((timer % 3600) / 60, 10);
    seconds = parseInt(timer % 60, 10);

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = hours + ":" + minutes + ":" + seconds;

    if (--timer < 0) {
      timer = duration;
    }
  }, 1000);
}

window.onload = function () {
  var twoHours = 2 * 60 * 60;
  var display = document.getElementById("time");
  startTimer(twoHours, display);
};

// -- відправка форми -- //
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".order-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    alert("Форма відправлена!");

    form.reset();
  });
});

// -- дата у формі -- //
var today = new Date();

var day = today.getDate();
var month = today.getMonth() + 1;
var year = today.getFullYear();

var formattedDate =
  (day < 10 ? "0" : "") +
  day +
  "." +
  (month < 10 ? "0" : "") +
  month +
  "." +
  year;

document.getElementById("order-date").textContent = formattedDate;
