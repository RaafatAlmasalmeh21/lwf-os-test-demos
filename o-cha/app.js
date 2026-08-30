/* Internal OS-test demo only. No reservation forms. No network posts. */
(function () {
  "use strict";

  var root = document.documentElement;
  var storageKey = "nl-ams-0002-lang";

  function syncButtons(lang) {
    document.querySelectorAll("[data-lang-btn]").forEach(function (btn) {
      var on = btn.getAttribute("data-lang-btn") === lang;
      btn.setAttribute("aria-pressed", on ? "true" : "false");
    });
  }

  function setLang(lang) {
    if (lang !== "nl" && lang !== "en") return;
    root.setAttribute("data-lang", lang);
    root.setAttribute("lang", lang);
    try {
      localStorage.setItem(storageKey, lang);
    } catch (e) {
      /* ignore quota / private mode */
    }
    syncButtons(lang);
  }

  var stored = null;
  try {
    stored = localStorage.getItem(storageKey);
  } catch (e) {
    stored = null;
  }

  if (stored === "nl" || stored === "en") {
    setLang(stored);
  } else {
    syncButtons("nl");
  }

  document.querySelectorAll("[data-lang-btn]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      setLang(btn.getAttribute("data-lang-btn"));
    });
  });

  document.querySelectorAll("form").forEach(function (form) {
    form.setAttribute("data-demo", "true");
    form.addEventListener("submit", function (event) {
      event.preventDefault();
    });
  });

  var sticky = document.querySelector(".sticky-cta");
  var heroCta = document.querySelector(".hero-cta");
  if (sticky && heroCta && "IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        var visible = entries[0] && entries[0].isIntersecting;
        sticky.classList.toggle("is-hidden", !!visible);
      },
      { threshold: 0.35 }
    );
    io.observe(heroCta);
  }

  var toggle = document.getElementById("nav-toggle");
  var nav = document.getElementById("site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = !nav.classList.contains("is-open");
      nav.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

})();
