import esbuild from 'rollup-plugin-esbuild';
import dts from 'rollup-plugin-dts';

const bundle = (config) => ({
  ...config,
  external: (id) => !/^[./]/.test(id)
});

export default [
  {
    plugins: [dts()],
    input: 'src/ui/index.ts',
    output: {
      format: 'es',
      file: 'dist/ui.d.ts'
    }
  },
  {
    plugins: [dts()],
    input: 'src/contexts/index.ts',
    output: {
      format: 'es',
      file: 'dist/contexts.d.ts'
    }
  },
  bundle({
    plugins: [esbuild()],
    input: 'src/ui/index.ts',
    output: [
      {
        format: 'cjs',
        file: 'dist/cjs/ui/index.js'
      },
      {
        format: 'es',
        file: 'dist/esm/ui/index.js'
      }
    ]
  }),
  bundle({
    plugins: [esbuild()],
    input: 'src/contexts/index.ts',
    output: [
      {
        format: 'cjs',
        file: 'dist/cjs/contexts/index.js'
      },
      {
        format: 'es',
        file: 'dist/esm/contexts/index.js'
      }
    ]
  })
];
