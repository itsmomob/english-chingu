/* ============================================================
   Service Worker — English Mastery Hub
   Strategy:
     - Precache the app shell (HTML, CSS, JS, registry, manifest)
     - Cache topic & grammar files on first fetch
     - Serve from cache first, fall back to network, fall back to index.html
   ============================================================ */

const CACHE = "emh-v4";  // was v3, v2, v1 — bump every time you change files
/* Only the shell — these MUST all exist */
const SHELL = [
  "./",
  "./index.html",
  "./style.css",
  "./app.js",
  "./manifest.json",
  "./data/registry.js",
  "./icon-192.png",
  "./icon-512.png",
];

/* ---------- INSTALL ---------- */
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => {
      // addAll() fails the whole install if one file 404s.
      // Fall back to adding files individually and logging failures.
      return Promise.all(
        SHELL.map((url) =>
          cache.add(url).catch((err) => {
            console.warn("[SW] Failed to precache:", url, err);
          })
        )
      );
    })
  );
  self.skipWaiting();
});

/* ---------- ACTIVATE ---------- */
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))
      )
    )
  );
  self.clients.claim();
});

/* ---------- FETCH ---------- */
self.addEventListener("fetch", (event) => {
  const { request } = event;

  // Only handle GET requests
  if (request.method !== "GET") return;

  // Don't cache cross-origin requests we can't control (fonts get cached by the browser)
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) return cached;

      return fetch(request)
        .then((response) => {
          // Don't cache non-OK responses
          if (!response || response.status !== 200 || response.type !== "basic") {
            return response;
          }
          const copy = response.clone();
          caches.open(CACHE).then((cache) => cache.put(request, copy));
          return response;
        })
        .catch(() => {
          // Network failed — try to serve index.html as a fallback for navigation requests
          if (request.mode === "navigate") {
            return caches.match("./index.html");
          }
        });
    })
  );
});