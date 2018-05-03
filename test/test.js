var expect = require('chai').expect
var WordFreq = require('../wordfrequenter.js');
var list = ['esp', 'jtruant', 'sup'];
var Words = new WordFreq(list);

describe("Make the app", function () {
	it("Words should be an instance of WordFreq", function () {
		expect(Words instanceof WordFreq).to.equal(true);
	});
});

describe("Get Test", function () {
	it("Words.get()", function () {
		expect(Words.get('thomas')).not.to.equal(true);
	});
});

describe("Get List", function () {
	it("List should return a list of Word objects", function() {
		expect(Words.list().length).to.equal(3); // from list /\
	});
});

describe("Set -> Add a new entry", function () {
	it("Should add an entry, but return undefined", function () {
		expect(Words.set('hay')).to.equal(undefined);
	});
	it("Should still be an instance of WordFreq", function () {
		expect(Words instanceof WordFreq).to.equal(true);
	});
	it("Should return a result after .get('hay')", function () {
		expect(Words.get('hay')['word']).to.equal('hay');
	});
});
