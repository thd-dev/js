function a() {
  var x = 10;
  function b() {
    console.log(x);
  }
  return b;
}
const c = a();
c();
