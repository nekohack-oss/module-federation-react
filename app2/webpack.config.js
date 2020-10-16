const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack').container
    .ModuleFederationPlugin
const path = require('path')

module.exports = {
    mode: 'development',

    entry: './src/index',

    output: {
        publicPath: 'auto',
        assetModuleFilename: 'img/[name].[hash:7][ext]',
    },

    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },

    module: {
        rules: [
            {
                test: /bootstrap\.tsx$/,
                loader: 'bundle-loader',
                options: {
                    lazy: true,
                },
            },
            {
                test: /\.tsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        '@babel/preset-react',
                        '@babel/preset-typescript',
                    ],
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                type: 'asset/resource',
            },
        ],
    },

    plugins: [
        new ModuleFederationPlugin({
            name: 'app2',
            filename: 'remoteEntry.js',
            exposes: {
                './Button': './src/Button',
            },
            shared: ['react', 'react-dom'],
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],

    cache: {
        type: 'filesystem',
        buildDependencies: {
            config: [__filename]
        }
    },

    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 3002,
    },
}
