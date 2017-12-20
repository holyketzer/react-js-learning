require('babel-core/register');

const fs = require('fs.extra');
const webpack = require('webpack');
const config = require('./production.js').default;

webpack(config, function(_error, stats) {
  const manifest = stats.toJson().assetsByChunkName;
  fs.writeFile('webpack-manifest.json', JSON.stringify(manifest));
});
