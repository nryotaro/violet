const base = require('./webpack.config.base')
const { merge } = require('webpack-merge')


const main = merge(base[0], {
})
console.log(main)
/*
const renderer = webpackMerge(base.renderer, {
    watch: true,
    module: {
        rules: [
            {
                loader: 'ts-loader',
                options: {
                    configFile: 'webpack.tsconfig.dev.json'
                }
            }
        ]
    }
})

*/
module.exports = [main]