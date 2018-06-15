const yaml = require('js-yaml')
const fs = require('fs')
const { resolve } = require('./resolve')
const { render } = require('./render')
const Canvas = require('canvas')

try {
  const meme = yaml.safeLoad(fs.readFileSync('tests/meme2.yaml', 'utf8'))
  const resolved = resolve(meme)
  // console.log('resolved: ',resolved)
  const canvas = new Canvas()
  render(resolved, canvas).then(() => {
    fs.writeFileSync('out.png', canvas.toBuffer())
  })
} catch (error) {
  console.log(error)
}
