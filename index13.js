// ques 13 map for an array

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

arr.map((val, index, array) => {
  console.log(
    `${index}${
      index === 1 ? "st" : index === 2 ? "nd" : index === 3 ? "rd" : "th"
    } value of ${array} is ${val}`
  );
});
