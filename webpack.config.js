const path = require('path');
const webpack = require('webpack');

const isProduction = process.env.WEBPACK_MODE === 'production';

const config = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        bundle: './js/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
    resolve: {
        modules: [path.resolve(__dirname, 'node_modules')],
        extensions: ['.js'],
    },
    mode: isProduction ? 'production' : 'development',
};

module.exports = config;
