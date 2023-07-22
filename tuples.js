//defining tuple
var tuple1;
//initilizing tuple
tuple1 = [5, true, "BISMILLAH"];
console.log(tuple1[0], tuple1[1], tuple1[2]);
//readonly tuple
var tuple2;
tuple2 = [9, false, "NEW"];
//no type safety next to 3+ index.
tuple2.push('somethingnew');
console.log(tuple2);
//thats why we use readyonly tuples.
var tuple3 = [6, true, "BISMILLAH"];
console.log(tuple3);
//tuple3.push("somethingnew");//show error, because its readonly.
//name tuples.
var tuple4 = [6.2, 9.83];
console.log(tuple4);
var tuple5 = [5, true, "Muhammad Usman"];
console.log(tuple5);
//destructring tuples
var tuple6 = [55.2, 41.3];
var n = tuple6[0], x = tuple6[1];
console.log(n, x);
