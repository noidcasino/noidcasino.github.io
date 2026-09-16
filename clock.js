(function () {
  var clockTime = document.getElementById("nc-clock-time");
  var clockDate = document.getElementById("nc-clock-date");
  if (!clockTime && !clockDate) return;

  function locale() {
    try {
      var lang = new URLSearchParams(location.search).get("lang");
      if (lang) return lang;
    } catch (e) {}
    try {
      if (document.documentElement.lang) return document.documentElement.lang;
    } catch (e2) {}
    try {
      return navigator.language || "ru-RU";
    } catch (e3) {
      return "ru-RU";
    }
  }

  function tickClock() {
    var now = new Date();
    var loc = locale();
    var t = now.toLocaleTimeString(loc, {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
    var d = now.toLocaleDateString(loc, {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    if (clockTime) {
      clockTime.textContent = t;
      clockTime.setAttribute("datetime", now.toISOString());
    }
    if (clockDate) clockDate.textContent = d;
  }

  tickClock();
  setInterval(tickClock, 1000);
})();
