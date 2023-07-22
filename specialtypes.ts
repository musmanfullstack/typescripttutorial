//example of any kewyord.
let u=true;
//u="Muhammad Usman"; cant possible with out any kewyrod.

let newVariable:any =true;
newVariable="Muhammad Usman";
console.log(newVariable);

//example of unknown kewyord.
let unknownVariable:unknown =true;
unknownVariable="MUHAMMAD USMAN";
console.log(unknownVariable);

//Type: never; never effectively throws an error whenever it is defined.

//let x: never = true; // Error: Type 'boolean' is not assignable to type 'never'.

//Type: undefined & null ;undefined and null are types that refer to the JavaScript primitives undefined and null respectively.

let y: undefined = undefined;
let z: null = null;
console.log(y);
console.log(z);