const { flow: pipe, tap } = require('lodash/fp')

// const curry = (fn, ...args) => {
//   if (fn.length <= args.length) {
//     return fn(...args)
//   } else {
//     return (...more) => curry(fn, ...args, ...more)
//   }
// }

// const tap = curry((fn, x) => {
//   fn(x)
//   return x
// })

const trace = label => {
  return tap(x =>
    console.log(`>>> ${label} Output:  ${JSON.stringify(x, null, 2)}`)
  )
}

const a = value => value + 1
const b = value => value + 2
const c = value => value + 4

const fn = pipe(
  a,
  trace('a'),
  b,
  trace('b'),
  c,
  trace('c')
)

const input = 0
const res = fn(input)
console.log({ res })
