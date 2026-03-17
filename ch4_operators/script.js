//Arithmetic operators

let a = 10;
let b = 3;

console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.333.
console.log(a % b); // 1
console.log(a ** b); // 1000
a++;
console.log(a); //11
b--;
console.log(b); //11


// //Comparision operators
var age = '5';
console.log(age == 5);  //equal comapring values only
console.log(age === 5); //equal comapring values and data type both
console.log(age != 5);  //not equal
console.log(age > 5);   //grater than
console.log(age < 5);   //less than
console.log(age >= 5);  //grater than or qual,  alwayn equal sign must be last is principle
console.log(age <= 5);  //less than or equal,   alwayn equal sign must be last is principle

// //Logical operators
// // how AND works
let age = 40;
console.log(age > 12 && age <= 14);

// // how OR works
console.log(age > 12 || age <= 14);

// // not !
console.log(!true);
console.log(!false);
 

// //Assignment operators
var day = 5; // this is not equal is asignment operator

var day = 5;
day = day + 8;
console.log(day);
var day = 5;
day += 8; // these lines are same short way
day -= 8; //subtraction
day *= 8; // multiplication
day /= 8; // division
day %= 8; // division
console.log(day);