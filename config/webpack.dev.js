const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');

const paths = require('./paths');
const common = require('./webpack.common');

module.exports = merge(common, {
    entry: [paths.appIndexJs],
    output: {
        path: paths.appBuild,
        filename: '[name].bundle.js',
        clean: true,
    },
    mode: 'development',
    // devtool option controls if and how source maps are generated.
    // see https://webpack.js.org/configuration/devtool/
    // If you find that you need more control of source map generation,
    // see https://webpack.js.org/plugins/source-map-dev-tool-plugin/
    devtool: 'eval',
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        open: true,
        port: 9000,
        hot: true,
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development'),
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    {
                        loader: 'style-loader', // inject CSS to page
                    },
                    {
                        loader: 'css-loader', // translates CSS into CommonJS modules
                    },
                    {
                        loader: 'postcss-loader', // Run post css actions
                        options: {
                            postcssOptions: {
                                plugins: {
                                    autoprefixer: {},
                                }
                            },
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        }, // compiles Sass to CSS
                    }
                ]
            }
        ],
    },
});