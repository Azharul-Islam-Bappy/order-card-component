// class Car {
//   isDriving() {
//     return true;
//   }
// }
// // Car.isDriving = function() {
// //   return false;
// // }
// const car1 = new Car();

// Car.prototype.isDriving = function() {
//   return false;
// }
let myObject = {};
Object.getPrototypeOf(myObject);    // Object.prototype

let myString = "";
Object.getPrototypeOf(myString);    // String.prototype

let myArray = [];
Object.getPrototypeOf(myArray);	    // Array.prototype

let myNumber = 1;
Object.getPrototypeOf(myNumber);    // Number.prototype
