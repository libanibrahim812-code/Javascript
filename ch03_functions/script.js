// console.log("video games");
// console.log("action movies");
// console.log("challenges");
// console.log("online gaming");
// console.log("cute animals");
// console.log("romantics");
// console.log("cute outfis");
// console.log("makeUp");

// *****My boss came and he told me i must print what the boys like while i did not remove and commnet what girls like *****

// function whatTheBoysLike() {
//    console.log("video games");
//    console.log("action movies");
//    console.log("challenges");
//    console.log("online gaming");
// }

// whatTheBoysLike();

// function whatGirlsLike(){
//    console.log("cute animals");
//    console.log("romantics");
//    console.log("cute outfis");
//    console.log("makeUp");
// }
// whatGirlsLike()

// Parametres is place holders is like declaring variables

// function colors(){
//    console.log(data1);
//    console.log(data2);
// }
// colors()
//the output will be data1 is not defined

//Declaring parametres
// function colors(data1, data2) {
//   console.log(data1);
//   console.log(data2);
// }
// colors();
// the output will be data is  undefined

//we pass data to the function
// function colors(data1, data2) {
//   console.log(data1);
//   console.log(data2);
// }

// colors("red","blue"); // this arguments where we put the real data

//Returning data

// function multiply (x, y){
//     return  x * y;
// }
// console.log(multiply(7, 7));

// // OR

// var total = multiply(7, 7);
// console.log(total);

//In real return means give this reuslt back to whoever called me
// function callMe() {
//   return "I am Liban";
// }
// console.log(callMe());

// ------------------------------------------------------

// function male(firstName, lastName, age, country){
// let info;
// info = firstName +" "+ lastName;
// info+=' his age is  ' + age;
// info+=' and lives in ' + country;
// return info;
// }
// console.log(male('Liban', 'Ibrahim', 24, 'Somalia'));

// ------------------------------------------------------

// function feMale(firstName, lastName, age, country) {
//   let info;
//   info = firstName + " " + lastName;
//   info += " her age is " + age;
//   info += " and lives in " + country;
//   return info;
// }
// console.log(feMale("Fadumo", "jama", 20, "United Kingdom"));

// is same and look good

// function feMale(firstName, lastName, age, country) {
// let info = `${firstName} ${lastName} her age is ${age} and lives in ${country}`;
// return info;
// }
// console.log(feMale("Fadumo", "jama", 20, "United Kingdom"));

// function both(firstName, lastName, age, gender, country) {
//   let info;
//   if (gender == 'male') {
//     info = `${firstName} ${lastName} his age is ${age} and lives in ${country}`;
//   } else {
//     info = `${firstName} ${lastName} her age is ${age} and lives in ${country}`;
//   }
//   return info;
// }
// console.log(both("Liban", "Ibrahim", 24, "male", "Somalia"));
// // console.log(both("Fadumo", "jama", 20, "female", "United Kingdom"));
