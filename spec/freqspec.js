var WordFreq = require('../wordfrequenter.js');
var list = ['esp', 'jtruant', 'sup'];
var Words = new WordFreq(list);

describe("Make the app", function () {
	it("Words should be an instance of WordFreq", function () {
		expect(Words instanceof WordFreq).toBe(true);
	});
});

describe("Get Test", function () {
	it("Words.get()", function () {
		expect(Words.get('thomas')).not.toBe(true);
	});
});

describe("Get List", function () {
	it("List should return a list of Word objects", function() {
		expect(Words.list().length).toBe(3); // from list /\
	});
});

describe("Set -> Add a new entry", function () {
	it("Should add an entry", function () {
		expect(Words.set('hay')).not.toBeDefined();
	});
	it("Should still be an instance of WordFreq", function () {
		expect(Words instanceof WordFreq).toBe(true);
	});
	it("Should return a result after .get('hay')", function () {
		expect(Words.get('hay')['word']).toEqual('hay');
	});
});
