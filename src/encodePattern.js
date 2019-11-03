const moment = require('moment')
const pattern = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'

const encode = string =>
  string
    .split('')
    .filter(char => pattern.indexOf(char) !== -1)
    .reduce((accum, char) => accum * pattern.length + pattern.indexOf(char), 0)

const decode = num => {
  const len = pattern.length
  let str = ''
  // eslint-disable-next-line no-restricted-syntax
  while (num >= 1) {
    const reminder = num % len
    const char = pattern[reminder]
    str = char.concat(str)
    // eslint-disable-next-line no-param-reassign
    num = (num - reminder) / len
  }
  return str
}

const num = encode('ABC1')
console.log(num)

const ss = decode(num)
console.log(ss)

console.log(moment())
