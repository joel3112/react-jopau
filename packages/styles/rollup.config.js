import esbuild from 'rollup-plugin-esbuild';
import dts from 'rollup-plugin-dts';
import copy from 'rollup-plugin-copy-merge';

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
    plugins: [
      esbuild(),
      copy({
        targets: [{ src: 'src/styles.css', dest: 'dist' }]
      })
    ],
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
