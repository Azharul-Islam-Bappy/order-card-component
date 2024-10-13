// Combined Learning 1 
// function and conditional statement 

function calculateArea(width=5,length=10) {
  return width*length;
}
switch (calculateArea()) {
  case (30):
    console.log("Area is less than 30");
    break;
    console.log("Area is greater than 30");
  case (30):
    break;
  case calculateArea():
    console.log("equal");
    break;
}