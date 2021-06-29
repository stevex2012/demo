

require('esbuild').build({
  entryPoints: ['./src/main.jsx', './src/app.jsx', './node_modules/react/index.js'],
  bundle: false,
  // outfile: 'out1.js',
  outdir: 'dist',
  // splitting: true,
  // format: 'esm',
}).catch(() => process.exit(1))