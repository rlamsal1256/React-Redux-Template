const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        main: './src/js/index.js',
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    devtool: 'source-map',
    watch: true,
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader'],
        }, {
            test: /\.(jpe?g|png|gif|svg)$/i,
            loader: 'url-loader?limit=65536',
        }, {
            test: /\.ico$/i,
            loader: 'file-loader?name=[name].[ext]',
        }, {
            test: [/\.css$/, /\.scss$/],
            use: [
                'style-loader',
                'css-loader',
                'postcss-loader',
                'sass-loader',
            ],
        }],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/html/index.html',
            filename: 'index.html',
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV),
            },
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [
            'src/js',
            'node_modules',
        ],
    },
};
