// Nymbo's offline helper: the game page is fetched fresh when online (so updates arrive) and kept for offline;
// sounds, the 3D engine and fonts are kept after the first time they're used
const C = 'nymbo-1794634344';
self.addEventListener('install', e => { e.waitUntil(caches.open(C).then(c => c.addAll(['./', 'manifest.webmanifest', 'icons/icon-192.png'])).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== C).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => { const r = e.request; if (r.method !== 'GET') return; const u = new URL(r.url);
  if (u.origin === location.origin && (r.mode === 'navigate' || u.pathname.endsWith('/') || u.pathname.endsWith('.html'))) {
    e.respondWith(fetch(r).then(res => { const cp = res.clone(); caches.open(C).then(c => c.put(r, cp)); return res; }).catch(() => caches.match(r).then(m => m || caches.match('./')))); return; }
  if (u.origin === location.origin || /cdn\.jsdelivr\.net|fonts\.(googleapis|gstatic)\.com/.test(u.host)) {
    e.respondWith(caches.match(r).then(m => m || fetch(r).then(res => { if (res.ok || res.type === 'opaque') { const cp = res.clone(); caches.open(C).then(c => c.put(r, cp)); } return res; }))); } });
