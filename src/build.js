// readable source (src/nymbo.src.html) -> index.html (comments stripped) + test/index.html (readable + debug hook) + version.txt
const { minify } = require('terser') /* npm i terser@5 */; const fs = require('fs'), crypto = require('crypto');
const R = require('path').resolve(__dirname, '..') + '/'; const s = fs.readFileSync(R + 'src/nymbo.src.html', 'utf8');
const open = '<script type="module">', i = s.indexOf(open) + open.length, j = s.indexOf('</script>', i);
(async () => { const r = await minify(s.slice(i, j), { module: true, compress: false, mangle: false, format: { comments: false } });
  const out = s.slice(0, i) + '\n' + r.code + '\n' + s.slice(j); fs.writeFileSync(R + 'index.html', out);
  let t = s.slice(0, j) + '\nwindow.__ev = s => eval(s);\n' + s.slice(j); const h = t.indexOf('<head>') + 6; t = t.slice(0, h) + '<base href="../">' + t.slice(h); fs.writeFileSync(R + 'test/index.html', t);
  const ver = crypto.createHash('sha1').update(out).digest('hex').slice(0, 12); fs.writeFileSync(R + 'version.txt', ver + '\n');
  console.log('index.html', (out.length / 1024 | 0) + 'KB', 'version', ver); })().catch(e => { console.error('MINIFY FAILED', e); process.exit(1); });
