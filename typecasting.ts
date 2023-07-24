//type casting;A straightforward way to cast a variable is using the as keyword, which will directly change the type of the given variable.
let x: unknown = 'hello';
console.log((x as string).length);
console.log(x as string);
