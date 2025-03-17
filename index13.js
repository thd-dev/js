// ques 13 map for an array

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

// const customMap = arr.map((val, index, array, thisArg) => {
//   return {
//     val,
//     index,
//     array,
//     thisArg,
//   };
// });

Array.prototype.customMap = function (callback) {
  let result = [];
  for (i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};

console.log(arr.customMap((num) => num * 2));
