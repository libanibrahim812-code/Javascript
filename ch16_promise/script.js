// ### **Chapter 16: Promise**
// There are two things:
//  1. **Synchronous programming**
//  2. **Asynchronous programming**
// The way a computer works is through the CPU.
// Let us assume we have a CPU that has only one core,
// so one core can do only one task at a time.
// #### **In Coding:**
//  * Each line of code is a statement.
//  * Each statement is one task.
//  * The CPU must process each line of code individually.
// When the computer CPU handles all your tasks in parallel, it is called **Asynchronous programming (non-blocking)**.
// In this mode, one task is not blocking another one.

//his the background warehouse(shelf): and this frontend warehouse(counter): and this is the queue.

// **The Way We Communicate is a Promise**
//  * **Background of warehouse (Shelf):** Where the work happens behind the scenes.
//  * **Foreground of warehouse (Counter):** Where the customer waits and interacts.
//  * **The queue:** Customers waiting for their orders.
// ### **A Promise Can Be in 3 States:**
// Imagine the person at the counter asks, *"Where is this person's phone?"*
//  1. **Pending:** Still looking/still trying to find it (The task is ongoing).
//  2. **Fulfilled:** He found the phone (The task finished successfully).
//  3. **Rejected:** He did not find it (The task failed or an error occurred).

// const myPromise = new Promise(function(resolve, reject) {

// let success = true;

// if (success) {
// resolve("The operation was successful!");
// } else {
// reject("Something went wrong.");
// }

// });

// myPromise
// .then(function(result){
// console.log(result);
// })
// .catch(function(error){
// console.log(error);
// })
