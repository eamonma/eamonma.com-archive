const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require("path")

module.exports = {
    entry: "./src/app.js",
    output: {
        path: path.join(__dirname, "./dist/public/"),
        filename: "bundle.js"
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        }, {
            test: /\.s?css$/,
            use: [
                "style-loader",
                "css-loader",
                "sass-loader"
            ]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            minify: {
                collapseWhitespace: true,
                removeComments: true
            }
        })
    ],
    mode: 'production'
};