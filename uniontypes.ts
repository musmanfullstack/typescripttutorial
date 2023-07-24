//Union types are used when a value can be more than a single type.

function printcode(code: string|number){
    console.log(`code is ${code}.`)
  }
  printcode(786);
  printcode("786");
