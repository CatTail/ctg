var should = require('should')
var generators = require('..')
var debug = require('debug')('ctg:test')
var fixtures = require('fixreader')({handler: JSON.parse})
var fileFixtures = require('fixreader')()

describe('Common Test Generator', function() {
    describe('casperjs', function() {
        it('should handle command in spec', function() {
            var generate = generators.casperjs
            should(generate(fixtures.spec)).equal(fileFixtures.casperjs.spec)
        })
    })
})