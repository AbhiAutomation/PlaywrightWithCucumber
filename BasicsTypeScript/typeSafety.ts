/** The key distinction lies in when the language checks for type correctness: during execution (dynamic) versus during compilation (static).

JavaScript: Dynamically Typed (Runtime Safety)
JavaScript is a dynamically typed language, meaning that type checking occurs at runtime (when the code is actually executing).

Definition: Variables can hold values of any type, and the type of the variable is determined by the value it holds at that moment.

Safety: You only find out about a type error when that specific line of code is executed.

Dynamic Type Example
In this JavaScript code, the type error isn't caught until the program tries to run the multiplication.

*/
// JavaScript (Dynamic Typing)
function calculate(x:any) {
  // 'x' could be anything—a number, a string, an object.
  return x * 2;
}

// 1. Works fine, 'x' is a number
let result1 = calculate(5); 

// 2. ERROR occurs here, at runtime (when this line is executed)
// JavaScript attempts "Hello" * 2, which results in NaN.
let result2 = calculate("Hello");

console.log(result1);
console.log(result2);


// TypeScript (Static Typing)
function calculateTypescript(x: number): number {
  // The function is explicitly told 'x' must be a number.
  return x * 2;
}

// 1. Works fine, matches the expected type
let result3 = calculateTypescript(5); 

// 2. ❌ COMPILE-TIME ERROR:
// The TypeScript compiler stops here and throws an error:
// "Argument of type 'string' is not assignable to parameter of type 'number'."
//let result4= calculateTypescript("Hello");

console.log(result3);
///console.log(result4);

/**Brief Summary: TypeScript provides static type safety because its compiler enforces the types you define, ensuring that type-related bugs are fixed before the code is shipped. */