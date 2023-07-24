//defining object types
var objCar = {
    type: "Ford",
    model: "raptor",
    year: 2023
};
console.log(objCar);
console.log(objCar.year);
//type interference
var obj2Car = {
    type: "Ford",
};
console.log(obj2Car.type);
obj2Car.type = "Hummer";
console.log(obj2Car.type);
//obj2Car.type=2022;//error
//opitional properties
// const obj3Car: { type: string, mileage: number } = { // Error: Property 'mileage' is missing in type '{ type: string; }' but required in type '{ type: string; mileage: number; }'.
//     type: "Toyota",
//   };
//   car.mileage = 2000;
//without error
var obj3Car = {
    type: "Toyota"
};
obj3Car.mileage = 2000;
console.log(obj3Car.mileage);
