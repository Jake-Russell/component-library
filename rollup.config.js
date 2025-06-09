const packageJson = require('./package.json');
const peerDepsExternal = require('rollup-plugin-peer-deps-external');
const nodeResolve = require('@rollup/plugin-node-resolve').default;
const commonjs = require('@rollup/plugin-commonjs');
const typescript = require('@rollup/plugin-typescript');
const postcss = require('rollup-plugin-postcss');
const terser = require('@rollup/plugin-terser');
const { InjectStylesheetImport } = require('./config/rollupUtils.js');

module.exports = {
  input: 'src/index.ts',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    nodeResolve(),
    commonjs(),
    postcss({
      sourceMap: true,
      extract: true,
      modules: {
        generateScopedName: '[local]___[hash:base64:10]',
      },
    }),
    typescript({
      tsconfig: './tsconfig.json',
    }),
    InjectStylesheetImport(),
    terser(),
  ],
  external: ['react', 'react-dom'],
};
