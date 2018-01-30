import {} from 'dotenv/config';
import express from 'express';
import cors from 'cors';
import path from 'path';

const server = express();
const assets = path.join(__dirname, '../client/src/');
const port = process.env.PORT;

server.listen(port);
// disable for global requires since airbnb doesn't like them being in a block
if (process.env.NODE_ENV === 'development') {
  /* eslint-disable */
  const config = require('../webpack.dev.config.js');
  const compiler = require('webpack')(config);
  server.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
  }));
  server.use(require('webpack-hot-middleware')(compiler));
  /* eslint-enable */
}

server.use(express.static(assets));
server.use(cors);
