const {
    resolve
} = require('path')

const GeneratorWebpWebpackPlugin = require('../dist/generatorWebp-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: resolve('index.js'),
    output: {
        path: resolve('dist'),
        filename: '[name][fullhash:3].js'
    },
    module: {
        rules: [{
            test: /\.jpg$/,
            use: 'file-loader'
        }]
    },
    plugins: [
        new GeneratorWebpWebpackPlugin()
    ]

}