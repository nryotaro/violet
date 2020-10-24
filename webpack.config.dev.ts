import {createMainConfig, createRendererConfig } from './webpack.config.base'


const mainConfig = createMainConfig('tsconfig.dev.json')
const rendererConfig = createRendererConfig('tsconfig.dev.json')
export default [mainConfig, rendererConfig]