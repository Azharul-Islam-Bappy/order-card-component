// DAY 1 :  Variables & DataTypes

// Note: Double ("") quotes are used to emphasize words

// String DataTypes
let name = "AIB"; // Anything between double or single quote is called a String
console.log(name); // outputs 'AIB'


// Number DataTypes
const num = 12; // any numbers is called Number DataTypes
const num2 = 8.5; // is also number DataTypes
console.log(num,num2); // outputs 12 and 8.5


// Boolean DataTypes
const bool = true; // Boolean DataTypes has two value "true" and "false" it basically means if anything is "true" or "false"
const bool2 = false;


// null DataTypes
// It's more like absence of any real value like "string","numbers","booleans" etc.
const value = null; // outputs null


// undefined DataTypes
// It's a default value assigned to a variable when declared and no value is being added 

let variable_ ; // outputs undefined


// Object DataTypes
// There are two types of Object DataTypes "Array" and "Object"

// Array
// Array is created using square brackets . It's a special DataTypes that could store different types of value 
let arrayData = ["apple","banana",45,98,true,false]; 
// outputs 0:apple
// 1:banana
// 2:45
// 3:98
// 4:true
// 5:false

// Objects
const person = {
  name: "AIB",
  age: 16,
  birthday: "08/10/2007",
  isAdult() {
    if (age >= 18) {
      return true;
    } else {
      return false;
    }
  }
}
console.log(person) // outputs "person" object 