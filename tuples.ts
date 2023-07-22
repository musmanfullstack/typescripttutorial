//defining tuple
let tuple1:[number, boolean, string];
//initilizing tuple
tuple1=[5,true,"BISMILLAH"];
console.log(tuple1[0],tuple1[1],tuple1[2]);


//readonly tuple
let tuple2:[number,boolean,string];
tuple2=[9,false,"NEW"];
//no type safety next to 3+ index.
tuple2.push('somethingnew');
console.log(tuple2);
//thats why we use readyonly tuples.
let tuple3:readonly [number,boolean,string]=[6,true,"BISMILLAH"];
console.log(tuple3);
//tuple3.push("somethingnew");//show error, because its readonly.

//name tuples.
const tuple4:[x:number, y:number]=[6.2,9.83];
console.log(tuple4);

let tuple5:[a:number,b:boolean,s:string]=[5,true,"Muhammad Usman"];
console.log(tuple5);

//destructring tuples
const tuple6: [number, number] = [55.2, 41.3];
const [n, x] = tuple6;
console.log(n,x);