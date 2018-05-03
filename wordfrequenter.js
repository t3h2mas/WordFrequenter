const _ = require('underscore')

const valOrZero = val => (val || 0)

function WordFreq(start = []) {
	this.vals = start.reduce((acc, cur) => {
		acc[cur] = valOrZero(acc[cur]) + 1
		return acc
	}, {})
}

WordFreq.prototype.set = function(word) {
	const nextValue = valOrZero(this.vals[word]) + 1
	this.vals = Object.assign({}, this.vals, {[word]: nextValue})
	
	// return the word and it's count
	return {word, count: nextValue}
}

WordFreq.prototype.get = function(word) {
	return this.vals[word]
		   ? {word, count: this.vals[word]} 
		   : undefined
}

WordFreq.prototype.list = function () {
	return Object.entries(this.vals)
				 .sort((x, y) => x[1] < y[1])
				 .map(entry => ({word: entry[0], count: entry[1]}))
}

module.exports = WordFreq
