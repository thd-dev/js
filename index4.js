// Create a function that counts how many times it was called.

function func() {
  let count = 0;
  return function innerFunc() {
    count++;
    console.log(count);
  };

  //   innerFunc(count);
}
func();
func();
func();
func();
func();
func();
