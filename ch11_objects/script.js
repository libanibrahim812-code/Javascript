//If I want to register two people, each one assigned module

// let firstName = 'Liban';
// let lastName = 'Ali';
// let age = 25,

// let firstName = 'Omar';
// let lastName = 'Gacal';
// let age = 24;

//must make objects because it is related and is about one person:

// let person1 = {
//   firstName: "Liban",
//   lastName: "Ali",
//   age: 25,
// };

// let person2 = {
//   firstName: "Omar",
//   lastName: "Gacal",
//   age: 24,
// };

//Objects allow you to group data and make one thing represent that whole data.

//In objects, we always use key and value.
//•	Key is the thing on the left (e.g., firstName, lastName, age)
//•	Value is the thing on the right (e.g., Liban, Gacal, 25, 24)

//Keys and values are separated by a colon or full colon(:).

// If I console it:
// console.log(person1);
// Output: { firstName: 'Liban', lastName: 'Ali', Age: 25 }
// What about if I need lastName of that person only?
// We will use dot notation for accessing:
// console.log(person1.lastName);
// Output: Ali
// How do I identify an object?
// An object is identified by curly brackets { }.
// Create an empty object:
// let person3 = { };
// console.log(person3);
// Output: { }
// You can re-assign it (Adding properties):
// person3.firstName = "Ahmed";
// person3.lastName = "Dini";
// person3.Age = 36;

// console.log(person3);
// // Output: { firstName: 'Ahmed', lastName: 'Dini', Age: 36 }

// person3.talk = function () {
//   console.log(this.firstName + " is talking");

//   console.log(person3.talk());
// };

// tusale markaa heesto 10 qof waa inaa dhisaa class
// Using classes to create objects
// class Person {
//   constructor(firstName, lastName, age, isMarried, friends) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.isMarried = isMarried;
//     this.friends = friends;
//   }
//   fullName() {
//     return this.firstName + " " + this.lastName;
//   }
// }

// let person1 = new Person("Ahmed", "Dini", 42, true, ["Farah", "Jama"]);
// let person2 = new Person("Liban", "ibrahim", 42, true, ["ahmed", "oamr"]);
// let person3 = new Person("Omar", "gacal", 42, true, ["liabn", "abukar"]);

// console.log(person1.fullName());
// console.log(person2.fullName());
// console.log(person3.fullName());
