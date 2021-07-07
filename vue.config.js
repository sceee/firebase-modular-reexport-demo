// Declare root dirname globally
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

// eslint-disable-next-line no-underscore-dangle
global.__rootDirname = path.join(__dirname, 'dist')

// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const webpackmerge = require('webpack-merge')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultConfiguration = require('./vue-config/config.default')

const environmentConfigurationPath = `./vue-config/config.${process.env.NODE_ENV}.js`

const environmentConfiguration = fs.existsSync(environmentConfigurationPath)
  ? require(environmentConfigurationPath) // eslint-disable-line
  : {}

const config = webpackmerge.merge(defaultConfiguration, environmentConfiguration)

module.exports = config
