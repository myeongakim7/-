setInterval(function () {
  const hEl = document.getElementById("hours");
  const mEl = document.getElementById("min");
  const sEl = document.getElementById("sec");
  const aE1 = document.getElementById("ampm");

  let d = new Date();
  let h = d.getHours();
  let m = d.getMinutes();
  let s = d.getSeconds();
  let a = hours >= 12 ? "pm" : "am";

  if (s < 10) {
    s = "0" + s;
  }
  if (m < 10) {
    m = "0" + m;
  }
  if (h > 12) {
    h = h - 12;
  }

  hEl.innerText = h;
  mEl.innerText = m;
  sEl.innerText = s;
  aE1.innerText = a;
}, 1000);

setInterval(function () {
  const yEl = document.getElementById("year");
  const mEl = document.getElementById("month");
  const dEl = document.getElementById("date");
  const aE1 = document.getElementById("day");

  let today = new Date();
  let y = today.getFullYear();
  let m = today.getMonth() + 1;
  let d = today.getDate();
  let a = today.getDay();

  if (a == 0) {
    a = "SUN";
  }
  if (a == 1) {
    a = "MON";
  }
  if (a == 2) {
    a = "TUE";
  }
  if (a == 3) {
    a = "WED";
  }
  if (a == 4) {
    a = "THU";
  }
  if (a == 5) {
    a = "FRI";
  }
  if (a == 6) {
    a = "SAT";
  }

  yEl.innerText = y;
  mEl.innerText = m;
  dEl.innerText = d;
  aE1.innerText = a;
});
