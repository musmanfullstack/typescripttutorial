//enums define for group of constants
var enumSample1;
(function (enumSample1) {
    enumSample1[enumSample1["web"] = 0] = "web";
    enumSample1[enumSample1["mobile"] = 1] = "mobile";
    enumSample1[enumSample1["blockchain"] = 2] = "blockchain";
    enumSample1[enumSample1["typescript"] = 3] = "typescript";
})(enumSample1 || (enumSample1 = {}));
var developer1 = enumSample1.typescript;
console.log(developer1);
//numberic enums: You can set the value of the first numeric enum and have it auto increment from that:
var enumnumericSample;
(function (enumnumericSample) {
    enumnumericSample[enumnumericSample["web"] = 1] = "web";
    enumnumericSample[enumnumericSample["mobile"] = 2] = "mobile";
    enumnumericSample[enumnumericSample["blokchain"] = 3] = "blokchain";
    enumnumericSample[enumnumericSample["typescript"] = 4] = "typescript";
})(enumnumericSample || (enumnumericSample = {}));
console.log(enumnumericSample.blokchain);
//fully initilized enums
var fullyinitilized;
(function (fullyinitilized) {
    fullyinitilized[fullyinitilized["web"] = 9000] = "web";
    fullyinitilized[fullyinitilized["mobile"] = 90888] = "mobile";
    fullyinitilized[fullyinitilized["blockchain"] = 780009] = "blockchain";
    fullyinitilized[fullyinitilized["typescript"] = 90812345] = "typescript";
})(fullyinitilized || (fullyinitilized = {}));
console.log(fullyinitilized.typescript);
//string enums
var stringEnumSample;
(function (stringEnumSample) {
    stringEnumSample["web"] = "web developer";
    stringEnumSample["mobile"] = "mobile app developer";
    stringEnumSample["blockchain"] = "blockchain developer";
    stringEnumSample["typescript"] = "typescript developer";
})(stringEnumSample || (stringEnumSample = {}));
console.log(stringEnumSample.blockchain);
