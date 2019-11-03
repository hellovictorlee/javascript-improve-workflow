const square = x => x * x

const map = (fn, lst) => {
  if (lst.length <= 0) {
    return []
  }
  return [fn(lst[0])].concat(map(fn, lst.slice(1, lst.length)))
}

const lst = [1, 2, 3]
console.log(map(square, lst))
