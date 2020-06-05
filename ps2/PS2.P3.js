/*
Write a function that prints the cube value of its input (ie f(x)=x^3). Next, write a single line of
code to call the function on each value of the array [1,2,3,4,5,6,7]. Note: This is NOT a
generator problem.
Note: The .map( ) method on Array is your friend here.
 */

var array = [1,2,3,4,5,6,7];

//function that prints cube value of input
const functionA = (input) => {
    console.log(`${input ** 3}`)
}
//single line of code to call function on each value of array
array.map(functionA)
