(function (w) {
  var BY_CAT = {
    "casino without verification": [
      { slug: "no-verification", name: "casino without verification", nameRu: "казино без верификации" },
    ],
    "casino without documents": [
      { slug: "no-documents", name: "casino without documents", nameRu: "казино без документов" },
    ],
    "casino without selfie": [
      { slug: "no-selfie", name: "casino without selfie", nameRu: "казино без селфи" },
    ],
    "casino without KYC": [
      { slug: "no-kyc", name: "casino without KYC", nameRu: "казино без KYC" },
    ],
    "casino without identification": [
      { slug: "no-identification", name: "casino without identification", nameRu: "казино без идентификации" },
    ],
    "casino without identity check": [
      { slug: "no-checks", name: "casino without identity check", nameRu: "казино без проверки личности" },
    ],
    "casino without identity confirmation": [
      { slug: "no-identity-request", name: "casino without identity confirmation", nameRu: "казино без подтверждения личности" },
    ],
    "withdrawal without verification": [
      { slug: "withdrawal-no-verification", name: "withdrawal without verification", nameRu: "вывод без верификации" },
      { slug: "fast-withdrawal", name: "fast withdrawal without verification", nameRu: "быстрый вывод без верификации" },
      { slug: "withdrawal-no-kyc-limit", name: "withdrawal without KYC limit", nameRu: "вывод без лимита KYC" },
      { slug: "same-wallet-withdrawal", name: "same wallet withdrawal without verification", nameRu: "вывод на тот же кошелёк без верификации" },
      { slug: "no-document-payments", name: "payments without documents", nameRu: "платежи без документов" },
    ],
    "bookmaker without verification": [
      { slug: "sportsbook-no-verification", name: "sportsbook without verification", nameRu: "спортбук без верификации" },
      { slug: "bookmaker-no-verification", name: "bookmaker without verification", nameRu: "букмекер без верификации" },
    ],
  };

  var ALIAS = {
    "bez-verifikacii": "no-verification",
    "bez-verificacii": "no-verification",
    "bez-verification": "no-verification",
    "bez-verki": "no-verification",
    "kazik-bez-verki": "no-verification",
    "kaz-bez-verki": "no-verification",
    "kazino-bez-verki": "no-verification",
    "no-verify": "no-verification",
    "no-verificatio": "no-verification",
    "net-verificacii": "no-verification",
    "net-verifikacii": "no-verification",
    "ne-trebuet-verifikacii": "no-verification",
    "ne-nuzni-documenty": "no-documents",
    "ne-nuzhny-dokumenty": "no-documents",
    "ne-trebuet-documenty": "no-documents",
    "ne-trebuet-dokumenty": "no-documents",
    "no-doc": "no-documents",
    "no-docs": "no-documents",
    "no-document": "no-documents",
    "bez-dokov": "no-documents",
    "bez-dockov": "no-documents",
    "kaz-bez-dokov": "no-documents",
    "kazik-bez-dokov": "no-documents",
    "bez-dokumentov": "no-documents",
    "bez-documentov": "no-documents",
    "bez-pasporta": "no-documents",
    "kaz-bez-pasporta": "no-documents",
    "kazik-bez-pasporta": "no-documents",
    "no-passport": "no-documents",
    "bez-kyc": "no-kyc",
    nokyc: "no-kyc",
    "bez-selfie": "no-selfie",
    "bez-selfy": "no-selfie",
    "no-selfy": "no-selfie",
    "no-indentification": "no-identification",
    "no-id": "no-identification",
    "bez-identifikacii": "no-identification",
    "bez-proverok": "no-checks",
    "bez-proverki": "no-checks",
    "bez-zaprosa-lichnosti": "no-identity-request",
    "vyvod-bez-verki": "withdrawal-no-verification",
    "vyvod-bez-dokov": "withdrawal-no-verification",
    "no-verify-withdrawal": "withdrawal-no-verification",
    "no-doc-withdrawal": "withdrawal-no-verification",
    "anonimnaya-registraciya": "no-documents",
    "anonymous-registration": "no-documents",
    "vyvod-bez-verifikacii": "withdrawal-no-verification",
    "bystryj-vyvod": "fast-withdrawal",
    "krypto-vyvod": "withdrawal-no-verification",
    "crypto-withdrawal": "withdrawal-no-verification",
    "vyvod-bez-limita-kyc": "withdrawal-no-kyc-limit",
    "vyvod-v-usdt": "same-wallet-withdrawal",
    "usdt-withdrawal": "same-wallet-withdrawal",
    "kriptovalyuta": "no-document-payments",
    cryptocurrency: "no-document-payments",
    bitcoin: "no-document-payments",
    usdt: "same-wallet-withdrawal",
    ethereum: "no-document-payments",
    "elektronnye-koshelki": "no-document-payments",
    "e-wallets": "no-document-payments",
    "card-withdrawal": "same-wallet-withdrawal",
    "wallet-withdrawal": "same-wallet-withdrawal",
    "bookmaker-without-verification": "bookmaker-no-verification",
    "bukmeker-bez-verifikacii": "bookmaker-no-verification",
    "bukmeker-bez-verki": "bookmaker-no-verification",
    "bukmeker-bez-kyc": "bookmaker-no-verification",
    "bukmeker-bez-dokumentov": "bookmaker-no-verification",
    "sportsbook-without-verification": "sportsbook-no-verification",
    "sportbuk-bez-verifikacii": "sportsbook-no-verification",
    "stavki-na-sport-bez-verifikacii": "sportsbook-no-verification",
    "stavki-bez-kyc": "sportsbook-no-verification",
    sloty: "no-verification",
    slots: "no-verification",
    "live-kazino": "no-verification",
    "live-casino": "no-verification",
    ruletka: "no-verification",
    roulette: "no-verification",
    blackjack: "no-verification",
    crash: "no-verification",
    "welcome-bonus": "no-verification",
    "no-deposit-bonus": "no-verification",
    "no-bonuses": "no-verification",
    "no-wagering": "no-verification",
    "no-welcome-bonus": "no-verification",
    "play-without-bonuses": "no-verification",
    freespiny: "no-verification",
    "free-spins": "no-verification",
    keshbek: "no-verification",
    cashback: "no-verification",
    bezdepozit: "no-verification",
  };

  var MAX = 4;
  var BY_SLUG = {};
  var CAT_SLUGS = {};
  Object.keys(BY_CAT).forEach(function (cat) {
    BY_CAT[cat].forEach(function (t) {
      BY_SLUG[t.slug] = t;
      CAT_SLUGS[t.slug] = true;
    });
  });

  function slugify(s) {
    return String(s || "")
      .trim()
      .toLowerCase()
      .replace(/ё/g, "е")
      .replace(/[^a-z0-9а-я]+/gi, "-")
      .replace(/^-+|-+$/g, "");
  }

  function resolveId(raw) {
    var s = String(raw || "").trim();
    if (!s) return "";
    var low = s.toLowerCase();
    if (ALIAS[low]) return ALIAS[low];
    if (BY_SLUG[s]) return s;
    if (BY_SLUG[low]) return low;
    var sl = slugify(s);
    if (ALIAS[sl]) return ALIAS[sl];
    if (BY_SLUG[sl]) return sl;
    return sl;
  }

  function mergeUserTags(list) {
    (list || []).forEach(function (t) {
      if (!t) return;
      var slug = resolveId(t.slug || t.id || t.name) || slugify(t.name);
      var name = String(t.name || "").trim() || slug;
      if (!slug) return;
      if (!BY_SLUG[slug]) {
        BY_SLUG[slug] = { slug: slug, name: name, user: true };
      } else if (!CAT_SLUGS[slug] && name) {
        BY_SLUG[slug].name = name;
      }
    });
  }

  function loadUserTags() {
    return fetch("data/tags.json?t=" + Date.now())
      .then(function (r) {
        if (!r.ok) return [];
        return r.json();
      })
      .then(function (d) {
        mergeUserTags(Array.isArray(d) ? d : []);
        return d;
      })
      .catch(function () {
        return [];
      });
  }

  function mergeSearchTags(data) {
    if (!data || typeof data !== "object") return;
    Object.keys(data).forEach(function (cat) {
      if (!BY_CAT[cat]) BY_CAT[cat] = [];
      (data[cat] || []).forEach(function (t) {
        if (!t || !t.slug) return;
        var slug = String(t.slug).trim();
        if (!slug) return;
        var name = String(t.name || "").trim() || slug;
        var nameEn = String(t.nameEn || t.name_en || "").trim();
        var item = { slug: slug, name: name, nameEn: nameEn, search: true };
        if (!BY_SLUG[slug]) {
          BY_SLUG[slug] = item;
          BY_CAT[cat].push(item);
        } else {
          BY_SLUG[slug].name = name;
          if (nameEn) BY_SLUG[slug].nameEn = nameEn;
          BY_SLUG[slug].search = true;
        }
      });
    });
  }

  function loadSearchTags() {
    return fetch("data/search-tags.json?t=" + Date.now())
      .then(function (r) {
        if (!r.ok) return {};
        return r.json();
      })
      .then(function (d) {
        mergeSearchTags(d);
        return d;
      })
      .catch(function () {
        return {};
      });
  }

  function loadAllTags() {
    return Promise.all([loadUserTags(), loadSearchTags()]);
  }

  function isSearchTag(slug) {
    var t = BY_SLUG[resolveId(slug)];
    return !!(t && t.search);
  }

  function allKeywords() {
    return allTags().filter(function (t) {
      return t.search;
    });
  }

  function fromName(name) {
    var n = String(name || "").trim();
    if (!n) return null;
    var slug = resolveId(n) || slugify(n);
    if (!slug) return null;
    if (BY_SLUG[slug] && BY_SLUG[slug].name) {
      return { slug: slug, name: BY_SLUG[slug].name, kind: "name" };
    }
    return { slug: slug, name: n, kind: "name" };
  }

  function isCategorySlug(slug) {
    return !!CAT_SLUGS[resolveId(slug)];
  }

  function parseTagSlugs(raw) {
    if (Array.isArray(raw)) {
      return raw
        .map(function (x) {
          if (!x) return "";
          if (typeof x === "object") return String(x.slug || x.id || x.name || "").trim();
          return String(x).trim();
        })
        .filter(Boolean)
        .map(resolveId)
        .filter(Boolean);
    }
    return String(raw || "")
      .split(",")
      .map(function (x) {
        return x.trim();
      })
      .filter(Boolean)
      .map(resolveId)
      .filter(Boolean);
  }

  function tagName(slug, lang) {
    var id = resolveId(slug);
    var t = BY_SLUG[id];
    if (!t) return id || slug;
    if (w.NC_TAG_I18N) {
      return w.NC_TAG_I18N.localizeTag(
        {
          slug: id,
          name: t.nameRu || t.name,
          nameEn: t.nameEn || t.name,
          search: t.search,
        },
        lang
      );
    }
    if (lang && String(lang).toLowerCase().indexOf("ru") === 0 && t.nameRu) return t.nameRu;
    return t.name || id;
  }

  function tagHref(slug) {
    var lang = "ru";
    try {
      lang = new URLSearchParams(location.search).get("lang") || "ru";
    } catch (e) {}
    var id = resolveId(slug);
    return (
      "index.html?id=" +
      encodeURIComponent(id) +
      "&lang=" +
      encodeURIComponent(lang)
    );
  }

  function tagsForCategory(catName) {
    return BY_CAT[catName] || [];
  }

  function allTags() {
    var out = [];
    var seen = {};
    Object.keys(BY_SLUG).forEach(function (slug) {
      if (seen[slug]) return;
      seen[slug] = true;
      out.push(BY_SLUG[slug]);
    });
    return out;
  }

  w.NC_TAGS = {
    MAX: MAX,
    byCat: BY_CAT,
    bySlug: BY_SLUG,
    alias: ALIAS,
    slugify: slugify,
    resolve: resolveId,
    parse: parseTagSlugs,
    name: tagName,
    href: tagHref,
    forCategory: tagsForCategory,
    fromName: fromName,
    isCategory: isCategorySlug,
    loadUserTags: loadUserTags,
    loadSearchTags: loadSearchTags,
    loadAllTags: loadAllTags,
    mergeUserTags: mergeUserTags,
    mergeSearchTags: mergeSearchTags,
    isSearch: isSearchTag,
    keywords: allKeywords,
    all: allTags,
  };
})(window);