const pipe = (...fns) => input => {
  return fns.reduce((chain, fn) => chain.then(fn), Promise.resolve(input));
};

const trace = label => {
  return tap(x =>
    console.log(`>>> ${label}:\n${JSON.stringify(x, null, 2)}`)
  );
};

const curry = (fn, ...args) => {
  if (fn.length <= args.length) {
    return fn(...args);
  } else {
    return (...more) => curry(fn, ...args, ...more);
  }
};

const tap = curry((fn, x) => {
  fn(x);
  return x;
});

const runTest = input => {
  const a = value => new Promise(resolve => resolve(value + 1));
  const b = value => new Promise(resolve => resolve(value + 2));
  const c = value => new Promise(resolve => resolve(value + 4));

  const fn = pipe(
    trace("input"),
    a,
    trace("a"),
    b,
    trace("b"),
    c,
    trace("c")
  );
  return fn(input);
};

module.exports = {
  pipe,
  trace,
  runTest
};
