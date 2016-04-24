'use strict'

var sliced = require('sliced')

var createProxy = {
  sync: function (fn, handler, errHandler) {
    function proxy () {
      try {
        fn.apply(fn, arguments)
        handler.apply(handler, arguments)
      } catch (err) {
        if (errHandler) {
          errHandler(err)
          throw err
        }
      }
    }
    return proxy
  },

  async: function (fn, handler, errHandler) {
    function proxy () {
      var proxyArgs = sliced(arguments)
      var cb = proxyArgs.pop()

      function invoke () {
        var args = sliced(arguments)
        // args[0] is callback err
        if (args[0]) {
          if (errHandler) errHandler(args[0])
        } else {
          handler.apply(handler, args.slice(1, args.length))
        }
        return cb.apply(cb, args)
      }

      proxyArgs.push(invoke)
      fn.apply(fn, proxyArgs)
    }

    return proxy
  }
}

module.exports = createProxy.async
module.exports.sync = createProxy.sync
