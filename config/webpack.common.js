// This file will contain configuration data that
// is shared between development and production builds.
const path = require('path');
const paths = require('./paths');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const lifecycleEventDevMode = 'start';
const devEntry = paths.appIndexJs;
const prodEntry =  {
    // Split vendor code into separate bundles
    vendor: ['react', 'react-dom'],
    app: {
        import: paths.appIndexJs,
        dependOn: "vendor",
    },
}

module.exports = {
    entry: process.env.npm_lifecycle_event === lifecycleEventDevMode ? devEntry : prodEntry,
    output: {
        path: paths.appBuild,
        filename: '[name].[chunkhash:8].bundle.js',
        publicPath: process.env.npm_lifecycle_event === lifecycleEventDevMode ? '/' : '/Webpack-Build-Training/',
        clean: true,
        assetModuleFilename: (pathData) => {
            const filepath = path
              .dirname(pathData.filename)
              .split("/")
              .slice(1)
              .join("/");
            return `${filepath}/[name].[contenthash][ext][query]`;
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html',
            favicon: './public/favicon.ico'
        }),
        new BundleAnalyzerPlugin()
    ],
    resolve: {
        // File extensions. Add others and needed (e.g. scss, json)
        extensions: ['.js', '.jsx'],
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
                test: /\.(jsx|js)$/,
                include: path.resolve(paths.appSrc),
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                exclude: /node_modules/,
                type: 'asset/resource',
            },
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                exclude: /node_modules/,
                type: 'asset/resource',
            },
            {
                test: /\.css$/,
                use: [
                    process.env.npm_lifecycle_event === lifecycleEventDevMode ? "style-loader" : MiniCssExtractPlugin.loader, 
                    "css-loader"
                ]
            },
        ],
    },
};