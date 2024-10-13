// Classes and Objects 

// Practice 
class employee{
  salary() {
    console.log("Salary is 50,000");
  }
}
class manager extends employee {
  work(){
    console.log('Manage People ');
  }
  
}

let alex = new employee();
let Jon = new employee();
let Albert = new manager();
console.log(alex.salary(),Jon.salary());


// Building Something 
class product{
  price(value) {
    this.value = value;
    console.log("The Price is " + value);
  }
  Color(color) {
    this.color = color;
    console.log("Color is " + color);
  }
  
}
class Device extends product{
  MODEL(model){
    this.model = model;
    console.log("Model Is " +model);
    
  }
  screenSize(size) {
    this.size = size;
    console.log("Screen Size: "+ size);
  }
}

let cloth = new product(); 
let bike = new product();
let laptop =  new Device();

