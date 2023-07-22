//arrays demos
var arr1 = [];
arr1.push("MUHAMMAD USMAN");
console.log(arr1[0]);
//readonly keyword
var arr2 = ["MUHAMMAD USMAN"];
console.log(arr2[0]);
//arr2.push("new");//give error because readonly.
//without readonly.
var numbers = [1, 2, 3]; // inferred to type number[]
numbers.push(5); // no error
// comment line below out to see the successful assignment
//numbers.push("2"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
var head = numbers[3]; // no error
console.log(head);
