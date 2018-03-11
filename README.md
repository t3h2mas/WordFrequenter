WordFrequenter
=============

JavaScript word frequency
----------------------

Inspired by Python's DefaultDict, WordFrequenter provides an object to count the frequency of words

## install
npm: `npm i --save wordfrequenter`

yarn: `yarn add wordfrequenter`

## usage
```
const Freq = require('wordfrequenter')

const testWords = 'this is a cool test string this is cool cool cool'

const wf = new Freq(testWords.split(' '))

wf.set('string')
console.dir(wf.get('cool'))
console.dir(wf.list())
```

results in

```
Word { word: 'cool', count: 4 }
[ Word { word: 'a', count: 1 },
  Word { word: 'test', count: 1 },
  Word { word: 'this', count: 2 },
  Word { word: 'is', count: 2 },
  Word { word: 'string', count: 2 },
  Word { word: 'cool', count: 4 } ]
```

### run test
`npm test`
