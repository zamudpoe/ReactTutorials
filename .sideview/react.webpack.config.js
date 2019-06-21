module.exports = {
    mode: 'development',
    target: 'web',
    devtool: 'inline-cheap-module-source-map',
    resolve: {
        extensions: ['.js', '.jsx', '.css'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                exclude: /(bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                require('@babel/preset-env'),
                                { targets: { chrome: 61 } }
                            ],
                            require('@babel/preset-react')
                        ],
                        plugins: [
                            [
                                '@babel/plugin-proposal-decorators',
                                { legacy: true }
                            ],
                            'babel-plugin-transform-flow-strip-types',
                            'babel-plugin-transform-class-properties',
                            [
                                'babel-plugin-styled-components',
                                {
                                    ssr: false
                                }
                            ]
                        ]
                    }
                }
            },
            {
                test: /\.scss$/,
                exclude: /(bower_components)/,
                use: [
                    'style-loader', // creates style nodes from JS strings
                    'css-loader', // translates CSS into CommonJS
                    'sass-loader' // compiles Sass to CSS
                ]
            },
            {
                test: /\.css$/,
                // exclude: /(node_modules|bower_components)/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.react\.svg$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            // cacheDirectory: true,
                            presets: [require('@babel/preset-react')]
                        }
                    },
                    {
                        loader: '@svgr/webpack',
                        options: { babel: false, svgo: false }
                    }
                ]
            },
            {
                test: /\.(gif|png|wav|flac|mp3|jpe?g|svg|woff|woff2|ttf|eot)$/i,
                exclude: /\.react\.svg/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            context: './',
                            name: '[path][name].[ext]'
                        }
                    }
                ]
            }
        ]
    }
};
