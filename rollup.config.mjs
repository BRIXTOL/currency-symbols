import { defineConfig as Rollup } from "rollup";
import { terser } from "rollup-plugin-terser";
import commonjs from "@rollup/plugin-commonjs";
import filesize from "rollup-plugin-filesize";
import ts from "rollup-plugin-typescript2";
import typescript from "typescript";
import { config } from "@brixtol/rollup-utils";

export default Rollup({
  input: "src/index.ts",
  output: [
    {
      format: "cjs",
      file: config.output.cjs,
      exports: "named",
      sourcemap: process.env.prod ? false : "inline",
    },
    {
      format: "esm",
      file: config.output.esm,
      exports: "named",
      sourcemap: process.env.prod ? false : "inline",
      preferConst: true,
    },
  ],
  plugins: [
    ts({
      useTsconfigDeclarationDir: true,
      typescript,
    }),
    commonjs(),
    terser({
      ecma: 2016,
      compress: {
        passes: 2,
      },
    }),
    filesize(),
  ],
});
