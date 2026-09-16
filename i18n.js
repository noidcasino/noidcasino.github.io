(function (w) {
  var SITE = "https://noidcasino.github.io";
  var BRAND = "NoID Casino";

  var PAGE = {
    ru: {
      h1: "Казино без верификации — вывод без KYC",
      lead:
        "Здесь про казино без паспорта и селфи: регистрация без документов, ставки на спорт и вывод без KYC. Площадки с лицензией Anjouan (Internet Gaming License Validation).",
      bc: "Казино без верификации",
      desc: "Казино без верификации: ставки на спорт, вывод без KYC. Internet Gaming License Validation (Anjouan).",
      kw: "казино без верификации, вывод без верификации, ставки на спорт, без KYC, Anjouan, NoID Casino",
      topic: "Тема: казино без верификации, вывод без KYC",
      schemaLang: "ru-RU",
      ogLocale: "ru_RU",
    },
    en: {
      h1: "Casino without verification — no KYC withdrawal",
      lead:
        "About casinos without passport or selfie: no-document signup, sports betting, and no KYC withdrawal. Platforms with Anjouan Internet Gaming License Validation.",
      bc: "Casino without verification",
      desc: "Casino without verification: sports betting, no KYC withdrawal. Internet Gaming License Validation (Anjouan).",
      kw: "casino without verification, withdrawal without verification, sports betting, no kyc, Anjouan, NoID Casino",
      topic: "Topic: casino without verification, no KYC withdrawal",
      schemaLang: "en-US",
      ogLocale: "en_US",
    },
    uk: {
      h1: "Казино без верифікації — вивід без верифікації",
      lead:
        "NoID Casino — довідник про казино без верифікації, вивід без KYC, реєстрацію без документів, крипто-платежі та швидкий вивід.",
      bc: "Казино без верифікації",
      desc: "Казино без верифікації та вивід без верифікації: як обрати No KYC майданчик без документів.",
      kw: "казино без верифікації, вивід без верифікації, без KYC, NoID Casino",
      topic: "Тема: казино без верифікації, вивід без KYC",
      schemaLang: "uk-UA",
      ogLocale: "uk_UA",
    },
    de: {
      h1: "Casino ohne Verifizierung — Auszahlung ohne Verifizierung",
      lead:
        "NoID Casino — Ratgeber zu Casinos ohne Verifizierung, Auszahlung ohne KYC, Registrierung ohne Dokumente und Krypto-Zahlungen.",
      bc: "Casino ohne Verifizierung",
      desc: "Casino ohne Verifizierung und Auszahlung ohne Verifizierung: No-KYC-Plattformen ohne Dokumente.",
      kw: "casino ohne verifizierung, auszahlung ohne verifizierung, no kyc, NoID Casino",
      topic: "Thema: Casino ohne Verifizierung, Auszahlung ohne KYC",
      schemaLang: "de-DE",
      ogLocale: "de_DE",
    },
    fr: {
      h1: "Casino sans vérification — retrait sans vérification",
      lead:
        "NoID Casino — guide des casinos sans vérification, retrait sans KYC, inscription sans documents et paiements crypto.",
      bc: "Casino sans vérification",
      desc: "Casino sans vérification et retrait sans vérification: choisir une plateforme No KYC sans documents.",
      kw: "casino sans vérification, retrait sans vérification, no kyc, NoID Casino",
      topic: "Sujet: casino sans vérification, retrait sans KYC",
      schemaLang: "fr-FR",
      ogLocale: "fr_FR",
    },
    es: {
      h1: "Casino sin verificación — retiro sin verificación",
      lead:
        "NoID Casino — guía de casinos sin verificación, retiro sin KYC, registro sin documentos y pagos con criptomonedas.",
      bc: "Casino sin verificación",
      desc: "Casino sin verificación y retiro sin verificación: cómo elegir una plataforma No KYC sin documentos.",
      kw: "casino sin verificación, retiro sin verificación, no kyc, NoID Casino",
      topic: "Tema: casino sin verificación, retiro sin KYC",
      schemaLang: "es-ES",
      ogLocale: "es_ES",
    },
    pt: {
      h1: "Cassino sem verificação — saque sem verificação",
      lead:
        "NoID Casino — guia de cassinos sem verificação, saque sem KYC, cadastro sem documentos e pagamentos em cripto.",
      bc: "Cassino sem verificação",
      desc: "Cassino sem verificação e saque sem verificação: como escolher plataforma No KYC sem documentos.",
      kw: "cassino sem verificação, saque sem verificação, no kyc, NoID Casino",
      topic: "Tema: cassino sem verificação, saque sem KYC",
      schemaLang: "pt-PT",
      ogLocale: "pt_PT",
    },
    it: {
      h1: "Casinò senza verifica — prelievo senza verifica",
      lead:
        "NoID Casino — guida ai casinò senza verifica, prelievo senza KYC, registrazione senza documenti e pagamenti crypto.",
      bc: "Casinò senza verifica",
      desc: "Casinò senza verifica e prelievo senza verifica: come scegliere una piattaforma No KYC.",
      kw: "casinò senza verifica, prelievo senza verifica, no kyc, NoID Casino",
      topic: "Argomento: casinò senza verifica, prelievo senza KYC",
      schemaLang: "it-IT",
      ogLocale: "it_IT",
    },
    pl: {
      h1: "Kasyno bez weryfikacji — wypłata bez weryfikacji",
      lead:
        "NoID Casino — przewodnik po kasynach bez weryfikacji, wypłacie bez KYC, rejestracji bez dokumentów i płatnościach krypto.",
      bc: "Kasyno bez weryfikacji",
      desc: "Kasyno bez weryfikacji i wypłata bez weryfikacji: jak wybrać platformę No KYC bez dokumentów.",
      kw: "kasyno bez weryfikacji, wypłata bez weryfikacji, no kyc, NoID Casino",
      topic: "Temat: kasyno bez weryfikacji, wypłata bez KYC",
      schemaLang: "pl-PL",
      ogLocale: "pl_PL",
    },
    tr: {
      h1: "Doğrulama olmadan casino — doğrulama olmadan para çekme",
      lead:
        "NoID Casino — doğrulama olmadan casino, KYC olmadan çekim, belgesiz kayıt ve kripto ödemeler rehberi.",
      bc: "Doğrulama olmadan casino",
      desc: "Doğrulama olmadan casino ve KYC olmadan para çekme: belgesiz No KYC platformları.",
      kw: "doğrulama olmadan casino, kyc olmadan çekim, no kyc, NoID Casino",
      topic: "Konu: doğrulama olmadan casino, KYC olmadan çekim",
      schemaLang: "tr-TR",
      ogLocale: "tr_TR",
    },
    "zh-CN": {
      h1: "无需验证的赌场 — 无需验证的提款",
      lead:
        "NoID Casino — 无需验证的赌场、无需 KYC 提款、无证件注册与加密货币支付指南。",
      bc: "无需验证的赌场",
      desc: "无需验证的赌场与无需验证的提款：如何选择无 KYC、无证件平台。",
      kw: "无需验证的赌场, 无需验证的提款, 无KYC, NoID Casino",
      topic: "主题：无需验证的赌场，无需 KYC 提款",
      schemaLang: "zh-CN",
      ogLocale: "zh_CN",
    },
    "zh-TW": {
      h1: "無需驗證的賭場 — 無需驗證的提款",
      lead:
        "NoID Casino — 無需驗證的賭場、無 KYC 提款、無證件註冊與加密貨幣支付指南。",
      bc: "無需驗證的賭場",
      desc: "無需驗證的賭場與無需驗證的提款：如何選擇無 KYC 平台。",
      kw: "無需驗證的賭場, 無需驗證的提款, 無KYC, NoID Casino",
      topic: "主題：無需驗證的賭場，無 KYC 提款",
      schemaLang: "zh-TW",
      ogLocale: "zh_TW",
    },
    ja: {
      h1: "本人確認不要のカジノ — 本人確認不要の出金",
      lead:
        "NoID Casino — KYC不要のカジノ、本人確認不要の出金、書類なし登録、暗号資産決済のガイド。",
      bc: "本人確認不要のカジノ",
      desc: "本人確認不要のカジノと出金：書類不要のNo KYCプラットフォームの選び方。",
      kw: "本人確認不要 カジノ, KYC不要 出金, NoID Casino",
      topic: "テーマ：本人確認不要のカジノ、KYC不要の出金",
      schemaLang: "ja-JP",
      ogLocale: "ja_JP",
    },
    ko: {
      h1: "인증 없는 카지노 — 인증 없는 출금",
      lead:
        "NoID Casino — 인증 없는 카지노, KYC 없는 출금, 서류 없는 가입, 암호화폐 결제 가이드.",
      bc: "인증 없는 카지노",
      desc: "인증 없는 카지노와 인증 없는 출금: 서류 없는 No KYC 플랫폼 선택법.",
      kw: "인증 없는 카지노, KYC 없는 출금, NoID Casino",
      topic: "주제: 인증 없는 카지노, KYC 없는 출금",
      schemaLang: "ko-KR",
      ogLocale: "ko_KR",
    },
    ar: {
      h1: "كازينو بدون تحقق — سحب بدون تحقق",
      lead:
        "NoID Casino — دليل الكازينو بدون تحقق، السحب بدون KYC، التسجيل بدون مستندات والمدفوعات بالعملات المشفرة.",
      bc: "كازينو بدون تحقق",
      desc: "كازينو بدون تحقق وسحب بدون تحقق: كيف تختار منصة No KYC بدون مستندات.",
      kw: "كازينو بدون تحقق, سحب بدون تحقق, no kyc, NoID Casino",
      topic: "الموضوع: كازينو بدون تحقق، سحب بدون KYC",
      schemaLang: "ar",
      ogLocale: "ar_AR",
    },
    hi: {
      h1: "बिना verification के casino — बिना verification के withdrawal",
      lead:
        "NoID Casino — बिना verification के casino, No KYC withdrawal, बिना documents registration और crypto payments गाइड।",
      bc: "बिना verification के casino",
      desc: "बिना verification के casino और withdrawal: No KYC platform कैसे चुनें।",
      kw: "casino without verification, no kyc, withdrawal without verification, NoID Casino",
      topic: "विषय: बिना verification के casino, No KYC withdrawal",
      schemaLang: "hi-IN",
      ogLocale: "hi_IN",
    },
    nl: {
      h1: "Casino zonder verificatie — opname zonder verificatie",
      lead:
        "NoID Casino — gids voor casino's zonder verificatie, opname zonder KYC, registratie zonder documenten en crypto.",
      bc: "Casino zonder verificatie",
      desc: "Casino zonder verificatie en opname zonder verificatie: No KYC platforms zonder documenten.",
      kw: "casino zonder verificatie, opname zonder verificatie, no kyc, NoID Casino",
      topic: "Onderwerp: casino zonder verificatie, opname zonder KYC",
      schemaLang: "nl-NL",
      ogLocale: "nl_NL",
    },
    be: {
      h1: "Казіно без верифікацыі — вывад без верифікацыі",
      lead:
        "NoID Casino — даведнік пра казіно без верифікацыі, вывад без KYC і рэгістрацыю без дакументаў.",
      bc: "Казіно без верифікацыі",
      desc: "Казіно без верифікацыі і вывад без верифікацыі: No KYC без дакументаў.",
      kw: "казіно без верифікацыі, вывад без верифікацыі, no kyc, NoID Casino",
      topic: "Тэма: казіно без верифікацыі, вывад без KYC",
      schemaLang: "be",
      ogLocale: "be_BY",
    },
    kk: {
      h1: "Верификациясыз казино — верификациясыз шығару",
      lead:
        "NoID Casino — верификациясыз казино, KYC-сыз шығару, құжатсыз тіркелу және крипто төлемдер нұсқаулығы.",
      bc: "Верификациясыз казино",
      desc: "Верификациясыз казино және шығару: құжатсыз No KYC платформалар.",
      kw: "верификациясыз казино, kyc-сыз шығару, NoID Casino",
      topic: "Тақырып: верификациясыз казино, KYC-сыз шығару",
      schemaLang: "kk-KZ",
      ogLocale: "kk_KZ",
    },
  };

  function normalize(code) {
    var c = String(code || "")
      .trim()
      .replace(/_/g, "-");
    if (!c) return "ru";
    if (PAGE[c]) return c;
    var low = c.toLowerCase();
    if (PAGE[low]) return low;
    if (low === "zh-hans" || low.indexOf("zh-cn") === 0) return "zh-CN";
    if (low === "zh-hant" || low.indexOf("zh-tw") === 0 || low.indexOf("zh-hk") === 0) return "zh-TW";
    var base = low.split("-")[0];
    if (PAGE[base]) return base;
    return "en";
  }

  function pack(lang) {
    return PAGE[normalize(lang)] || PAGE.en;
  }

  function pageUrl(lang, id) {
    var q = new URLSearchParams();
    if (id) q.set("id", id);
    q.set("lang", normalize(lang));
    return SITE + "/index.html?" + q.toString();
  }

  function setMeta(id, content) {
    var el = document.getElementById(id);
    if (el) el.setAttribute("content", content || "");
  }

  function setMetaProp(prop, content) {
    var el = document.querySelector('meta[property="' + prop + '"]');
    if (el) el.setAttribute("content", content || "");
  }

  function setMetaName(name, content) {
    var el = document.querySelector('meta[name="' + name + '"]');
    if (el) el.setAttribute("content", content || "");
  }

  function setJsonLd(id, data) {
    var el = document.getElementById(id);
    if (!el) {
      el = document.createElement("script");
      el.type = "application/ld+json";
      el.id = id;
      document.head.appendChild(el);
    }
    el.textContent = JSON.stringify(data);
  }

  function applyHead(lang, id) {
    var L = pack(lang);
    var code = normalize(lang);
    var title = L.h1 + " | " + BRAND;
    document.title = title;
    setMeta("nc-desc", L.desc);
    setMeta("nc-kw", L.kw);
    setMetaProp("og:title", title);
    setMetaProp("og:description", L.desc);
    setMetaName("twitter:title", title);
    setMetaName("twitter:description", L.desc);
    var ogLocale = document.getElementById("og-locale");
    if (ogLocale) ogLocale.setAttribute("content", L.ogLocale);
    var canon = document.getElementById("nc-canon");
    if (canon) canon.setAttribute("href", pageUrl(code, id));
    var itemName = document.querySelector('meta[itemprop="name"]');
    if (itemName) itemName.setAttribute("content", L.h1);
    var itemDesc = document.querySelector('meta[itemprop="description"]');
    if (itemDesc) itemDesc.setAttribute("content", L.desc);

    setJsonLd("nc-ld-webpage", {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": pageUrl(code, id) + "#webpage",
      url: pageUrl(code, id),
      name: L.h1,
      headline: L.h1,
      description: L.desc,
      inLanguage: L.schemaLang,
      isPartOf: { "@id": SITE + "/#website" },
      about: [
        { "@type": "Thing", name: L.h1.split(" — ")[0] || L.h1 },
        { "@type": "Thing", name: "No KYC casino" },
        { "@type": "Thing", name: "Withdrawal without verification" },
      ],
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: SITE + "/i/icon-512.svg",
      },
      keywords: L.kw,
    });

    var graph = [];
    Object.keys(PAGE).forEach(function (codeKey) {
      var P = PAGE[codeKey];
      graph.push({
        "@type": "WebPage",
        "@id": pageUrl(codeKey, id) + "#webpage-" + codeKey,
        url: pageUrl(codeKey, id),
        name: P.h1,
        headline: P.h1,
        description: P.desc,
        inLanguage: P.schemaLang,
        isPartOf: { "@id": SITE + "/#website" },
      });
    });
    setJsonLd("nc-ld-i18n", {
      "@context": "https://schema.org",
      "@graph": graph,
    });
  }

  function applyBody(lang, id) {
    if (id) return;
    var L = pack(lang);
    var h1 = document.getElementById("n");
    var lead = document.getElementById("lead");
    var bc = document.getElementById("bcCurrent");
    var topic = document.getElementById("nc-topic");
    if (h1) {
      h1.textContent = L.h1;
      h1.setAttribute("lang", normalize(lang) === "zh-CN" ? "zh-Hans" : normalize(lang) === "zh-TW" ? "zh-Hant" : normalize(lang));
    }
    if (lead) {
      lead.textContent = L.lead;
      lead.setAttribute("lang", h1 ? h1.getAttribute("lang") : normalize(lang));
    }
    if (bc) bc.textContent = L.bc;
    if (topic) topic.textContent = L.topic;
  }

  function applyPage(lang, opts) {
    var id = (opts && opts.id) || "";
    try {
      if (!id) {
        var p = new URLSearchParams(location.search);
        id = p.get("id") || p.get("tag") || "";
      }
    } catch (e) {}
    applyHead(lang, id);
    applyBody(lang, id);
    return pack(lang);
  }

  w.NC_I18N = {
    page: PAGE,
    normalize: normalize,
    pack: pack,
    applyHead: applyHead,
    applyBody: applyBody,
    applyPage: applyPage,
    pageUrl: pageUrl,
  };
})(window);