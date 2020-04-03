const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const root = path.join(__dirname, 'app');
const dist = path.join(__dirname, 'build');

const ASSET_PATH = process.env.ASSET_PATH || '/';

const fs = require('fs');

module.exports = {
    entry: {
        app: path.join(root, '/app.js'),
    },

    output: {
        filename: '[name].js',
        path: dist,
        publicPath: ASSET_PATH,
    },

    devtool: 'inline-source-map',

    devServer: {
        contentBase: path.join(__dirname, 'app'),
        hot: true,
        inline: true,
        historyApiFallback: true,
        port: 8080,
        disableHostCheck: true,

        host: 'sandbox.dev',

        // mkcert -key-file key.key -cert-file cert.pem sandbox.dev *.sandbox.dev
        // mkcert - https://github.com/FiloSottile/mkcert
        // openssl - https://gist.github.com/pgilad/63ddb94e0691eebd502deee207ff62bd
        https: {
            key: fs.readFileSync('./key.pem'),
            cert: fs.readFileSync('./cert.pem'),
        },

        stats: {
            colors: true,
            assets: true,
            errors: true,
            errorDetails: true,
            cached: false,
            cachedAssets: false,
            hash: false,
            version: false,
            timings: false,
            chunks: false,
            chunkModules: false,
            chunkOrigins: false,
            modules: false,
            reasons: false,
            children: false,
            source: false,
            warnings: false,
            publicPath: false,
        },
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(root, 'index.html'),
        }),
    ],

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                    // { loader: 'postcss-loader' },
                ],
            },
        ],
    },
};
