'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_BASE_URL: '"http://localhost:7000/admin"',
  UPLOAD_PREVIEW_URL: '"http://localhost:7000/"',
  COOKIE_DOMAIN : '"localhost"'
})
