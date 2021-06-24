require('esbuild').build({
  entryPoints: ['app.jsx'],
  bundle: true,
  outfile: 'out.js',
  sourcemap: true,
  
}).catch(() => process.exit(1))