# Mirador Tax — project notes

## Production build (important)
The live site loads **compiled `.js` files**, not the `.jsx` sources. Each page uses
production React (`react.production.min.js`) and plain `<script src="*.js">` tags — there is
**no in-browser Babel** anymore.

The `.jsx` files are the source of truth. **After editing any `.jsx`, recompile it to `.js`**
(Babel `presets: ['react']`) or the change will NOT appear on the site. Compile via run_script:

```js
function loadScript(src){return new Promise((r,j)=>{const s=document.createElement('script');s.src=src;s.onload=()=>r();s.onerror=()=>j();document.head.appendChild(s);});}
await loadScript('https://unpkg.com/@babel/standalone@7.29.0/babel.min.js');
const src = await readFile('FILE.jsx');
await saveFile('FILE.js', Babel.transform(src,{presets:['react'],filename:'FILE.jsx'}).code);
```

## Deployment
Static site → GitHub Pages. `index.html` is the homepage. `CNAME` holds `miradortax.com`.
`.nojekyll` keeps GitHub from processing files. No backend / serverless functions.
