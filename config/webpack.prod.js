const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const paths = require('./paths');
const common = require('./webpack.common');

const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
    entry: {
        // Split vendor code into separate bundles
        vendor: ['react', 'react-dom'],
        app: {
            import: paths.appIndexJs,
            dependOn: "vendor",
        },
    },
    devtool: 'source-map',
    mode: 'production',
    // Set the name of our JS bundle using a chuckhash
    // (e.g. '5124f5efa5436b5b5e7d_app.js')
    // Location where built files will go.
    output: {
        filename: '[chunkhash]_[name].js',
        path: paths.appBuild,
        publicPath: '/',
        clean: true,
    },
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
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, "css-loader"
                ]
            },
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