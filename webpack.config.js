const path = require('path');
const webpack = require('webpack');

module.exports = {
    devtool: '#eval-source-map',
    entry: [
        process.env.NODE_ENV==='production' ? './src/lib/index' : './src/main.js'
    ],
    output: {
        path: path.join(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'vue-plugin.js',
        libraryTarget: 'umd',
        library: 'vue-plugin',
        umdNamedDefine: true
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel-loader', 'eslint-loader'],
                exclude: /node_modules/,
                include: __dirname
            },
            {
                test: /\.vue$/,
                loader: ['vue-loader', 'eslint-loader']
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: '[name].[ext]?[hash]'  
                }
              }
        ]
    },
    resolve: {
        extensions: ['*', '.ts', '.vue', '.js'],
        modules: [path.resolve(__dirname, "src"), "node_modules"],
        alias: {
          'vue$': 'vue/dist/vue.esm.js'
        }
    },
    resolveLoader: {
        modules: [path.join(__dirname, './node_modules')]
    },
    devServer: {
        historyApiFallback: true,
        port: 9000,
        inline: true,
        hot: true
    },
    performance: {
        hints: false
    }
};

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map'
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ])
}