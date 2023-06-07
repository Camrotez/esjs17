class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
class developer extends Person{
constructor(firstName, lastName, role){
  super(firstName,lastName)
  this.role=role
}

}

const devlhope= new developer("Mario", "Rossi", "Front-end");
// console.log(
//   developer.firstName + " " + developer.lastName + " " + developer.role
// );
 console.log(devlhope);