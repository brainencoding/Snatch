import typescript from 'rollup-plugin-typescript';
import uglify from 'rollup-plugin-uglify';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import filesize from 'rollup-plugin-filesize';
import replace from 'rollup-plugin-replace';

export default {
  entry: './main.ts',
  format: 'iife',
  dest: 'build/bundle.js',
  sourceMap: true,
  plugins: [
    replace({
      'process.env.NODE_ENV' : JSON.stringify('production'),
      './example': './example.tsx',
    }),
    nodeResolve({
      jsnext: true,
      main: true
    }),
    typescript({
      // Force usage of same version of typescript as the project:,
      typescript: require('typescript')
    }),
    uglify({sourceMap: true}),
    filesize(),
  ]
}
