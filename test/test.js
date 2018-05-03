'use strict'

const test = require('ava')
const WordFreq = require('../wordfrequenter.js')

const bootstrapWords = () => new WordFreq(['foo', 'bar', 'baz'])

test('should handle both arrays and strings as input', t => {
    const fromStr = new WordFreq('foo bar baz')
    const fromArr = new WordFreq(['foo', 'bar', 'baz'])

    t.deepEqual(fromStr, fromArr)
})
test('should throw when not passed a string or array on initialization', t => {
    t.throws(() => new WordFreq(1336))
})
test('.get should not find a word it was not initialized with', t => {
    const Words = bootstrapWords()
    t.is(Words.get('ham'), undefined)
})
test('.get should return the correct word & count', t => {
    const Words = bootstrapWords()
    const fooWord = Words.get('foo')
    t.is(fooWord['word'], 'foo')
    t.is(fooWord['count'], 1)
})
test('.list should have the correct length', t => {
    const Words = bootstrapWords()
    t.is(Words.list().length, 3)
})
test('.list should be sorted, most to least, by count', t => {
    const Words = bootstrapWords()
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
    t.truthy(isSorted)
})
test('.set should add a word with a count of 1', t => {
    const Words = bootstrapWords()
    t.deepEqual(Words.set('ni'), {word: 'ni', count: 1})
})
test('.set should increment the count of a word when set twice', t => {
    const Words = bootstrapWords()
    Words.set('ni')
    t.is(Words.set('ni').count, 2)
})