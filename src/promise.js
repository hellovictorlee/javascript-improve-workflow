// setTimeout
const wait = time =>
  new Promise((resolve, reject) => setTimeout(resolve, time))

// inside then should be a callback function which return promise
wait(3000)
  .then(() => new Promise(resolve => resolve({ foo: 'foo', bar: 'bar' })))
  .then(a => a)
  .then(
    b =>
      new Promise(resolve => {
        console.log('running...')
        resolve(`${JSON.stringify(b, null, 2)} wrapped`)
      })
  )
  .then(console.log)

// inside then should be a callback function which return promise
// function inside then will be wrapped as promise
wait(1000)
  .then(() => ({ foo: 'foo', bar: 'bar' }))
  .then(a => a)
  .then(b => {
    console.log('running...')
    return `${JSON.stringify(b, null, 2)} wrapped as promise`
  })
  .then(console.log)

wait(6000)
  .then(() => ({ foo: 'foo', bar: 'bar' }))
  .then(a => a)
  .then(() => {
    throw new Error('foo')
  })
  .then(b => {
    console.log('running...')
    return `${JSON.stringify(b, null, 2)} wrapped as promise`
  })
  .then(console.log)
  .catch(e => {
    console.log(e)
    return 'after error can run then'
  })
  .then(console.log)

const throwError = () => {
  throw new Error('bar')
}
new Promise((resolve, reject) => {
  resolve('foo')
})
  .then(a => {
    console.log(a)
    throwError()
  })
  .catch(err => console.log(`====wrap====\n${err}\n====wrap====`))
