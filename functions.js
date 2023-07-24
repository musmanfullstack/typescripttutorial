//TypeScript has a specific syntax for typing function parameters and return values.
//function with return type
// the `: number` here specifies that this function returns a number
// function getTime(): number {
//     return new Date().getTime();
//   }
function getTime() {
    //return new Date().getTime();
    return 786;
}
console.log(getTime());
//funciton with void return type
function sampleFun1() {
    console.log("BISMILLAH");
}
sampleFun1();
//function with parameters
function multiplicationfun(a, b) {
    return a * b;
}
var result = multiplicationfun(9, 8);
console.log(result);
