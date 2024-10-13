// Practice of fundamentals 

const profile = {
  users: [
    {
      name: "AIB",
      birthday: "08,10,2007",
      age: function() {
        let birth = (this.birthday);
        console.log(birth);
      }
    }
  ]
}
// console.log(typeof profile.users[0].age);