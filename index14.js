// ques 14 filter for an array

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

// const customFilter = arr.filter((val, index, arr) => {
//   return { val, index, arr };
// });

Array.prototype.customFilter = function (callback) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};

console.log(arr.customFilter((num) => num % 3 === 0));
