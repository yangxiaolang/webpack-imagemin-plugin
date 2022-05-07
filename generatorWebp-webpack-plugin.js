const imagemin = require('imagemin-webp')
class GeneratorWebpWebpackPlugin {
    apply(compiler) {
        compiler.hooks.emit.tapAsync("processAssets", outputAssets)
    }
}

async function outputAssets(compilation, callback) {
    for (const key in compilation.assets) {
        if (!/\.jpg$/.test(key)) {
            continue
        }
        const webpOutput = await createWebp(compilation.assets[key])
        compilation.emitAsset(key.replace(/\.jpg$/, '.webp'), {
            source: () => webpOutput,
            size: () => webpOutput.length
        })
    }
    callback()
}

async function createWebp(buffer) {
    const output = await imagemin()(buffer._value)
    return output
}

export default GeneratorWebpWebpackPlugin