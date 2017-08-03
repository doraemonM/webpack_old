var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    devServer: {
        inline: true,
        port: 7777,
        contentBase: __dirname + '/public'
    },
    module:{
        loaders: [
            { //js부분
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'stage-0', 'react']
                }
            },
            { //sass부분
              test: /\.scss$/,
              loaders: ["style", "css", "sass"]
            }
        ]
    }
};
