import { config, env } from '@brixtol/rollup-utils';
import { defineConfig as Rollup } from 'rollup';
import { terser } from 'rollup-plugin-terser';
import commonjs from '@rollup/plugin-commonjs';
import filesize from 'rollup-plugin-filesize';
import ts from 'rollup-plugin-typescript2';
import typescript from 'typescript';

export default Rollup(
  {
    input: 'src/index.ts',
    output: [
      {
        format: 'cjs',
        file: config.output.cjs,
        exports: 'named',
        sourcemap: env.is('dev', 'inline')
      },
      {
        format: 'esm',
        file: config.output.esm,
        exports: 'named',
        sourcemap: env.is('dev', 'inline'),
        preferConst: true
      }
    ],
    plugins: env.if('dev')(
      [
        ts({ useTsconfigDeclarationDir: true, typescript }),
        commonjs()
      ]
    )(
      [
        terser({ ecma: 2016, compress: { passes: 5 } }),
        filesize()
      ]
    )
  }
);
