import esbuild from 'rollup-plugin-esbuild';
import dts from 'rollup-plugin-dts';

const bundle = (config) => ({
  ...config,
  external: (id) => !/^[./]/.test(id)
});

const exportProps = () => {
  return {
    name: 'export-props',
    renderChunk(code) {
      const propsRegex = /(.*)type (.*)Props =(.*)/g;
      const props = [];
      let match;
      while ((match = propsRegex.exec(code)) !== null) {
        props.push(`${match[2]}Props`);
      }
      return `
        ${code}
export { ${props.join(', ')} };
      `;
    }
  };
};

export default [
  {
    plugins: [dts(), exportProps()],
    input: 'src/ui/index.ts',
    output: {
      format: 'es',
      file: 'dist/ui.d.ts'
    }
  },
  {
    plugins: [dts(), exportProps()],
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
