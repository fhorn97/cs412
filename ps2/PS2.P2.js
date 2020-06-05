/*
Write a generator that is initialized with a sentence and that emits each word of the sentence in
turn.
Use the generator to print the words, one per line, of the string “All I know is something like a
bird within her sang”. Hint: Splitting a string returns an Array.
 */

function* generator() {
    rv = yield;
    array = rv.split(' ')
    for (const element of array) {
        console.log(element);
    }
}
var gen = generator();

gen.next();
gen.next('All I know is something like a bird within her sang');




























//
//
// function* genFunc(x) {
//     x = x.split(' ');
//     yield* x;
// }
//
// const generator = genFunc('All I know is something like a bird within her sang');
// let result = generator.next();
// while (!result.done) {
//     console.log(`${result.value}`)
//     result = generator.next();
// }