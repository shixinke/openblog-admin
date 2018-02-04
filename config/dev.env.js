'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_BASE_URL: '"http://openblog.com/admin"',
  UPLOAD_PREVIEW_URL: '"http://openblog.com/"',
  COOKIE_DOMAIN : '".openblog.com"'
})
