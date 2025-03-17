// ques 19 Flatten Array:

const arr = [
  2,
  3,
  [4, 5, 6, [4, 5, [[8, 9, [], null, undefined, 8]]], "hi"],
  { x: 7, y: 8 },
  "hello",
];

const FlattenArr = (arr) => {
  let result = [];
  arr.forEach((element) => {
    // console.log(element, " ", typeof element);
    if (Array.isArray(element)) {
      result = result.concat(FlattenArr(element));
    } else if (element === null) {
      result.push(JSON.stringify(element));
    } else if (typeof element === "object") {
      result = result.concat(Object.values(element));
    } else {
      result.push(element);
    }
  });

  return result;
};

console.log(FlattenArr(arr));
