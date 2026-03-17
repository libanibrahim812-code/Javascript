//Scopes

//global scope
var firstName = "liban";

//local scope
{
  let lastName = "ali";
  console.log(firstName, lastName); //you'll see all global and local scope
}

// when you declare variable inside local scope you'll request to show while inside local only
// console.log(firstName, lastName);
// you 'll see ReferenceError: lastName is not defined
