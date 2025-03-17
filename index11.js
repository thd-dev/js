// ques - 11 Higher order function

const higherOrderFucntion = (func, delay) => {
  return setTimeout(func, delay);
};

function func() {
  console.log("I'm a function..");
}

higherOrderFucntion(func, 2000);
