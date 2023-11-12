/* eslint-env node */

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    mode: 'development',  
    entry: './src/index.js',
    output: {
        filename: 'main.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        historyApiFallback: true,
        static: {
            directory: './dist/template', 
        },
        port: 8080,
        open: true,
        hot: true,
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            title: 'Development',
            template: './src/index.pug',
            filename: 'template/index.html',
        }),
        new ESLintPlugin({
            emitError: true,
            emitWarning: true,
            failOnError: true,
            failOnWarning: true,
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader, 
                        options: {
                            esModule: true,
                        }
                    }, 
                    'css-loader'
                ],
            },
            {
                test: /\.pug$/,
                use: [
                    {
                        loader: 'pug-loader',
                        options: {
                            pretty: true,
                        }
                    },
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['eslint-loader'],
                enforce: 'pre',
            },
        ],
    },
};
