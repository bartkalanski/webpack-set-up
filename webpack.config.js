 const HtmlWebpackPlugin = require("html-webpack-plugin");
 const MiniCssExtractPlugin = require("mini-css-extract-plugin")
 module.exports = {
     module: {
         rules: [{
                 test: /\.js$/,
                 exclude: /node_modules/,
                 use: {
                     loader: "babel-loader"
                 }
             },
             {
                 test: /\.html$/,
                 use: [{
                     loader: "html-loader",
                     options: { minimize: true }
                 }]
             },
             {
                 test: /\.(png|svg|jpg|gif)$/,
                 use: [
                     'file-loader'

                 ]
             },
             {
                 test: /\.css$/i,
                 use: ['style-loader', 'css-loader'],
             },

         ]
     },
     plugins: [
         new HtmlWebpackPlugin({
             template: "./src/index.html",
             filename: "./index.html"
         }),
         new MiniCssExtractPlugin({

         })
     ]
 }