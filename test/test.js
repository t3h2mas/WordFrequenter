const expect = require('chai').expect
const WordFreq = require('../wordfrequenter.js')
const list = ['esp', 'jtruant', 'sup']
const Words = new WordFreq(list)

describe("WordFreq", function () {
	it("Words should be an instance of WordFreq", function () {
		expect(Words instanceof WordFreq).to.equal(true)
	})
	describe(".get", function () {
		it("should not find a word it was not initialized with", function () {
			expect(Words.get('thomas')).not.to.equal(true)
		})
		it("should return the correct word value", function () {
			expect(Words.get('sup')['word']).to.equal('sup')
		})
	})
	describe(".list", function () {
		it("should have the correct length", function() {
			expect(Words.list().length).to.equal(3) 
		})
	})
	describe(".set", function () {
		it("should add a word w/o returning a value", function () {
			expect(Words.set('hay')).to.equal(undefined)
		})
	})

})