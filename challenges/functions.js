// ==== Callbacks ====  

/* Step 1: Create a higher-order function
  * Create a higher-order function named consume with 3 parameters: a, b and cb
  * The first two parameters can take any argument (we can pass any value as argument)
  * The last parameter accepts a callback
  * The consume function should return the invocation of cb, passing a and b into cb as arguments
*/
function consume(a,b,cb){
  return cb(a,b);
}
/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/
function add (num1, num2){
  return num1 + num2;
}
function multiply (num1,num2){
  return num1 * num2;
}
function greeting(fName, lName){
  return `Hello ${fName} ${lName}, nice to meet you!`
}
/* Step 3: Check your work by un-commenting the following calls to consume(): */
console.log(consume(2, 2, add)); // 4
console.log(consume(10, 16, multiply)); // 160
console.log(consume("Mary", "Poppins", greeting)); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why nested function can access the variable internal.

// Explanation: 
//Nested functions is within another function.  Due to the scope rules, the functions outside of the parent function of the nested function cannot access the 
//information in the nested function, BUT the nested function can gain access to the other functions and objects outside of its parent. Its a good practice
//to nest because it organizes code well.  Prevents from having to hard code a lot of info together. 

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();
