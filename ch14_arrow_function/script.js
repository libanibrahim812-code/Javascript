// 4 ways of we create function
// ------------------------------------------------------------
// Tradition function

// function move (){
//     console.log("moving");
// }
// move()

//we add parametres and passed it

// function move(steps){
//     console.log("moving " + steps + " steps");
// }
// move(20)

// ------------------------------------------------------------

//variabel function

// let move = function(){
//     console.log("moving");
// }
// move()


//we add parametres and passed it

// let move = function (steps) {
//     console.log("moving " + steps + " steps");
// };
// move(30)

// ------------------------------------------------------------

//arrow function 

// let move = () => console.log("moving"); 
// move()

// let move = steps => console.log("moving " + steps +" steps" ); // even you can remove brackets of parametres if it's not more than one, and if there is no parametres
// move(40)

// let move = (steps, firstName) => console.log(firstName + " is moving " + steps + " steps"); // even you can't remove brackets of parametres now
// move(50, "Liban");

// ------------------------------------------------------------


//This is variabel function

// let move = function (steps,firstName) {
//     console.log(firstName + " moving " + steps + " steps");
// }
// setTimeout(move, 10000,30,"Ali")

// is worked

// ------------------------------------------------------------

//anonymous function

// if what about if we make anonymous 

// function (steps,firstName) {
//     console.log(firstName + " moving " + steps + " steps");
// }
// setTimeout(move, 10000,30,"Ali")
// is not worked because our argument is in name that are not defined so the solution is 
// if you gonna use this function one time put the entire function to the name "move"
// setTimeout(function (steps,firstName) {
//     console.log(firstName + " moving " + steps + " steps");
// }, 10000,30,"Ali")
// and is worked
// so if you gonna use more than one time please give name and move the anonymous

// ------------------------------------------------------------

