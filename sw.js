// Nymbo's offline helper.
// The game page (Ali 27 Nov: "make things load much much faster"): the page is about a megabyte to download, and it was
// downloaded again on every visit. Now a tiny note (version.txt, a few bytes) is checked first. If the game hasn't changed
// since last time, the copy already saved on this device opens at once; only when there's a new version is the page
// downloaded again (and saved). No connection at all: the saved copy is used.
// The 3D engine, physics engine and fonts are kept in their own store that survives game updates (their web addresses
// carry their version, so they never change). Pictures and sounds: saved the first time they're used.
const C = 'nymbo-1795772407', LIB = 'nymbo-lib-1', PAGE = 'nymbo-page-1';
self.addEventListener('install', e => { e.waitUntil(caches.open(C).then(c => c.addAll(['manifest.webmanifest', 'icons/icon-192.png'])).catch(() => {}).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== C && k !== LIB && k !== PAGE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
const keep = (name, r, res) => { if (res && (res.ok || res.type === 'opaque')) { const cp = res.clone(); caches.open(name).then(c => c.put(r, cp)); } return res; };
const within = (p, ms) => Promise.race([p, new Promise(r => setTimeout(() => r(null), ms))]);
const ROOT = new URL('./', self.registration.scope).pathname; // e.g. /nymbo/
async function gamePage(r) {
  const pc = await caches.open(PAGE), key = new Request(ROOT), saved = await pc.match(key), savedVer = saved && saved.headers.get('x-nymbo-ver');
  // 1) what's the newest version? (a few bytes; given up after 2.5 s on a bad connection)
  let ver = null; try { const v = await within(fetch(ROOT + 'version.txt?t=' + Date.now(), { cache: 'no-store' }), 2500); if (v && v.ok) ver = (await v.text()).trim(); } catch (_) {}
  // 2) the same as the saved copy (or no answer and we have one): open the saved copy straight away
  if (saved && (!ver || ver === savedVer)) return saved;
  // 3) a new version: download it, save it with its version, show it
  try { const res = await fetch(ROOT, { cache: 'no-cache', credentials: 'same-origin' });
    if (res.ok) { const body = await res.clone().blob(), h = new Headers(res.headers); if (ver) h.set('x-nymbo-ver', ver); h.delete('content-length'); h.delete('content-encoding'); await pc.put(key, new Response(body, { status: 200, headers: h })); }
    return res; } catch (_) { return saved || Response.error(); }
}
self.addEventListener('fetch', e => { const r = e.request; if (r.method !== 'GET') return; const u = new URL(r.url);
  if (u.origin === location.origin && r.mode === 'navigate' && (u.pathname === ROOT || u.pathname === ROOT + 'index.html')) { e.respondWith(gamePage(r)); return; }
  if (u.origin === location.origin && (r.mode === 'navigate' || u.pathname.endsWith('/') || u.pathname.endsWith('.html'))) { e.respondWith(fetch(r, { cache: 'no-cache' }).catch(() => caches.match(r))); return; } // (other pages, e.g. the test page: always fresh)
  if (u.pathname.endsWith('version.txt')) return;
  if (/cdn\.jsdelivr\.net|fonts\.(googleapis|gstatic)\.com/.test(u.host)) { e.respondWith(caches.match(r).then(m => m || fetch(r).then(res => keep(LIB, r, res)))); return; }
  if (u.origin === location.origin) e.respondWith(caches.match(r).then(m => m || fetch(r).then(res => keep(C, r, res)))); });
