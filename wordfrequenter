var _ = require('underscore');


function Word(word) {
	word = word || '';
	this.word = word;
	_.defaults(this, {count: 1});
}

function WordFreq(start) {
	start = start || [];
	this.vals = [];
	// add any items from start into the list, we assume that
	// the list looks like ['word', ...] and counts will be defaulted
	start.forEach(function (word) {
		this.set(word)
	}, this);
}

// TODO: fix WordFreq -> Word
WordFreq.prototype.set = function(word) {
	found = this.get(word)
	if (!found) { // need to test for duplicates so we don't overwrite
		w = new Word(word);
		this.vals.push(w);
	} else {
		++found['count'];
	}
}

WordFreq.prototype.get = function(word) {
	var resp = _.find(this.vals, function(entry) { return entry['word'] == word; });
	return resp;
}

// TODO: fix sorting
WordFreq.prototype.list = function () {
	var resp = this.vals.sort(function (a, b) { return a['count'] > b['count']; });
	return resp;
}

module.exports = WordFreq;
