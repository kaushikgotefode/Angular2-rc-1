const testConfig = require('./webpack.common.config');

testConfig.devtool = 'inline-source-map';
testConfig.module.loaders = testConfig.module.loaders.concat(
    { test: /\.spec\.ts$/, loader: 'ts' }
);

module.exports = testConfig;