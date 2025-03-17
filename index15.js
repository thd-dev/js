// ques 14 reduce for an array

const arr = [4, 2, 3, 4, 5, 6, 7, 8];

const customReduce = arr.reduce((acc, num) => acc * num, 1);

Array.prototype.customReduce = function (callback, initialValue) {
  let accomudator = initialValue !== undefined ? initialValue : this[0]; // 1
  let startIndex = initialValue !== undefined ? 0 : 1; // 0

  for (let i = startIndex; i < this.length; i++) {
    accomudator = callback(accomudator, this[i], i, this);
    // console.log(accomudator);
  }

  return accomudator;
};

console.log(
  arr.customReduce((acc, num) => acc * num),
  1
);
