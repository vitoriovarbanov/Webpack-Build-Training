const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
   
}

module.exports = (webpackEnv) => {
    const isEnvDevelopment = webpackEnv === 'development';
    const isEnvProduction = webpackEnv === 'production';
    console.log(`mode is: ${process.env.NODE_ENV}`);

    return {
        mode: isEnvProduction ? 'production' : isEnvDevelopment && 'development',
        entry: path.resolve(__dirname, 'src', 'index.js'),
        output: {
          path: path.resolve(__dirname, 'dist'),
          filename: 'bundle.js'
        },
        devServer: {
            static: {
               directory: path.resolve(__dirname, 'dist')
            },
            open: true,
            port: 9000,
            hot: true,
        },
        module: {
            rules: [
              {
                test: /\.(jsx|js)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                  }
                }
              },
              {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
              },
              {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
              },
              {
				test: /\.s[ac]ss$/i,
				use: [{
					loader: 'style-loader', // inject CSS to page
				}, {
					loader: 'css-loader', // translates CSS into CommonJS modules
				}, {
					loader: 'postcss-loader', // Run post css actions
					options:{
						postcssOptions: {
               		plugins: {
								autoprefixer: {},
							}	
              		},	
					}
				}, {
					loader: 'sass-loader' // compiles Sass to CSS
				}]
			}
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
              template: './public/index.html',
              filename: './index.html',
              favicon: './public/favicon.ico'
            }),
            new MiniCssExtractPlugin({
                filename: '[name].bundle.css',
                chunkFilename: '[id].css'
              }),
        ],
    }
};