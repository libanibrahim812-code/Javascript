//When you write code, such as console.log("My name is liban"), the computer usually runs it immediately. You are telling the CPU to execute that command right now.
//However, sometimes you don't want the code to run straight away. You might want to run it in the future (e.g., after 2 seconds, 20 minutes, or when a specific event occurs). 
// This is where Timers come in. The Standard Execution (Immediate)
//In a normal flow, 
// the output appears as soon as the line is reached.
function executeTheCode() {
    console.log("My name is liban");
}

// executeTheCode(); // This runs immediately ("Straight") () ==> straight

//The Delayed Execution (setTimeout)If you want to delay the code, you use the setTimeout function. 
// This tells the CPU: "Don't run this now; wait for a specific amount of time."Syntax breakdown:Function to run: 
// The code you want to execute later.Delay: How long to wait in milliseconds ($1000ms = 1s$).

// setTimeout(function, delay_in_ms)

// setTimeout(executeTheCode, 20000);
//executeTheCode() we did not typed like this because this is runs immediatly

//What happens during those 20 seconds?

//[Hanging/Waiting]: The timer is active in the background. The program "waits" for the 20 seconds to pass.

//[Running]: After the time expires, the function is triggered.

//[Done]: The output appears in the console: My name is...

//Key Takeaway
// Immediate execution: You call the function directly: name().
// Timer execution: You pass the function to setTimeout, and the browser/environment handles the countdown for you.
// Note: In your example of $20,000ms$, the code will wait exactly 20 seconds before printing the result.




// console.log("Liban");
// if i need to run the future like after 2 second we use timers
// function executeThisCode(){
//     console.log("Liban");
// }
// executeTheCode() this means i want to run code now
// setTimeout(executeTheCode, 10000) //run aftwer 10seconds


//feedback => // So, the setTimeouut allows to run your code in the future once
//we need interval something that keeps repeating
setInterval(executeTheCode, 1000);

// so how to stop it.
// function executeTheCode(){
//      console.log("Liban");
//  }
// let interval = setInterval(executeTheCode, 1000);

// clearInterval(interval);

// let canceller = () => {
// clearInterval(interval)
// }
//     setTimeout(canceller, 10000);