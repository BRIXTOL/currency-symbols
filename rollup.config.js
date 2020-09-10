import { terser } from 'rollup-plugin-terser'
import commonjs from '@rollup/plugin-commonjs'
import filesize from 'rollup-plugin-filesize'
import pkg from './package.json'

export default [
  {
    input: 'index.js',
    output: [
      {
        format: 'cjs',
        file: pkg.main,
        exports: 'auto',
        sourcemap: process.env.prod ? false : 'inline'
      },
      {
        format: 'es',
        file: pkg.module,
        sourcemap: process.env.prod ? false : 'inline',
        preferConst: true
      }
    ],
    plugins: [
      commonjs(),
      terser({
        ecma: 2016,
        compress: {
          passes: 2
        }
      }),
      filesize()
    ]
  }
]
