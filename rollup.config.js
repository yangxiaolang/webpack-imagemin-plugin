// import typescript from "rollup-plugin-typescript2";
import resolve from '@rollup/plugin-node-resolve';
import path from 'path';
export default {
  input: 'generatorWebp-webpack-plugin.js',
  output: [
    {
      file: path.resolve(__dirname, 'dist/generatorWebp-webpack-plugin.js'),
      format: 'cjs'
    }
  ],
  plugins: [ // 这个插件是有执行顺序的
    resolve({
      extensions: ['.js','.ts']
    }),
    // typescript({
    //   tsconfig: path.resolve(__dirname, 'tsconfig.json')
    // }),
  ]
}