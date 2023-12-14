Read and summarize the following Articles.
https://www.w3schools.com/js/js_array_methods.asp
https://www.w3schools.com/js/js_functions.asp
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions
https://www.javascripthelp.org/learn/basics/control-flow-statements/
https://javascript.info/function-basics
Add the summary into a separate file, called README.md
make sure you use a separate github repository to host this.
Have a file for each questions. eg. display.js, 

ARRAY METHOD
Array length property returns the length (size) of an array
toString() method converts an array to a string of (comma separated) array values.
The join() method joins all array elements into a string.
The pop() method removes the last element from an array and returns the value that was popped out in the console
The push() method adds a new element to the end of an array  and returns the value that was pushed
The shift() method removes the first array element and "shifts" all other elements to a lower index, and returns the shifted value
The unshift() method adds a new element to the beginning of an array  and "unshifts" older elements
Array delete() method can be used to delete element in an array. however, using delete leaves undefined holes in the array. it is advisable to use pop() or shift() instead.
The concat() method creates a new array by merging (concatenating) existing arrays
The flat() method creates a new array with sub-array elements concatenated to a specified depth.
The splice() method can be used to add new items to an array
The slice() method slices out a piece of an array into a new array.

MATERIAL-2 FUNCTION
A JavaScript function is a block of code that is used to perform a particular task javaScript function is executed when we call it.
function syntax is written as "function name(){}. The parentheses may include parameter names separated by commas e.g (parameter1, parameter2, ...)

Function Invocation
The code inside the function will execute when it is invoked i.e called 

When an event occurs (when a user clicks a button)
When it is invoked (called) from JavaScript code
Automatically (self invoked)
The () operator invokes  the function
Local variables can only be accessed from within the function.Variables declared within a JavaScript function, become LOCAL to the function.

MATERIAL-3 FUNCTION
A function is composed of a sequence of statements called the function body. Values can be passed to a function as parameters, and the function will return a value.
The return statement allows you to return an arbitrary value from the function. One function call can only return one value, but you can simulate the effect of returning multiple values by returning an object or array and destructuring the result.
Arguments are always passed by value and never passed by reference. This means that if a function reassigns a parameter, the value won't change outside the function. More precisely, object arguments are passed by sharing, which means if the object's properties are mutated, the change will impact the outside of the function. For example:

MATERIAL-4 CONTROL FLOW
Control flow statements are a fundamental part of any programming language, including JavaScript. They allow you to control the order in which statements are executed in your program, based on certain conditions or criteria.
There are three main types of control flow statements:

if/else statements
switch statements
loops.

If/else statements are used to execute a block of code if a certain condition is true, and a different block of code if the condition is false.

Switch statements are used to execute a block of code based on the value of a variable or expression.

Loops are used to execute a block of code multiple times, based on a certain condition. There are two main types of loops in JavaScript: for loops and while loops.
 
 For loop- 
 the code inside the for loop will be executed for a number of times, starting with i = 1 and incrementing i by 1 each time, until i is greater than the number specified.

 A while loop simply repeats itself while something is true. Theoretically a while loop can loop forever. It continues until the condition is false.

 MATERIAL-4 FUNCTION BASICS
 Local Variable
 Outer variable
 Global Variable

A local variable is declared inside a function and is only visible inside that function.
An outer variable cab be declared outside a function. a function can access an outer variable. The outer variable is only used if there’s no local one.
A global variable outside of a function. Variables declared outside of any function are called global.

Parameters
 parameters allows us to pass data into a function

Default values
If a function is called, but an argument is not provided, then the corresponding value becomes undefined.

Naming a function
Functions are actions. So their name is usually a verb. It should be brief, as accurate as possible and describe what the function does, so that someone reading the code gets an indication of what the function does.
Function starting with…

"get…" – return a value,
"calc…" – calculate something,
"create…" – create something,
"check…" – check something and return a boolean, etc.