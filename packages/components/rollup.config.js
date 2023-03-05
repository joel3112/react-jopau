import path from 'path';
import esbuild from 'rollup-plugin-esbuild';
import dts from 'rollup-plugin-dts';
import glob from 'glob-promise';
import lodash from 'lodash';

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

const exportProps = () => {
  return {
    name: 'export-props',
    async generateBundle(options, bundle) {
      const files = await glob(`src/**/*-props.ts`, {});
      const types = files.map((file) => path.basename(file, path.extname(file)));
      const formatTypes = types.map((type) => lodash.startCase(String(type)).replace(/\s/g, ''));
      const exportTypes = `export { ${lodash.sortBy(formatTypes).join(', ')} };`;

      bundle['index.d.ts'].code += exportTypes;
    }
  };
};

export default [
  {
    plugins: [dts(), exportProps()],
    input: 'src/index.ts',
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
        file: 'dist/index.js'
      },
      {
        format: 'es',
        file: 'dist/index.mjs'
      }
    ]
  })
];
