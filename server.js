const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const port = 3000;
const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);

// Tell express 2 use the webpack-dev-middleware and use
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
}));

// Serve the files on port 3000.
app.listen(port, function () {
    console.log(`Example app listening on port ${port}!\n`);
});
