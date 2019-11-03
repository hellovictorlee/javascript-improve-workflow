const pipe = (...fns) => input =>
  fns.reduce((chain, fn) => chain.then(fn), Promise.resolve(input))

const trace = label => {
  return tap(x =>
    console.log(`>>> ${label} Output:  ${JSON.stringify(x, null, 2)}`)
  )
}

const curry = (fn, ...args) => {
  if (fn.length <= args.length) {
    return fn(...args)
  } else {
    return (...more) => curry(fn, ...args, ...more)
  }
}

const tap = curry((fn, x) => {
  fn(x)
  return x
})

const a = value => new Promise(resolve => resolve(value + 1))
const b = value => new Promise(resolve => resolve(value + 2))
const c = value => new Promise(resolve => resolve(value + 3))

const fn = pipe(
  a,
  trace('a'),
  b,
  trace('b'),
  c,
  trace('c')
)

const input = 0
fn(input).then(console.log)
