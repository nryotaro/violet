import path from 'path'
import CopyPlugin from 'copy-webpack-plugin'

const resolve = {
    extensions: ['.tsx', '.ts', '.js'],
}

const output = {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
}

export function createMainConfig(configFile: string) {
    return {
        entry: './src/main.ts',
        target: 'electron-main',
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: 'ts-loader',
                    options: {
                        configFile
                    },
                    exclude: /node_modules/,
                },
            ],
        },
        resolve,
        output: {
            filename: 'main.js',
            path: path.resolve(__dirname, 'dist'),
        },
    }
}


export function createRendererConfig(configFile: string) {
    return {
        entry: './src/renderer.tsx',
        target: 'electron-renderer',
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: 'ts-loader',
                    exclude: /node_modules/,
                    options: {
                        configFile
                    },
                },
                {
                    test: /\.html$/,
                    loader: 'html-loader',
                },
                {
                    test: /\.css$/,
                    use: [
                        "style-loader",
                        "css-loader",
                    ]
                }
            ],
        },
        resolve,
        output: {
            filename: 'renderer.js',
            path: path.resolve(__dirname, 'dist'),
        },
        plugins: [
            new CopyPlugin({
                patterns: [
                    { from: 'src/index.html' },
                    { from: 'src/styles.css' },
                ]
            })
        ]
    }
}