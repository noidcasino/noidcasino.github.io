const CACHE_NAME = "nc-cache-v1";
const urlsToCache = [
  "./",
  "./index.html",
  "./favicon.ico",
  "./css/index.css",
  "./tags.js",
  "./i18n.js",
  "./tag-i18n.js",
  "./clock.js",
  "./lang.js",
  "./play-cta.js",
  "./i/site.webmanifest"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) =>
      Promise.all(
        urlsToCache.map((url) => cache.add(url).catch(() => undefined))
      )
    ).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;
  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;
      return fetch(req).then((res) => {
        try {
          if (new URL(req.url).origin === self.location.origin && res && res.ok && res.type === "basic") {
            const copy = res.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(req, copy));
          }
        } catch (_) {}
        return res;
      });
    })
  );
});
