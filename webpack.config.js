var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var StyleLintPlugin = require('stylelint-webpack-plugin');
var path = require('path');

module.exports = {
    context: path.resolve(__dirname, 'src') ,
    entry: {
        main: './js'
    },
    output: {
        path: './dev',
        filename: "js/[name].js"
    },
    devtool: "source-map",
    watchOptions: {
        aggregateTimeout: 300,
        poll: true
    },
    module:{
        preLoaders: [
            
        ],
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader!eslint-loader'
            },
            {
                test: /\.(scss|sass)$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader!sass-loader", { publicPath: '../' })
            },
            {
              test: /\.(jpe?g|png|gif|svg)$/,
              loader: "file-loader?name=[path][name].[ext]!img?minimize"
            },
            {
              test: /\.(eot|svg|ttf|woff|woff2)$/,
              loader: 'file?name=[path][name].[ext]'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("css/[name].css"),
        new StyleLintPlugin({syntax: 'scss'}),
        new HtmlWebpackPlugin({
            "template": "html!./src/index.html"
        }),
    ],
    imagemin: {
        gifsicle: { interlaced: false },
        jpegtran: {
          progressive: true,
          arithmetic: false
        },
        optipng: { optimizationLevel: 5 },
        pngquant: {
          floyd: 0.5,
          speed: 2
        },
        svgo: {
          plugins: [
            { removeTitle: true },
            { convertPathData: false }
          ]
        }
    }
}