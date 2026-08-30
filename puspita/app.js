(function () {
  "use strict";

  var html = document.documentElement;
  var btn = document.getElementById("lang-toggle");

  function applyLang(en) {
    html.classList.toggle("is-en", en);
    html.lang = en ? "en" : "nl";
    document.querySelectorAll("[data-lang='nl']").forEach(function (el) {
      el.hidden = en;
    });
    document.querySelectorAll("[data-lang='en']").forEach(function (el) {
      el.hidden = !en;
    });
    if (btn) {
      btn.setAttribute("aria-pressed", en ? "true" : "false");
      btn.setAttribute(
        "aria-label",
        en ? "Schakel naar Nederlands" : "Switch to English"
      );
      btn.textContent = en ? "NL" : "EN";
    }
    try {
      sessionStorage.setItem("puspita-demo-lang", en ? "en" : "nl");
    } catch (e) {}
  }

  var startEn = false;
  try {
    startEn = sessionStorage.getItem("puspita-demo-lang") === "en";
  } catch (e) {}
  applyLang(startEn);

  if (btn) {
    btn.addEventListener("click", function () {
      applyLang(!html.classList.contains("is-en"));
    });
  }

})();
