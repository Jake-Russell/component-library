import packageJson from './package.json' with { type: 'json' };

import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import terser from '@rollup/plugin-terser';

import { InjectStylesheetImport } from './config/rollupUtils.js';

export default {
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