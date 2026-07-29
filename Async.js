function register(cb) {
  setTimeout(() => {
    console.log("register now");
    cb();
  }, 10000);
}
function login(cb) {
  setTimeout(() => {
  console.log("login now");
  cb();
},5000);
}
function getData(cb) {
  setTimeout(() => {
  console.log("get data now");
  cb();
},4000);
}
function displayData() { 
  setTimeout(() => {
  console.log("display data now");
},6000);
}
//callback hell
register(
  () => {                // callback function
    login(
      () => {
        getData(
          () => {
            displayData();
          }
        );
      }
    );
  }
);

  console.log("call another Application");  
 
//  The above code is an example of asynchronous programming in JavaScript. It uses the setTimeout function to simulate delays in executing the functions register, login, getData, and displayData. Each function logs a message to the console after a specified delay. The final console.log statement executes immediately, demonstrating that the other functions are running asynchronously and do not block the execution of subsequent code.


//Event loop :is a mechanism that allows JavaScript to perform non-blocking operations by offloading tasks to the system kernel whenever possible. It enables JavaScript to handle multiple operations concurrently, even though it is single-threaded. The event loop continuously checks the call stack and the task queue, executing tasks from the queue when the call stack is empty. This allows for efficient handling of asynchronous events, such as user interactions, network requests, and timers, without freezing the main thread.

// for maintaining sequence order  we use call back functions, promises, or async/await syntax. These techniques allow us to control the flow of asynchronous operations and ensure that certain tasks are completed before others, maintaining the desired order of execution.
