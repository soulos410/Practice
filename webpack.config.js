const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const devServer = require("webpack-dev-server");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: '[name].bundle.js',
    },
    resolve: { extensions: ["*", ".js", ".jsx", "ts", "tsx"] },
    module: {
        rules: [
            { test: /\.ts$/, use: 'ts-loader' },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({ template: "./index.html" }),
    ],
    devServer: {
        contentBase: path.join(__dirname, "./dist"),
        host: "localhost",
        port: 3000,
        hotOnly: true
    },
};