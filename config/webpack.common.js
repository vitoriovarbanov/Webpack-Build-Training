// This file will contain configuration data that
// is shared between development and production builds.
const path = require('path');
const paths = require('./paths');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const lifecycleEventDevMode = 'start';
const devEntry = paths.appIndexJs;
const prodEntry = {
    // Split vendor code into separate bundles
    vendor: ['react', 'react-dom'],
    app: {
        import: paths.appIndexJs,
        dependOn: "vendor",
    },
}
const isProd = process.env.npm_lifecycle_event !== lifecycleEventDevMode


module.exports = {
    entry: isProd ? prodEntry : devEntry,
    output: {
        path: paths.appBuild,
        filename: '[name].[chunkhash:8].bundle.js',
        publicPath: isProd ? '/Webpack-Build-Training/' : '/',
        clean: true,
        /* ...(isProd) && {
            assetModuleFilename: (pathData) => {
                console.log(pathData.filename)
                const filepath = path
                    .dirname(pathData.filename)
                    .split("/")
                    .slice(1)
                    .join("/");
                return `${filepath}/[name].[contenthash][ext][query]`;
            }
        }, */
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html',
            favicon: './public/favicon.ico'
        }),
        new BundleAnalyzerPlugin(),
    ],
    resolve: {
        // File extensions. Add others and needed (e.g. scss, json)
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        modules: ['node_modules'],
        // Aliases help with shortening relative paths
        // 'Components/button' === '../../../components/button'
        alias: {
            Components: path.resolve(paths.appSrc, 'components'),
            Containers: path.resolve(paths.appSrc, 'containers'),
            Utils: path.resolve(paths.appSrc, 'utils'),
        },
    },
    module: {
        rules: [
            {
                test: /\.(jsx|js|tsx|ts)$/,
                include: path.resolve(paths.appSrc),
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript']
                    }
                }
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                exclude: /node_modules/,
                type: 'asset/resource',
                generator: {
                    filename: "img/[name][ext][query]",
                },
            },
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                exclude: /node_modules/,
                type: 'asset/resource',
                generator: {
                    filename: "fonts/[name][ext][query]",
                },
            },
            {
                test: /\.css$/,
                use: [
                    isProd ? MiniCssExtractPlugin.loader : "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            url: false
                        },
                    }
                ]
            },
        ],
    },
};