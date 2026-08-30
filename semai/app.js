/* Semai Restaurant & Lounge — internal demo only. Form does not send. */
(function () {
  "use strict";

  var STORAGE_KEY = "semai-demo-lang";

  var t = {
    nl: {
      skip: "Ga naar inhoud",
      "demo.banner":
        "Interne demo, geen officiële website van Semai Restaurant & Lounge. Alleen voor OS-test. Niet publiceren als hun domein.",
      "nav.main": "Hoofdnavigatie",
      "nav.about": "Over",
      "nav.menu": "Menu",
      "nav.reviews": "Reviews",
      "nav.location": "Locatie",
      "nav.faq": "FAQ",
      "nav.reserve": "Reserveren",
      "nav.menuBtn": "Menu",
      "nav.lang": "Taal",
      "cta.call": "Bel om te reserveren",
      "cta.mail": "Mail ons",
      "cta.sticky": "Bel om te reserveren · 020 786 6625",
      "hero.kicker": "Eritrees & Ethiopisch · Amsterdam-Noord",
      "hero.meaning": "Semai betekent hemel in het Tigrinya en het Amhaars.",
      "hero.lead":
        "Een uniek Oost-Afrikaans restaurant in Amsterdam: familierestaurant en lounge op de eerste verdieping van een voormalig industriepand aan de Papaverhoek. Eten is delen: injera met stoofgerechten.",
      "hero.hours": "Maandag gesloten · dinsdag–zondag 17:00–22:00",
      "about.kicker": "Papaverhoek · eerste verdieping",
      "about.title": "Hemel, één trap omhoog",
      "about.p1":
        "Semai noemt zichzelf «a unique East-African restaurant in Amsterdam». De naam betekent letterlijk lucht / hemel in het Tigrinya (Eritrea) en het Amhaars (Ethiopië).",
      "about.p2":
        "Het is een familierestaurant en lounge op de eerste verdieping van een voormalig industriepand in Amsterdam-Noord. Van buiten een sobere, donkere poort; binnen een warme, Oost-Afrikaanse huiskamer-lounge — geen nachtclub.",
      "about.p3":
        "NRC schreef: «eenmaal op de eerste verdieping waan je je in een andere wereld.» Reserveren vooraf is verstandig.",
      "about.cap": "Interieur, eerste verdieping — demo-foto.",
      "menu.title": "Menu",
      "menu.lede":
        "Alleen gerechten van de officiële WordPress-kaart. Geen extra beschrijvingen. Prijzen ter oriëntatie.",
      "menu.cap": "Gerechten uit de Eritrese/Ethiopische keuken — demo-foto.",
      "menu.starters": "Voorgerechten",
      "menu.meat": "Vlees met enjera en salade",
      "menu.meatnote": "Hoofdgerechten €16–€18 · vleesmix €25",
      "menu.veg": "Vegetarisch & vegan",
      "menu.vegnote": "Hoofdgerechten €15 · groentemix €22,50",
      "menu.fish": "Vis",
      "menu.desserts": "Nagerechten",
      "menu.source": "Bron: ",
      "menu.source2":
        " — prijzen kunnen wijzigen; bevestig bij reservering.",
      "reviews.title": "Gasten & pers",
      "reviews.score": "4,8",
      "reviews.rating": "590 recensies · Google via ",
      "reviews.gfnote":
        "Gastclaim, geen certificering en niet vermeld op de officiële menukaart.",
      "loc.title": "Locatie & openingstijden",
      "loc.near": "Amsterdam-Noord, bij Noorderpark. Eerste verdieping.",
      "loc.access":
        "Bereikbaar via de trap (eerste verdieping). Bronnen vermelden dat de zaak niet rolstoeltoegankelijk is — geen toegankelijkheidskeurmerk op deze demo.",
      "loc.hoursTitle": "Openingstijden",
      "day.mon": "Maandag",
      "day.tue": "Dinsdag",
      "day.wed": "Woensdag",
      "day.thu": "Donderdag",
      "day.fri": "Vrijdag",
      "day.sat": "Zaterdag",
      "day.sun": "Zondag",
      "hours.closed": "Gesloten",
      "loc.source": "Bron: contactpagina restaurant (WordPress). ",
      "loc.conflict": "AmsterdamNOW schrijft zeven dagen per week tot 03:00. Dat is onbetrouwbaar tegenover de eerste-partij WordPress-tijden (dinsdag–zondag 17:00–22:00, maandag gesloten). Deze demo gebruikt de WordPress-tabel; 03:00 is geen openingstijd hier.",
      "loc.social": "Volg hen:",
      "loc.maptitle": "Kaart: Papaverhoek 35, Amsterdam-Noord",
      "loc.openmap": "Open de kaart op OpenStreetMap",
      "res.title": "Reserveren",
      "res.lede":
        "Reserveren vooraf wordt aangeraden. Bel of mail — er is geen TheFork-pagina bevestigd.",
      "res.phoneLabel": "Telefoon",
      "res.mailLabel": "E-mail",
      "res.formtitle": "Aanvraag (demo)",
      "res.formhint":
        "Wordt niet verstuurd. Gebruik telefoon of e-mail voor een echte reservering.",
      "res.name": "Naam",
      "res.email": "E-mail",
      "res.phone": "Telefoon",
      "res.date": "Gewenste datum",
      "res.guests": "Aantal personen",
      "res.msg": "Bericht",
      "res.submit": "Verstuur aanvraag (demo)",
      "res.demo":
        "Dit is een demo. Bel 020 786 6625 of mail restaurant.semai@gmail.com.",
      "faq.title": "Veelgestelde vragen",
      "faq.q1": "Moet ik reserveren?",
      "faq.a1":
        "Ja, dat wordt aangeraden. Telefonisch (020 786 6625) of per e-mail (restaurant.semai@gmail.com). Een TheFork-pagina is niet bevestigd.",
      "faq.q2": "Zijn er vegetarische of vegan opties?",
      "faq.a2":
        "Ja. De officiële menukaart heeft een sectie «VEGETARIAN & VEGAN DISHES» (onder andere Shiro, Tumtumo, Tsebhi Duba, Hamli, Alicha, Kikie en de mix Yetsom Beyaynetu €22,50).",
      "faq.q3": "Is de injera glutenvrij?",
      "faq.a4":
        "Eerste partij (WordPress-contactpagina): dinsdag–zondag 17:00–22:00, maandag gesloten. AmsterdamNOW (zeven dagen / tot 03:00) is onbetrouwbaar en wordt hier niet als openingstijd gebruikt.",
      "faq.a3":
        "Niet geverifieerd op de officiële menukaart. Vraag het bij het reserveren; behandel glutenvrije injera niet als een belofte totdat het restaurant het bevestigt.",
      "faq.q4": "Welke dagen zijn jullie open?",
      "faq.q5": "Is het restaurant rolstoeltoegankelijk?",
      "faq.a5":
        "Het zit op de eerste verdieping, bereikbaar via de trap. Bronnen vermelden dat de zaak niet rolstoeltoegankelijk is.",
      "footer.line":
        "Papaverhoek 35, 1032 JZ Amsterdam · 020 786 6625 · restaurant.semai@gmail.com",
      "footer.social": "Instagram · Facebook",
      "footer.https":
        "Kleine noot: HTTPS op hun eigen domein (semai.nl) faalt momenteel; er blijft een oudere WordPress.com-pagina staan. Dit ontwerp is een interne demo, geen vervanging en geen officiële site.",
      "footer.demo":
        "Interne OS-test. Geen officiële website. Niet publiceren op het restaurantdomein. Geen contact opgenomen met de zaak. Bronnen: WordPress-contact/about, Wanderlog (Google), NRC.",
      title:
        "Semai Restaurant & Lounge — interne demo | Amsterdam-Noord"
    },
    en: {
      skip: "Skip to content",
      "demo.banner":
        "Internal demo, not the official Semai Restaurant & Lounge website. OS-test only. Do not publish this as their domain.",
      "nav.main": "Main navigation",
      "nav.about": "About",
      "nav.menu": "Menu",
      "nav.reviews": "Reviews",
      "nav.location": "Location",
      "nav.faq": "FAQ",
      "nav.reserve": "Reserve",
      "nav.menuBtn": "Menu",
      "nav.lang": "Language",
      "cta.call": "Call to reserve",
      "cta.mail": "Email us",
      "cta.sticky": "Call to reserve · 020 786 6625",
      "hero.kicker": "Eritrean & Ethiopian · Amsterdam-Noord",
      "hero.meaning": "Semai means sky / heaven in Tigrinya and Amharic.",
      "hero.lead":
        "A unique East-African restaurant in Amsterdam: a family-run restaurant and lounge on the first floor of a former industrial building on Papaverhoek. Food is shared: injera with stews.",
      "hero.hours": "Monday closed · Tuesday–Sunday 17:00–22:00",
      "about.kicker": "Papaverhoek · first floor",
      "about.title": "Heaven, one flight up",
      "about.p1":
        "Semai describes itself as “a unique East-African restaurant in Amsterdam”. The name literally means sky / heaven in Tigrinya (an Eritrean language) and Amharic (an Ethiopian language).",
      "about.p2":
        "It is a family-run restaurant and lounge on the first floor of a former industrial building in Amsterdam-Noord. Outside, a plain dark doorway; inside, a warm East-African living-room lounge — not a nightclub.",
      "about.p3":
        "NRC wrote that once you reach the first floor you feel you are in another world. Booking ahead is wise.",
      "about.cap": "Interior, first floor — demo photo.",
      "menu.title": "Menu",
      "menu.lede":
        "Dishes from the official WordPress menu only. No extra descriptions. Prices may change.",
      "menu.cap": "Eritrean/Ethiopian dishes — demo photo.",
      "menu.starters": "Starters",
      "menu.meat": "Meat with enjera and salad",
      "menu.meatnote": "Mains €16–€18 · meat mix €25",
      "menu.veg": "Vegetarian & vegan",
      "menu.vegnote": "Mains €15 · vegetable mix €22.50",
      "menu.fish": "Fish",
      "menu.desserts": "Desserts",
      "menu.source": "Source: ",
      "menu.source2":
        " — prices may change; confirm when booking.",
      "reviews.title": "Guests & press",
      "reviews.score": "4.8",
      "reviews.rating": "590 reviews · Google via ",
      "reviews.gfnote":
        "Guest claim, not a certification and not listed on the official menu.",
      "loc.title": "Location & hours",
      "loc.near": "Amsterdam-Noord, near Noorderpark. First floor.",
      "loc.access":
        "Reached by stairs (first floor). Sources state the venue is not wheelchair accessible — this demo has no accessibility badge.",
      "loc.hoursTitle": "Opening hours",
      "day.mon": "Monday",
      "day.tue": "Tuesday",
      "day.wed": "Wednesday",
      "day.thu": "Thursday",
      "day.fri": "Friday",
      "day.sat": "Saturday",
      "day.sun": "Sunday",
      "hours.closed": "Closed",
      "loc.source": "Source: restaurant contact page (WordPress). ",
      "loc.conflict": "AmsterdamNOW says seven days a week until 03:00. That is unreliable against first-party WordPress hours (Tuesday–Sunday 17:00–22:00, Monday closed). This demo uses the WordPress table; 03:00 is not used as an opening time.",
      "loc.social": "Follow them:",
      "loc.maptitle": "Map: Papaverhoek 35, Amsterdam-Noord",
      "loc.openmap": "Open the map on OpenStreetMap",
      "res.title": "Reserve",
      "res.lede":
        "Booking in advance is recommended. Call or email — no TheFork page is confirmed.",
      "res.phoneLabel": "Phone",
      "res.mailLabel": "Email",
      "res.formtitle": "Request (demo)",
      "res.formhint":
        "Nothing is sent. Use phone or email for a real reservation.",
      "res.name": "Name",
      "res.email": "Email",
      "res.phone": "Phone",
      "res.date": "Preferred date",
      "res.guests": "Number of guests",
      "res.msg": "Message",
      "res.submit": "Submit request (demo)",
      "res.demo":
        "Dit is een demo. Bel 020 786 6625 of mail restaurant.semai@gmail.com.",
      "faq.title": "Frequently asked questions",
      "faq.q1": "Do I need to reserve?",
      "faq.a1":
        "Yes, it is recommended. By phone (020 786 6625) or email (restaurant.semai@gmail.com). A TheFork page is not confirmed.",
      "faq.q2": "Are there vegetarian or vegan options?",
      "faq.a2":
        "Yes. The official menu has a “VEGETARIAN & VEGAN DISHES” section (including Shiro, Tumtumo, Tsebhi Duba, Hamli, Alicha, Kikie and the Yetsom Beyaynetu mix €22.50).",
      "faq.q3": "Is the injera gluten-free?",
      "faq.a3":
        "Unverified on the official menu. Ask when booking; do not treat gluten-free injera as a promise until the restaurant confirms it.",
      "faq.q4": "Which days are you open?",
      "faq.a4":
        "First-party (WordPress contact page): Tuesday–Sunday 17:00–22:00, Monday closed. AmsterdamNOW (seven days / until 03:00) is unreliable and is not used as opening hours here.",
      "faq.q5": "Is the restaurant wheelchair accessible?",
      "faq.a5":
        "It is on the first floor, reached by stairs. Sources state the venue is not wheelchair accessible.",
      "footer.line":
        "Papaverhoek 35, 1032 JZ Amsterdam · 020 786 6625 · restaurant.semai@gmail.com",
      "footer.social": "Instagram · Facebook",
      "footer.https":
        "A small note: HTTPS on their own domain (semai.nl) currently fails; a leftover WordPress.com page remains. This design is an internal demo, not a replacement and not an official site.",
      "footer.demo":
        "Internal OS test. Not an official website. Do not publish on the restaurant domain. No one at the restaurant was contacted. Sources: WordPress contact/about, Wanderlog (Google), NRC.",
      title:
        "Semai Restaurant & Lounge — internal demo | Amsterdam-Noord"
    }
  };

  /* Keep the required Dutch submit line in English mode too, then EN gloss. */
  t.en["res.demo"] =
    "Dit is een demo. Bel 020 786 6625 of mail restaurant.semai@gmail.com.";

  var lang = "nl";

  function apply(next) {
    lang = next === "en" ? "en" : "nl";
    var dict = t[lang];
    document.documentElement.lang = lang;
    document.title = dict.title;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key] == null) return;
      if (el.children.length) return; /* keep nested links */
      el.textContent = dict[key];
    });

    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-aria");
      if (dict[key] != null) el.setAttribute("aria-label", dict[key]);
    });

    document.querySelectorAll("[data-i18n-title]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-title");
      if (dict[key] != null) el.setAttribute("title", dict[key]);
    });

    var btnNl = document.getElementById("btn-nl");
    var btnEn = document.getElementById("btn-en");
    if (btnNl) btnNl.setAttribute("aria-pressed", lang === "nl" ? "true" : "false");
    if (btnEn) btnEn.setAttribute("aria-pressed", lang === "en" ? "true" : "false");

    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {}
  }

  var btnNl = document.getElementById("btn-nl");
  var btnEn = document.getElementById("btn-en");
  if (btnNl) btnNl.addEventListener("click", function () { apply("nl"); });
  if (btnEn) btnEn.addEventListener("click", function () { apply("en"); });

  try {
    var stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "nl") apply(stored);
  } catch (e) {}

  var toggle = document.getElementById("nav-toggle");
  var nav = document.getElementById("site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = !nav.classList.contains("is-open");
      nav.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  function jumpHash() {
    var id = location.hash.replace("#", "");
    if (!id) return;
    var el = document.getElementById(id);
    if (el) el.scrollIntoView();
  }
  jumpHash();
  window.addEventListener("load", jumpHash);
  window.addEventListener("hashchange", jumpHash);
})();
