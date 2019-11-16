// entry -> output
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {

    const isProduction = env === 'production';

    return {
        entry : './src/app.js',
        output : {
            path: path.join(__dirname, 'public', 'dist'),
            filename : 'bundle.js'
        },
        module : {
            rules: [{
                loader : 'babel-loader',
                test : /\.js$/,
                exclude : /node_modules/
            }, {
                test : /\.s?css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: (resourcePath, context) => {
                                return path.relative(path.dirname(resourcePath), context) + '/';
                            }
                        }
                    },
                    'css-loader',
                    'sass-loader'
                ]
            }]
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: 'styles.css'
            })
        ],
        devtool : isProduction ? 'source-map' : 'inline-source-map' ,
        devServer : {
            contentBase :  path.join(__dirname, 'public'),
            historyApiFallback: true,
            publicPath: '/dist/'
        },
        mode: isProduction ? 'production' : 'development'
    }

};


// loader
