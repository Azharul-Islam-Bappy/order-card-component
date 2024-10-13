// Switch Statements 
let name = "AIB";
switch (name) {
  case "Bappy": {
    console.log("Name is Bappy");
    break;
}
  case "AIB":{
    console.log("Name is AIB");
    break;
  }
  default :{
    console.log("Name is not matched")
    break;
  }
}

let msg = 404;
switch(msg) {
  case 200:
    console.log("Successful");
    break;
  case 404:
    console.log("Error Occured");
    break;
  default:
  console.log("No msg");
  break;
}
console.log("Statement Finished");