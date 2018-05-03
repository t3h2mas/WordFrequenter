const expect = require('chai').expect
const WordFreq = require('../wordfrequenter.js')

let Words
const list = ['foo', 'bar', 'baz']

describe('WordFreq', function () {
    beforeEach(() => {
        Words = new WordFreq(list)
    })
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
        it('should be sorted, most to least, by count', function() {
            Words.set('foop')
            Words.set('foop')
            Words.set('foop')

            Words.set('doop')
            Words.set('doop')
            Words.set('doop')
            Words.set('doop')
            Words.set('doop')

            const list = Words.list()

            // shoutout: https://gist.github.com/yorkie/7959685#gistcomment-2309147
            const isSorted = list.map(x => x.count).every((val, i, arr) => !i || (val <= arr[i-1]))
            expect(isSorted).to.equal(true)
        })
    })
    describe('.set', function () {
        it('should add a word with a count of 1', function () {
            expect(Words.set('ni')).to.deep.equal({word: 'ni', count: 1})
        })
        it('should increment the count of a word when set twice', function() {
            Words.set('ni')
            expect(Words.set('ni').count).to.equal(2)
        })
    })
})