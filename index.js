'use strict'

var asyncify = require('async/asyncify')
var apply = require('async/apply')

function aku (fn, handler, errHandler) {
  fn = asyncify(fn)

  function proxy (cb) {
    apply(fn, arguments)(function (err) {
      if (err) {
        if (cb) {
          if (errHandler) errHandler(err)
          return cb(err)
        }

        if (errHandler) {
          errHandler(err)
          throw err
        }
      }
      handler.apply(handler, arguments)
      if (cb) return cb(null, arguments)
    })
  }

  return proxy
}

module.exports = aku
