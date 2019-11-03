// pipeline
const pipeline = (...validators) => defaultArgs =>
  validators.reduce(
    (chain, validator) => chain.then(validator),
    Promise.resolve(defaultArgs)
  )

const a = value => value + 1
const b = value => value + 2
const c = value => value + 4
pipeline(a, b, c)(0).then(console.log)
