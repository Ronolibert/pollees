require('babel-register')

global.navigator = { userAgent: 'all' }

const express = require('express')
const React = require('react')
const { renderToString } = require('react-dom/server')
const { StaticRouter } = require('react-router')
const _ = require('lodash')
const fs = require('fs')
const PORT = 10000
const baseTemplate = fs.readFileSync('./index.html')
const template = _.template(baseTemplate)
const App = require('./src/App').default

const server = express()

server.use('/public', express.static('./public'))
server.use((req, res) => {
  const context = {}
  const body = renderToString(
    React.createElement(StaticRouter, {location: req.url, context: context},
      React.createElement(App)
    )
  )

  res.write(template({body: body}))
  res.end()
})

console.log('listening on port', PORT)
server.listen(PORT)
