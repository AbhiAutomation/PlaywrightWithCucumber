/**
 * . const (Constant)
const is used to declare variables whose reference cannot be reassigned once declared.

Reassignment: The binding is immutable. You cannot assign a new value to the const variable.

Block Scope: It's scoped to the nearest pair of curly braces ({})—like an if block, for loop, or function.

Deep Concept: Object Mutability: While you cannot reassign a const object or array, you can still mutate its content.
 */

import { start } from "repl";

//console.log(color); // Output: undefined
// 👆 The compiler sees this as: var color; console.log(color);

//var color = "blue"; 

// The code is conceptually treated as:
// var color; // Hoisted and set to undefined
 //console.log(color); // Logs undefined
// color = "blue";
  
let city = "London";


// This period is the Temporal Dead Zone (TDZ)
console.log(city); // ❌ ReferenceError: Cannot access 'city' before initialization


// The compiler knows 'city' exists, but it hasn't finished setting it up yet.
// If you try to access it during the TDZ, it throws a strict error,
// which is much better than getting the confusing `undefined` value from `var`.

/**There are indeed two primary types of scope that determine the visibility and lifetime of your variables: Function Scope and Block Scope.


Function Scope (Legacy)
Function scope means a variable is accessible anywhere within the function it was declared in, regardless of whether it was inside a code block (like an if statement or a for loop).

Keyword: var

Boundary: The variable's boundary is the entire function body ({ ... }).

Behavior: Variables declared with var are "leaky" because they ignore smaller blocks.
*/
 function Startengin()
 {
 if(true)
 {
  var color = "red";  // Declared inside the 'if' block
 }  
  console.log(color)  // The 'var' variable leaks out of the 'if' block
                    // Output: "red" 

 }

 Startengin();
 
 function startModernEngine() {
  if (true) {
    let cylinderCount = 4; // Declared inside the 'if' block
    const maxSpeed = 200;
  }
  // The 'let' and 'const' variables cannot be accessed here
  // console.log(cylinderCount); // ❌ Error: cylinderCount is not defined
 //  console.log(maxSpeed);      // ❌ Error: maxSpeed is not defined
}

/** The introduction of let and const (block scope) in ECMAScript 2015 (ES6) fixed the common bugs associated with var (function scope), leading to the current best practice of avoiding var entirely. */


/** var allows redeclaration without error. 
 * 
 * 
 * 
 */
function exampleVar() {
  var x = 10;
  console.log(x); // Output: 10

  // ✅ Redeclaration is allowed (and hoisted)
  var x = 20;
  console.log(x); // Output: 20
}

exampleVar();
