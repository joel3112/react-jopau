import * as path from 'path';
import esbuild from 'rollup-plugin-esbuild';
import multi from '@rollup/plugin-multi-entry';
import dts from 'rollup-plugin-dts';

const bundle = (config) => ({
  ...config,
  external: (id) => !/^[./]/.test(id)
});

const alias = (entries = {}) => {
  return {
    name: 'alias',
    transform(code, id) {
      let resolveCode = code;
      Object.entries(entries).forEach(([alias, relativePath]) => {
        const regex = new RegExp(alias, 'gmu');
        const absolutePath = path.join(process.cwd(), relativePath);
        const resolvePath = path.relative(path.dirname(id), absolutePath);

        if (regex.test(code)) {
          resolveCode = code.replace(regex, resolvePath);
        }
      });

      return resolveCode;
    }
  };
};

export default [
  {
    plugins: [dts(), multi()],
    input: ['src/ui/**/*.ts'],
    output: {
      format: 'es',
      file: 'dist/ui.d.ts'
    }
  },
  {
    plugins: [dts(), multi()],
    input: ['src/contexts/**/*.ts'],
    output: {
      format: 'es',
      file: 'dist/contexts.d.ts'
    }
  },
  bundle({
    plugins: [
      alias({
        '@/components/(.*)$': 'src/$1'
      }),
      esbuild()
    ],
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
