import * as base from './webpack.config.base'
import webpackMerge from 'webpack-merge'


const main = webpackMerge(base.main, {
    watch: true,
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    configFile: 'webpack.tsconfig.dev.json'
                }
            }
        ]
    }
})
console.log(main.module)

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
