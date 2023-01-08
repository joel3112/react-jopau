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
    input: 'src/**/*.ts',
    output: {
      format: 'es',
      file: 'dist/index.d.ts'
    }
  },
  bundle({
    plugins: [
      alias({
        '@/components/(.*)$': 'src/$1'
      }),
      esbuild()
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
