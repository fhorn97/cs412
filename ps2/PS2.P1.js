/*
Problem 1 (PS2.P1.js)
Write two generators that together implement a series of even Fibonacci numbers. The first
generator should return the series of fibonacci numbers starting from 0. The series F is defined
as F(0) = 0; F(1) = 1; F(n) = F(n-1) + F(n-2)
The second generator should use the first to obtain the next number in the sequence, rejecting
it if it is odd and asking for the next. Once an even Fibonacci number is obtained, it is emitted.
Use the generators to print out the first 6 even Fibonacci numbers.
 */

//first generator
function* anotherGenerator() {
    let [val1, val2, result] = [0, 1, 0] //use destructuring to assign values
    yield 0;
    yield 1;
    while (true) {
        result = val1 + val2;
        [val1, val2] = [val2, result]
        yield result;
    }
}

//second generator
function* generator() {
    let fibGen = anotherGenerator();
    let i = 0;
    while (i < 6) {
        let result = fibGen.next().value;
        if (result % 2 === 0) {
            console.log(`${result}`);
            i++;
        }
        else {
            result;
        }
    }
}
const gen = generator();
gen.next();