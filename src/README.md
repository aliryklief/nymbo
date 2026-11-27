# Nymbo source

- `nymbo.src.html` is the readable source of the game (edit this one).
- `node src/build.js` (needs `npm i terser@5`) writes:
  - `index.html`: the live page (same code, comments stripped, ~30% smaller download)
  - `test/index.html`: the readable page with a debug hook, served at /nymbo/test/
  - `version.txt`: the page's fingerprint. `sw.js` checks it so a device opens its saved copy instantly unless there's a new version.
- Always run the build before committing, so `version.txt` matches `index.html`.
