// ****Arrays allows us to list of data in single variable*****
let myFriend = "Omar" //this how we create one variable
// let myFriends = "Omar","Ali", "Ahmed" //not worked like this
let myFriends = ["Omar","Ali", "Ahmed"] //this how we create arrays
// console.log(myFriends);
//there is an other way we can create it but is long form
// let myFriends = new Array("Omar", "Ali", "Ahmed");
// console.log(myFriends);
//what about if i want get one of my data only one we must use index(position number)
console.log(myFriends[2]);
//reverse of index
// console.log(myFriends.indexOf("Ahmed"));
//wahat about if we want to add my list so there is two place we can add something(begining and the end of the list)
// myFriends.push("Moh'ed");// this is insert at the end
// console.log(myFriends);
// myFriends.pop(); // this is remove at the end
// console.log(myFriends);
// myFriends.unshift("Moh'ed"); // this is insert at the begining
// console.log(myFriends);
// myFriends.shift(); // this is remove at the begining
// console.log(myFriends);
//Replace one of my list like change Ahmed to Moh'ed 
// myFriends[2] = "Moh'ed"
// console.log(myFriends);
// how do you check how many elements are in the array use length property
// console.log(myFriends.length);
//splice property formula : array.splice(start(where we start),deleteCount(how many we will delete),item1,item2,...(what we add))
// let colours = ["Blue", "Red", "Green", "Pink"]
// colours.splice(0, 2, "Yellow", "Purple", "Orange");
// console. log(colours);
//merging arrays together connecting two or more arrys together
// let maleStudents = ["abdulahi","khalid"]
// let femaleStudents = ["amina", "fowsia"]
// let students = maleStudents.concat(femaleStudents);
// console.log(students);
//slice make your array new one, formula: array.slice(start,end(not included))
// let colours = ["Red", "Blue","yellow", "Green", "Pink"];
// let primaryColours = colours.slice(0, 3);
// console. log(primaryColours);
//sort
// myFriends.sort()
// console.log(myFriends);
