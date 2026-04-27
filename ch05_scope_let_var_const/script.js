// ----------VAR--------------
// is old version before 2015 used it
// var x = 5;
// x = 2;
// console.log(x);

// *****Problems
// 1-scope leakge
// if (true) {
//     var magac = "Liban";
// }
// console.log(magac); // "Liban" ayuu soo daabacayaa!

// 2-re-declaring
// var magac ="Liban";
// var magac ="jibril";
// console.log(magac);

// 3-hositing
// this is bad practice because var kama celineeso inaa si toosan wxa u qorto
// console.log(color);
// var color = "red";
// it's like behave you only you declared and not assigned it.

//let will solve these problems

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// let y = 10;
// y = 8;
// console.log(y);

// const z = 4;
//z = 3; // you can't re-assign const keyword, TypeError: Assignment to constant variable.
// console.log(z);


// //let and const are allowed and is called shadowing redeclaration

// let x = 10;
// {
// let x = 20;
// console.log(x);
// }

//this is not allowed both of them called redeclaration
// let x = 10;
// let x = 20;
// console.log(x);

//let and const assignment are allowed 

// let x = 10;
// x=20;
// console.log(x);

//or

// let x = 10;
// {
// x = 20;
// console.log(x);
// }
