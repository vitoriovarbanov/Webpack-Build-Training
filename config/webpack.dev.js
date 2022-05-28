const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

module.exports = merge(common, {
    mode: 'development',
    // devtool option controls if and how source maps are generated.
    // see https://webpack.js.org/configuration/devtool/
    // If you find that you need more control of source map generation,
    // see https://webpack.js.org/plugins/source-map-dev-tool-plugin/
    devtool: 'cheap-module-source-map',
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
        // Watcher doesn't work well if you mistype casing in a path so we use
        // a plugin that prints an error when you attempt to do this.
        // See https://github.com/facebook/create-react-app/issues/240
        new CaseSensitivePathsPlugin(),
    ],
    module: {
        rules: [
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
                        loader: 'sass-loader', // compiles Sass to CSS
                        options: {
                            sourceMap: true,
                        }, 
                    }
                ]
            }
        ],
    },
});