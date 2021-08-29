const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: {
        main: {import: './index.jsx', dependOn: 'vendor'},
        vendor: ['react', 'react-dom']
    },
    optimization: {
        splitChunks: {chunks: 'all'}
    },
    output: {
        filename: '[name].app.js',
        path: path.resolve(__dirname, '../')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            }
        ]
    },
    resolve: {
        modules: ['node_modules'],
        extensions: ['*', '.js', '.jsx']
    }
};

