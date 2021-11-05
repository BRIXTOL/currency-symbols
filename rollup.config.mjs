import { config, env, rollup, plugin } from '@brixtol/rollup-config';
import typescript from 'typescript';

export default rollup(
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
        plugin.ts2({ useTsconfigDeclarationDir: true, typescript }),
        plugin.commonjs()
      ]
    )(
      [
        plugin.terser({ ecma: 2016, compress: { passes: 5 } }),
        plugin.filesize()
      ]
    )
  }
);
