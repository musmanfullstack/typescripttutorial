//enums define for group of constants
enum enumSample1{
    web,
    mobile,
    blockchain,
    typescript
}
let developer1=enumSample1.typescript;
console.log(developer1);
//numberic enums: You can set the value of the first numeric enum and have it auto increment from that:
enum enumnumericSample{
    web=1,
    mobile,
    blokchain,
    typescript
}
console.log(enumnumericSample.blokchain);

//fully initilized enums
enum fullyinitilized{
    web=9000,
    mobile=90888,
    blockchain=780009,
    typescript=90812345
}
console.log(fullyinitilized.typescript);

//string enums
enum stringEnumSample{
    web="web developer",
    mobile="mobile app developer",
    blockchain="blockchain developer",
    typescript="typescript developer",
}
console.log(stringEnumSample.blockchain);