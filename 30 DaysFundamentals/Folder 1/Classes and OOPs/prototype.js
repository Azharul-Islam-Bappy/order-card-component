// prototype and __proto__


function example() {
  let Name = function(name) {
    this.name = name;
  }
}

example.Name = function(name) {
  this.name = name;
}

const me = Object.setPrototypeOf(example());

