/* global describe, beforeEach, it */

'use strict'

var should = require('should')
var aku = require('..')

function noop () {
  console.log('noop invoked')
}

function asyncNoop () {
  console.log('asyncNoop invoked')
}

function exception () {
  console.log('exception invoked')
  throw new Error('Something bad happens')
}

function asyncException (cb) {
  console.log('asyncException invoked')
  return cb(new Error('Something bad happens'))
}

var count = 0
function incrementCounter () { ++count }
function decrementCounter () { --count }

describe('aku', function () {
  beforeEach(function () {
    count = 0
  })

  describe('sync', function () {
    it('invoke handler', function () {
      var fn = aku(noop, incrementCounter)
      fn()
      count.should.be.equal(1)
    })

    it('invoke error handler', function () {
      var fn = aku(exception, incrementCounter, decrementCounter)
      ;(function () { fn() }).should.throw()
      count.should.be.equal(-1)
    })
  })

  describe('async', function () {
    it('invoke handler', function (done) {
      var fn = aku(asyncNoop, incrementCounter)
      fn(function (err) {
        count.should.be.equal(1)
        done(err)
      })
    })

    it('invoke error handler', function (done) {
      var fn = aku(asyncException, incrementCounter, decrementCounter)
      fn(function (err) {
        count.should.be.equal(-1)
        done()
      })
    })
  })
})
