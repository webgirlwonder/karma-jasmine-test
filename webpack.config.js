module.exports = {
    mode: 'development',
    devtool: 'none',
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
      ],
    },
    externals: {
      request: {
        commonjs: 'request',
        commonjs2: 'request',
      },
      os: {
        commonjs: 'os',
        commonjs2: 'os',
      },
      process: 'process',
    },
  };