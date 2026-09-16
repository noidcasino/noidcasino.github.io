(function () {
  var box = document.getElementById("play-casino-no-verification");
  if (!box) return;

  var lang = document.documentElement.getAttribute("lang") || "ru";
  var label = "Играть";
  var aria = "Играть в казино без верификации";
  if (window.NC_TAG_I18N) {
    label = NC_TAG_I18N.playBtnLabel(lang);
    aria = NC_TAG_I18N.playBtnAria(lang);
  }

  var btn = document.createElement("button");
  btn.type = "button";
  btn.className = "nc-play-cta";
  btn.id = "play-casino-no-verification-btn";
  btn.textContent = label;
  btn.setAttribute("aria-label", aria);
  btn.setAttribute("lang", lang);

  btn.addEventListener("click", function () {
    var u = ["https://go", "297532", ".com?id=", "15031", "&modal=reg"].join("");
    window.open(u, "_blank", "noopener,noreferrer");
  });

  box.appendChild(btn);

  function startPulse() {
    btn.classList.add("is-loaded");
  }

  if (document.readyState === "complete") {
    startPulse();
  } else {
    window.addEventListener("load", startPulse, { once: true });
  }
})();
