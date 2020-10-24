import { createMainConfig, createRendererConfig } from './webpack.config.base'
import { merge } from 'webpack-merge'
import webpack from 'webpack'

const tsConfigPath = 'tsconfig.prod.json'

const envConfig: webpack.Configuration = {
    mode: "production",
}
const mainConfig = merge(envConfig, createMainConfig(tsConfigPath))
const rendererConfig = merge(envConfig, createRendererConfig(tsConfigPath))

export default [mainConfig, rendererConfig]