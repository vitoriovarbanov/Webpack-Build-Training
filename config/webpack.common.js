// webpack-common-config.js
// This file will contain configuration data that
// is shared between development and production builds.
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require('path');
const paths = require('./paths');

module.exports = {
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
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
};