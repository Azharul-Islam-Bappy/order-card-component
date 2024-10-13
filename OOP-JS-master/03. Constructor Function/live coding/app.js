// Constructor functions in JavaScript are regular functions used with the new keyword to create and initialize objects with shared properties and methods. They act as blueprints for creating multiple instances of objects with the same structure and behavior.

// // CONSTRUCTOR FUNCTION
function CreatePeople(firstName, lastName, pl) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.pl = pl;
  this.inrto = function(){
    return `Hello i am ${this.firstName} ${this.lastName} and i am a huge fan of ${this.pl}`
  }
};

const nati = new CreatePeople("nati", "Jhon", "C")
console.log(nati.inrto())
// NEW KEYWORD:
// 1. First create empty object {}
// 2. Sets "this" to point to that object
// 3. We can omit the return statement using "new" keyword
      // EXAMPLE 2

function CreatePerson(fname, lname, plang) {
  this.fname = fname;
  this.lname = lname;
  this.plang = plang;
  this.intro = function(){
    return `i am ${this.fname} ${this.lname} and i love ${this.plang}`
  }
}
const nathan = new CreatePerson("nathan", "jhon", "python");
console.log(nathan.intro());
 


//  My codes       My codes       My codes
// Constructor Function 
function  Person(name, age, dob) {
  this.name = name;
  this.age = age;
  this.birthday = dob;
}
Person.prototype.intro = function () {
  return `Hi I'm ${this.name}. \n I'm ${this.age} year old. \n My birthday is on ${this.birthday}`;
}
const aib = new Person("AIB",17,"8 October 2007");
console.log(aib);
console.log(aib.intro());