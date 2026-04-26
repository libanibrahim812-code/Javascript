// console.log("this is the first line of our code");
// let firstName = "Liban";
// firstName = "omar";
// console.log(firstName);
// console.log("this is the last line of our code");
//we have this code and executed well and is [Done] exited with code=0 so there is no exception

// what about if we do that

//***run time error***/

// console.log("this is the first line of our code");
// let firstName
// console.log(firstName.toUpperCase());
// console.log("this is the last line of our code");

//first know that errors can be run time error(error you only find when you run the code) and compile error(error taht you find when you typing code )

// fix this

// console.log("this is the first line of our code");
// let firstName = "Liban";
// console.log(firstName.toUpperCase());
// console.log("this is the last line of our code");
// is [Done]

//assune if this was mobile app and we had this error and we saw like this stuck you what would happen your application it would crushed it the whole application
// will closed by itself automatically as soon as you open the app it closed it  is off,  crush is the worst thing for user  adeveloper should avoid make user unhappy.

//***compile error***/
// firstName let = "Liban"

// so that is errors how to handle so as to avoid it my application got crash

//try: looks problem , catch : deals the problem

//Run time error handling

// try {
//   console.log("this is the first line of our code");
//   let firstName;
//   console.log(firstName.toUpperCase());
//   console.log("this is the last line of our code");
// } catch (error) {
//   console.log("you have an error in the code");
// }
// so after the error line, the code will skipped it

//* *****can we know type of the error, the stuck and the message of the error***** */

// try {
//   console.log("this is the first line of our code");
//   let firstName;
//   console.log(firstName.toUpperCase());
//   console.log("this is the last line of our code");
// } catch (error) {
//   console.log("you have an error in the code " + error.message);
// }

// try {
//   console.log("this is the first line of our code");
//   let firstName;
//   console.log(firstName.toUpperCase());
//   console.log("this is the last line of our code");
// } catch (error) {
//   console.log("you have an error in the code " + error.name);
// }

// try {
//   console.log("this is the first line of our code");
//   let firstName;
//   console.log(firstName.toUpperCase());
//   console.log("this is the last line of our code");
// } catch (error) {
//   console.log("you have an error in the code " + error.stack);
// }

//creating our own error(custom error) ou selves and throw it
try {
  let firstName;
  let noFirstNameError = new Error("please make sure you write your first name");
  if (firstName == undefined) {
    throw noFirstNameError;
  }
} catch (error) {
  console.log("!error "+ error.message);
}finally {
console.log("regardless of error i run")

}