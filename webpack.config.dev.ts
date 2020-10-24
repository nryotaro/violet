import { createMainConfig, createRendererConfig } from './webpack.config.base'
import { merge } from 'webpack-merge'
import webpack from 'webpack'

const tsConfigPath = 'tsconfig.json'
const developConfig: webpack.Configuration = {
    watch: true,
    mode: "development",
    devtool: "inline-source-map"
}

const mainConfig = merge(developConfig, createMainConfig(tsConfigPath))
const rendererConfig = merge(developConfig, createRendererConfig(tsConfigPath))

export default [mainConfig, rendererConfig]