// Nymbo's offline helper. The game page: fetched fresh when online (so updates arrive), but if the network takes more
// than 4 seconds the saved copy is used (and the fresh one saved for next time). The 3D engine, physics engine and fonts:
// kept in their own store that survives game updates (their web addresses carry their version, so they never change).
const C = 'nymbo-1795594829', LIB = 'nymbo-lib-1';
self.addEventListener('install', e => { e.waitUntil(caches.open(C).then(c => c.addAll(['./', 'manifest.webmanifest', 'icons/icon-192.png'])).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== C && k !== LIB).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
const keep = (name, r, res) => { if (res && (res.ok || res.type === 'opaque')) { const cp = res.clone(); caches.open(name).then(c => c.put(r, cp)); } return res; };
self.addEventListener('fetch', e => { const r = e.request; if (r.method !== 'GET') return; const u = new URL(r.url);
  if (u.origin === location.origin && (r.mode === 'navigate' || u.pathname.endsWith('/') || u.pathname.endsWith('.html'))) {
    const net = fetch(r.url, { cache: 'no-cache', credentials: 'same-origin' }).then(res => keep(C, r, res)); // (no-cache: always ask the website, never the phone's own web cache, so a new version shows at once)
    e.respondWith(new Promise(done => { let over = false; const fallback = () => caches.match(r).then(m => m || caches.match('./')).then(m => m || null);
      const t = setTimeout(() => fallback().then(m => { if (m && !over) { over = true; done(m); } }), 4000);
      net.then(res => { if (!over) { over = true; clearTimeout(t); done(res); } }).catch(() => fallback().then(m => { if (!over) { over = true; clearTimeout(t); done(m || Response.error()); } })); }));
    e.waitUntil(net.catch(() => {})); return; }
  if (/cdn\.jsdelivr\.net|fonts\.(googleapis|gstatic)\.com/.test(u.host)) { e.respondWith(caches.match(r).then(m => m || fetch(r).then(res => keep(LIB, r, res)))); return; }
  if (u.origin === location.origin) e.respondWith(caches.match(r).then(m => m || fetch(r).then(res => keep(C, r, res)))); });
