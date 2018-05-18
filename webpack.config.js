var config = {
    context: __dirname + '/src',
    // mode: 'development',
    entry: './app.js',
    output: {                     // output folder
        path: __dirname + '/public',           // folder path
        filename: 'bundle.js'     // file name
    },
    devtool: "source-map", // any "source-map"-like devtool is possible
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'raw-loader'
                }
            },
            {
                test: /\.scss$/,
                use:  [{
                    loader: "style-loader", // creates style nodes from JS strings
                    options: {
                        sourceMap: true
                    }
                }, {
                    loader: "css-loader", // translates CSS into CommonJS
                    options: {
                        sourceMap: true
                    }
                }, {
                    loader: "sass-loader",
                    options: {
                        "includePaths": [
                            require('path').resolve(__dirname, 'node_modules')
                          ],
                        sourceMap: true
                    }    
                }]
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/'
                    }
                }]
            }
        ]

    }
}
module.exports = config;
