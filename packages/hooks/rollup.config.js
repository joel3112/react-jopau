import esbuild from 'rollup-plugin-esbuild';
import dts from 'rollup-plugin-dts';

const bundle = (config) => ({
  ...config,
  external: (id) => !/^[./]/.test(id)
});

export default [
  {
    plugins: [dts()],
    input: 'src/index.ts',
    output: {
      format: 'es',
      file: 'dist/index.d.ts'
    }
  },
  bundle({
    plugins: [esbuild()],
    input: 'src/index.ts',
    output: [
      {
        format: 'cjs',
        file: 'dist/cjs/index.js'
      },
      {
        format: 'es',
        file: 'dist/esm/index.js'
      }
    ]
  })
];
