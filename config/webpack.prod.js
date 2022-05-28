const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');

module.exports = merge(common, {
    devtool: 'source-map',
    mode: 'production',
    plugins: [
        // Uglify to minify your JavaScript
        new MiniCssExtractPlugin({
            filename: "assets/css/[name].[contenthash:8].css",
            chunkFilename: "assets/css/[name].[contenthash:8].chunk.css"
        }),
        // Set process.env.NODE_ENV to production
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production'),
            },
        }),
        new WebpackManifestPlugin({
            fileName: 'asset-manifest.json',
        })
    ],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader, // inject CSS to page
                    },
                    {
                        loader: 'css-loader', // translates CSS into CommonJS modules
                        options: { importLoaders: 2 }, // specify how many loaders should be enabled before 
                    },
                    {
                        loader: 'postcss-loader', // Run post css actions
                        options: {
                            postcssOptions: {
                                ident: 'postcss',
                                plugins: () => [
                                    require('postcss-flexbugs-fixes'),
                                    require('postcss-preset-env')({
                                      autoprefixer: {
                                        flexbox: 'no-2009'
                                      },
                                      stage: 3
                                    })
                                ],
                                sourceMap: true
                            }
                        }
                    },
                    {
                        loader: 'sass-loader', // compiles Sass to CSS
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }
        ],
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    parse: {
                        // We want terser to parse ecma 8 code. However, we don't want it
                        // to apply minification steps that turns valid ecma 5 code
                        // into invalid ecma 5 code. This is why the `compress` and `output`
                        ecma: 8,
                    },
                    compress: {
                        ecma: 5,
                        warnings: false,
                        inline: 2,
                    },
                    mangle: {
                        // Find work around for Safari 10+
                        safari10: true,
                    },
                    output: {
                        ecma: 5,
                        comments: false,
                        ascii_only: true,
                    }
                },
                // Use multi-process parallel running to improve the build speed
                parallel: true,
            }),
            new CssMinimizerPlugin(),
        ],
    },
});