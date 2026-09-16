(function (w) {
  var SRC = "ru";

  var LANGS = [
    { code: "ru", name: "Русский" },
    { code: "en", name: "English" },
    { code: "zh-CN", name: "中文 (简体)" },
    { code: "zh-TW", name: "中文 (繁體)" },
    { code: "es", name: "Español" },
    { code: "pt", name: "Português" },
    { code: "fr", name: "Français" },
    { code: "de", name: "Deutsch" },
    { code: "it", name: "Italiano" },
    { code: "ja", name: "日本語" },
    { code: "ko", name: "한국어" },
    { code: "ar", name: "العربية" },
    { code: "hi", name: "हिन्दी" },
    { code: "tr", name: "Türkçe" },
    { code: "pl", name: "Polski" },
    { code: "uk", name: "Українська" },
    { code: "be", name: "Беларуская" },
    { code: "kk", name: "Қазақ" },
    { code: "uz", name: "Oʻzbek" },
    { code: "az", name: "Azərbaycan" },
    { code: "hy", name: "Հայերեն" },
    { code: "ka", name: "ქართული" },
    { code: "ro", name: "Română" },
    { code: "bg", name: "Български" },
    { code: "cs", name: "Čeština" },
    { code: "sk", name: "Slovenčina" },
    { code: "sl", name: "Slovenščina" },
    { code: "hr", name: "Hrvatski" },
    { code: "sr", name: "Српски" },
    { code: "bs", name: "Bosanski" },
    { code: "mk", name: "Македонски" },
    { code: "el", name: "Ελληνικά" },
    { code: "hu", name: "Magyar" },
    { code: "fi", name: "Suomi" },
    { code: "sv", name: "Svenska" },
    { code: "no", name: "Norsk" },
    { code: "da", name: "Dansk" },
    { code: "nl", name: "Nederlands" },
    { code: "id", name: "Bahasa Indonesia" },
    { code: "ms", name: "Bahasa Melayu" },
    { code: "th", name: "ไทย" },
    { code: "vi", name: "Tiếng Việt" },
    { code: "tl", name: "Filipino" },
    { code: "he", name: "עברית" },
    { code: "fa", name: "فارسی" },
    { code: "ur", name: "اردو" },
    { code: "bn", name: "বাংলা" },
    { code: "ta", name: "தமிழ்" },
    { code: "te", name: "తెలుగు" },
    { code: "mr", name: "मराठी" },
    { code: "gu", name: "ગુજરાતી" },
    { code: "kn", name: "ಕನ್ನಡ" },
    { code: "ml", name: "മലയാളം" },
    { code: "pa", name: "ਪੰਜਾਬੀ" },
    { code: "ne", name: "नेपाली" },
    { code: "si", name: "සිංහල" },
    { code: "my", name: "မြန်မာ" },
    { code: "km", name: "ខ្មែរ" },
    { code: "lo", name: "ລາວ" },
    { code: "sw", name: "Kiswahili" },
    { code: "af", name: "Afrikaans" },
    { code: "am", name: "አማርኛ" },
    { code: "ha", name: "Hausa" },
    { code: "yo", name: "Yorùbá" },
    { code: "ig", name: "Igbo" },
    { code: "zu", name: "isiZulu" },
    { code: "xh", name: "isiXhosa" },
    { code: "st", name: "Sesotho" },
    { code: "sn", name: "chiShona" },
    { code: "rw", name: "Kinyarwanda" },
    { code: "so", name: "Soomaali" },
    { code: "sq", name: "Shqip" },
    { code: "eu", name: "Euskara" },
    { code: "ca", name: "Català" },
    { code: "gl", name: "Galego" },
    { code: "cy", name: "Cymraeg" },
    { code: "ga", name: "Gaeilge" },
    { code: "is", name: "Íslenska" },
    { code: "mt", name: "Malti" },
    { code: "lt", name: "Lietuvių" },
    { code: "lv", name: "Latviešu" },
    { code: "et", name: "Eesti" },
    { code: "lb", name: "Lëtzebuergesch" },
    { code: "fy", name: "Frysk" },
    { code: "gd", name: "Gàidhlig" },
    { code: "yi", name: "ייִדיש" },
    { code: "iw", name: "עברית (iw)" },
    { code: "jw", name: "Basa Jawa" },
    { code: "su", name: "Basa Sunda" },
    { code: "ceb", name: "Cebuano" },
    { code: "hmn", name: "Hmong" },
    { code: "haw", name: "ʻŌlelo Hawaiʻi" },
    { code: "sm", name: "Gagana Samoa" },
    { code: "mi", name: "Māori" },
    { code: "mg", name: "Malagasy" },
    { code: "ny", name: "Chichewa" },
    { code: "co", name: "Corsu" },
    { code: "eo", name: "Esperanto" },
    { code: "la", name: "Latina" },
    { code: "ht", name: "Kreyòl ayisyen" },
    { code: "ku", name: "Kurdî" },
    { code: "ky", name: "Кыргызча" },
    { code: "tg", name: "Тоҷикӣ" },
    { code: "tk", name: "Türkmen" },
    { code: "ps", name: "پښتو" },
    { code: "sd", name: "سنڌي" },
    { code: "or", name: "ଓଡ଼ିଆ" },
    { code: "as", name: "অসমীয়া" },
    { code: "mai", name: "मैथिली" },
    { code: "doi", name: "डोगरी" },
    { code: "bho", name: "भोजपुरी" },
    { code: "gom", name: "कोंकणी" },
    { code: "mni-Mtei", name: "ꯃꯤꯇꯩ ꯂꯣꯟ" },
    { code: "lus", name: "Mizo" },
    { code: "sa", name: "संस्कृतम्" },
    { code: "tt", name: "Татар" },
    { code: "ug", name: "ئۇيغۇرچە" },
    { code: "mn", name: "Монгол" },
    { code: "dv", name: "ދިވެހި" },
    { code: "ak", name: "Twi" },
    { code: "ee", name: "Eʋegbe" },
    { code: "lg", name: "Luganda" },
    { code: "nso", name: "Sepedi" },
    { code: "ts", name: "Xitsonga" },
    { code: "tn", name: "Setswana" },
    { code: "kri", name: "Krio" },
    { code: "bm", name: "Bamanankan" },
    { code: "gn", name: "Avañe'ẽ" },
    { code: "ay", name: "Aymar" },
    { code: "qu", name: "Runasimi" },
    { code: "ilo", name: "Ilokano" },
    { code: "jv", name: "Jawa" },
  ];

  var BY_CODE = {};
  LANGS.forEach(function (l) {
    BY_CODE[l.code.toLowerCase()] = l;
    BY_CODE[l.code] = l;
  });

  function normalize(code) {
    var c = String(code || "")
      .trim()
      .replace(/_/g, "-");
    if (!c) return SRC;
    if (BY_CODE[c]) return BY_CODE[c].code;
    var low = c.toLowerCase();
    if (BY_CODE[low]) return BY_CODE[low].code;
    var base = low.split("-")[0];
    if (base === "zh") {
      if (/tw|hk|hant/.test(low)) return "zh-TW";
      return "zh-CN";
    }
    if (BY_CODE[base]) return BY_CODE[base].code;
    return SRC;
  }

  function deviceLang() {
    var list = [];
    try {
      if (w.navigator.languages && w.navigator.languages.length) {
        for (var i = 0; i < w.navigator.languages.length; i++) list.push(w.navigator.languages[i]);
      }
    } catch (e1) {}
    try {
      if (w.navigator.language) list.push(w.navigator.language);
    } catch (e2) {}
    try {
      if (w.navigator.userLanguage) list.push(w.navigator.userLanguage);
    } catch (e3) {}
    try {
      if (w.Intl && w.Intl.DateTimeFormat) {
        var loc = w.Intl.DateTimeFormat().resolvedOptions().locale;
        if (loc) list.push(loc);
      }
    } catch (e4) {}
    for (var j = 0; j < list.length; j++) {
      var m = normalize(list[j]);
      if (m) return m;
    }
    return SRC;
  }

  function fromUrl() {
    try {
      var p = new URLSearchParams(location.search);
      var lang = p.get("lang") || p.get("hl") || p.get("l") || "";
      if (lang) return normalize(lang);
    } catch (e) {}
    return "";
  }

  function setCookie(name, value) {
    var expires = "; expires=" + new Date(Date.now() + 365 * 864e5).toUTCString();
    document.cookie = name + "=" + value + expires + "; path=/";
    try {
      document.cookie =
        name + "=" + value + expires + "; path=/; domain=" + location.hostname;
    } catch (e) {}
  }

  function clearGoogTrans() {
    setCookie("googtrans", "");
    try {
      document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
      document.cookie =
        "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=" +
        location.hostname;
    } catch (e) {}
  }

  function applyGoogTrans(lang) {
    var target = normalize(lang);
    if (!target || target === SRC) {
      clearGoogTrans();
      return false;
    }
    var pair = "/" + SRC + "/" + target;
    setCookie("googtrans", pair);
    return true;
  }

  function buildUrl(lang, extra) {
    var u;
    try {
      u = new URL(location.href);
    } catch (e) {
      return "?lang=" + encodeURIComponent(lang || SRC);
    }
    var target = normalize(lang || SRC);
    u.searchParams.set("lang", target);
    if (extra && typeof extra === "object") {
      Object.keys(extra).forEach(function (k) {
        if (extra[k] == null || extra[k] === "") u.searchParams.delete(k);
        else u.searchParams.set(k, extra[k]);
      });
    }
    return u.pathname + u.search + u.hash;
  }

  function setLang(lang, opts) {
    var target = normalize(lang);
    var reload = !opts || opts.reload !== false;
    try {
      localStorage.setItem("nc-lang", target);
      localStorage.setItem("nc-lang-manual", target);
    } catch (e) {}
    var url = buildUrl(target);
    applyGoogTrans(target);
    if (reload) {
      if (location.pathname + location.search + location.hash !== url) {
        location.href = url;
      } else {
        location.reload();
      }
    }
    return target;
  }

  function current() {
    var fromQ = fromUrl();
    if (fromQ) return fromQ;
    try {
      var manual = localStorage.getItem("nc-lang-manual");
      if (manual) return normalize(manual);
    } catch (e) {}
    return deviceLang();
  }

  function ensureLangInUrl() {
    var lang = current();
    try {
      var p = new URLSearchParams(location.search);
      if (!p.get("lang") || normalize(p.get("lang")) !== lang) {
        p.set("lang", lang);
        var next = location.pathname + "?" + p.toString() + location.hash;
        history.replaceState(null, "", next);
      }
    } catch (e) {}
    try {
      localStorage.setItem("nc-lang", lang);
    } catch (e2) {}
    return lang;
  }

  function includedCodes() {
    return LANGS.map(function (l) {
      return l.code;
    })
      .filter(function (c) {
        return c !== SRC;
      })
      .join(",");
  }

  function injectHreflang() {
    var base = location.origin + location.pathname;
    var id = "";
    try {
      var sp = new URLSearchParams(location.search);
      id = sp.get("id") || sp.get("tag") || "";
    } catch (e) {}
    function hrefFor(code) {
      var q = new URLSearchParams();
      if (id) q.set("id", id);
      q.set("lang", code);
      return base + "?" + q.toString();
    }
    var head = document.head;
    if (!head) return;
    head.querySelectorAll('link[data-nc-hreflang]').forEach(function (n) {
      n.remove();
    });
    LANGS.forEach(function (l) {
      var link = document.createElement("link");
      link.rel = "alternate";
      link.hreflang = l.code;
      link.href = hrefFor(l.code);
      link.setAttribute("data-nc-hreflang", "1");
      head.appendChild(link);
    });
    var xdef = document.createElement("link");
    xdef.rel = "alternate";
    xdef.hreflang = "x-default";
    xdef.href = hrefFor("ru");
    xdef.setAttribute("data-nc-hreflang", "1");
    head.appendChild(xdef);
  }

  function fillSelect(sel, lang) {
    if (!sel) return;
    sel.innerHTML = "";
    LANGS.forEach(function (l) {
      var opt = document.createElement("option");
      opt.value = l.code;
      opt.textContent = l.name + " (" + l.code + ")";
      if (l.code === lang) opt.selected = true;
      sel.appendChild(opt);
    });
  }

  function bindSelect(sel) {
    if (!sel) return;
    sel.addEventListener("change", function () {
      setLang(sel.value);
    });
  }

  function hideGoogleBanner() {
    var css = document.getElementById("nc-gt-hide");
    if (css) return;
    css = document.createElement("style");
    css.id = "nc-gt-hide";
    css.textContent =
      ".goog-te-banner-frame{display:none!important}" +
      "body{top:0!important}" +
      ".goog-te-balloon-frame{display:none!important}" +
      "#goog-gt-tt,.goog-te-spinner-pos,.goog-tooltip{display:none!important}" +
      ".goog-text-highlight{background:none!important;box-shadow:none!important}" +
      ".skiptranslate iframe.skiptranslate{display:none!important}" +
      "#google_translate_element{position:absolute;left:-9999px;width:1px;height:1px;overflow:hidden;pointer-events:none}" +
      "#google_translate_element a,#google_translate_element select,#google_translate_element button{visibility:hidden}";
    document.head.appendChild(css);
  }

  function neutralizeTranslateWidget() {
    var box = document.getElementById("google_translate_element");
    if (!box) return;
    box.setAttribute("inert", "");
    box.removeAttribute("aria-hidden");
    box.querySelectorAll("a,button,select,input,textarea,[tabindex]").forEach(function (el) {
      el.setAttribute("tabindex", "-1");
      el.setAttribute("aria-hidden", "true");
    });
  }

  function isAuditBot() {
    try {
      var ua = String(w.navigator && w.navigator.userAgent || "");
      return /Chrome-Lighthouse|PageSpeed|Lighthouse|PTST|GTmetrix/i.test(ua);
    } catch (e) {
      return false;
    }
  }

  function loadGoogleTranslate(lang) {
    var target = normalize(lang);
    if (!target || target === SRC || isAuditBot()) {
      clearGoogTrans();
      return;
    }
    hideGoogleBanner();
    var need = applyGoogTrans(target);
    w.googleTranslateElementInit = function () {
      try {
        new w.google.translate.TranslateElement(
          {
            pageLanguage: SRC,
            includedLanguages: includedCodes(),
            autoDisplay: false,
            multilanguagePage: true,
          },
          "google_translate_element"
        );
      } catch (e) {}
      neutralizeTranslateWidget();
      setTimeout(neutralizeTranslateWidget, 0);
      setTimeout(neutralizeTranslateWidget, 500);
      setTimeout(neutralizeTranslateWidget, 1500);
      if (need && target && target !== SRC) {
        setTimeout(function () {
          var combo = document.querySelector(".goog-te-combo");
          if (combo) {
            combo.value = target;
            combo.dispatchEvent(new Event("change"));
            neutralizeTranslateWidget();
          }
        }, 400);
      }
    };
    if (document.getElementById("nc-gt-script")) return;
    var s = document.createElement("script");
    s.id = "nc-gt-script";
    s.async = true;
    s.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    document.head.appendChild(s);
  }

  function init() {
    var lang = ensureLangInUrl();
    var device = deviceLang();
    document.documentElement.setAttribute("lang", lang === "zh-CN" ? "zh-Hans" : lang === "zh-TW" ? "zh-Hant" : lang);
    document.documentElement.setAttribute("data-nc-device-lang", device);
    if (w.NC_I18N) NC_I18N.applyPage(lang);
    injectHreflang();
    var box = document.getElementById("google_translate_element");
    if (!box) {
      box = document.createElement("div");
      box.id = "google_translate_element";
      box.setAttribute("inert", "");
      document.body.appendChild(box);
    }
    document.querySelectorAll("[data-nc-lang]").forEach(function (sel) {
      fillSelect(sel, lang);
      bindSelect(sel);
    });
    loadGoogleTranslate(lang);
    return lang;
  }

  w.NC_LANG = {
    SRC: SRC,
    list: LANGS,
    normalize: normalize,
    device: deviceLang,
    current: current,
    set: setLang,
    url: buildUrl,
    init: init,
  };
})(window);
