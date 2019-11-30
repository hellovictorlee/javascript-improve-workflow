const arrayChunk = (array, num) => {
  if (array.length === 0) {
    return [];
  }
  return [array.slice(0, num)].concat(
    arrayChunk(array.slice(num, array.length), num)
  );
};

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newArray = arrayChunk(array, 3);
console.log(newArray);

