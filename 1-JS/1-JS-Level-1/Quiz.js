let menu = []

//-------------------------------------------------
Array.prototype.push = "";
//-------------------------------------------------

//-------------------------------------------------
menu.push("biryani");  // Error, becoz Prototype augmented
//-------------------------------------------------

// Currying in JS
// It is a technique in functional programming, that transforms the function of multiple arguments into several functions of a single argument in sequence.

// The translation of function happens something like this,

// function simpleFunction(param1, param2, param3, .....) => function
// curriedFunction(param1)(param2)(param3)(....
// We simply wrap a function inside a function, which means we are going to return a function from another function to obtain this kind of translation. The parent function takes the first provided argument and returns the function that takes the next argument and this keeps on repeating till the number of arguments ends. Hopefully, the function that receives the last argument returns the expected result.

//Function with multiple arguments
function calculateVolume(length, breadth, height) {
    return length * breadth * height;
  }
  console.log(calculateVolume(4, 5, 6));
  
  // -----------------
  // Converted to currying logic
  // -------------------
  
  function calculateVolume(length) {
    return function (breadth) {
      return function (height) {
        return length * breadth * height;
      };
    };
  }
  console.log(calculateVolume(4)(5)(6));
  
  // Why is currying useful in JavaScript?
  
  // It helps us to create a higher-order function
  // It reduces the chances of error in our function by dividing it into multiple smaller functions that can handle one responsibility.
  // It is very useful in building modular and reusable code
  // It helps us to avoid passing the same variable multiple times
  // It makes the code more readable

