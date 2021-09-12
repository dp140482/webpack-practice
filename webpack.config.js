const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/main.js',
    mode: 'development',
    output: {
        filename: 'main.bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 9000,
    },
    module: {
        rules: [{
            test: /\.(sa|sc|c)ss$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }, {
            test: /\.(png|jpe?g|gif)$/i,
            use: [{
                loader: 'img-optimize-loader',
                options: {
                    compress: {
                        mode: 'high',
                        webp: true,
                        gifscale: true,
                        disableOnDevelopment: false
                    }
                }
            }]
        }, {
            test: /\.mp(3|4)$/,
            use: 'file-loader'
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html')
        }),
    ]
}