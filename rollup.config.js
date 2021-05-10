import pkg from './package.json'
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'cjs',
      sourcemap: true
    }
  ],

  // this resolves to window in the browser, thus enabling caching in the antd code below
  // (!) `this` has been rewritten to `undefined`
  // https://rollupjs.org/guide/en/#error-this-is-undefined
  //     node_modules/antd/es/affix/index.js
  // 7: import _typeof from "@babel/runtime/helpers/esm/typeof";
  // 8:
  // 9: var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  context: 'this',

  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({
      exclude: '**/*.test.ts',
    }),
    babel({
      babelHelpers: 'runtime',
    }),
  ],
};
