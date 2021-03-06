const assert = require('assert')
const { loadSpec } = require('../renderer/parse')

try {
  loadSpec({})
} catch (error) {
  assert.strictEqual(error.message, 'Size is undefined')
}

let spec = loadSpec({
  size: '100x200',
})
assert.deepStrictEqual(spec, {
  version: 'latest',
  size: {
    width: 100,
    height: 200,
  },
})

spec = loadSpec({
  size: {
    width: 100,
    height: 200,
  },
})
assert.deepStrictEqual(spec, {
  version: 'latest',
  size: {
    width: 100,
    height: 200,
  },
})

spec = loadSpec({
  size: '100x200',
  foo: 'The quick brown fox jumps over the lazy dog',
})
assert.deepStrictEqual(spec, {
  version: 'latest',
  size: {
    width: 100,
    height: 200,
  },
  foo: {
    text: 'The quick brown fox jumps over the lazy dog',
    type: 'text',
    font: '60px Impact',
    textAlign: 'center',
    textBaseline: 'alphabetic',
    direction: 'ltr',
    color: 'white',
    transform: [],
    position: {
      x: 0,
      y: 0,
      z: 0,
    },
  },
})

spec = loadSpec({
  size: '100x200',
  foo: {
    text: 'The quick brown fox jumps over the lazy dog',
  },
})
assert.deepStrictEqual(spec, {
  version: 'latest',
  size: {
    width: 100,
    height: 200,
  },
  foo: {
    text: 'The quick brown fox jumps over the lazy dog',
    type: 'text',
    font: '60px Impact',
    textAlign: 'center',
    textBaseline: 'alphabetic',
    direction: 'ltr',
    color: 'white',
    transform: [],
    position: {
      x: 0,
      y: 0,
      z: 0,
    },
  },
})

spec = loadSpec({
  size: '100x200',
  bar: {
    image: 'http://some.url/image/path',
  },
})
assert.deepStrictEqual(spec, {
  version: 'latest',
  size: {
    width: 100,
    height: 200,
  },
  bar: {
    image: 'http://some.url/image/path',
    type: 'image',
    transform: [],
    position: {
      x: 0,
      y: 0,
      z: 0,
    },
    size: {
      width: undefined,
      height: undefined,
    },
  }
})

spec = loadSpec({
  size: '100x200',
  bar: {
    image: 'http://some.url/image/path',
    size: '30x40'
  },
})
assert.deepStrictEqual(spec, {
  version: 'latest',
  size: {
    width: 100,
    height: 200,
  },
  bar: {
    image: 'http://some.url/image/path',
    type: 'image',
    transform: [],
    position: {
      x: 0,
      y: 0,
      z: 0,
    },
    size: {
      width: 30,
      height: 40,
    },
  }
})

spec = loadSpec({
  size: '100x200',
  foo: 'The quick brown fox jumps over the lazy dog',
  bar: {
    image: 'http://some.url/image/path',
  },
  baz: 'Cwm fjord bank glyphs vext quiz',
})
assert.deepStrictEqual(spec, {
  version: 'latest',
  size: {
    width: 100,
    height: 200,
  },
  foo: {
    text: 'The quick brown fox jumps over the lazy dog',
    type: 'text',
    font: '60px Impact',
    textAlign: 'center',
    textBaseline: 'alphabetic',
    direction: 'ltr',
    color: 'white',
    transform: [],
    position: {
      x: 0,
      y: 0,
      z: 0,
    },
  },
  bar: {
    image: 'http://some.url/image/path',
    type: 'image',
    transform: [],
    position: {
      x: 0,
      y: 0,
      z: 0,
    },
    size: {
      width: undefined,
      height: undefined,
    },
  },
  baz: {
    text: 'Cwm fjord bank glyphs vext quiz',
    type: 'text',
    font: '60px Impact',
    textAlign: 'center',
    textBaseline: 'alphabetic',
    direction: 'ltr',
    color: 'white',
    transform: [],
    position: {
      x: 0,
      y: 0,
      z: 0,
    },
  },
})
