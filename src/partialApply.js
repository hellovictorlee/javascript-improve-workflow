const partialApply = (fn, ...fixedArgs) => {
  return function (...remainingArgs) {
    return fn.apply(this, fixedArgs.concat(remainingArgs))
  }
}

const add = (a, b) => a + b
const add10 = partialApply(add, 10)
const actual = add10(5)
console.log(actual)
