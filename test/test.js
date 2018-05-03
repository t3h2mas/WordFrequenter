const expect = require('chai').expect
const WordFreq = require('../wordfrequenter.js')
const list = ['foo', 'bar', 'baz']
const Words = new WordFreq(list)

describe('WordFreq', function () {
    it('Words should be an instance of WordFreq', function () {
        expect(Words instanceof WordFreq).to.equal(true)
    })
    describe('.get', function () {
        it('should not find a word it was not initialized with', function () {
            expect(Words.get('ham')).to.equal(undefined)
        })
        it('should return the correct word & count', function () {
            const fooWord = Words.get('foo')
            expect(fooWord['word']).to.equal('foo')
            expect(fooWord['count']).to.equal(1)
        })
    })
    describe('.list', function () {
        it('should have the correct length', function() {
            expect(Words.list().length).to.equal(3) 
        })
    })
    describe('.set', function () {
        it('should add a word w/o returning a value', function () {
            expect(Words.set('hay')).to.equal(undefined)
        })
    })

})