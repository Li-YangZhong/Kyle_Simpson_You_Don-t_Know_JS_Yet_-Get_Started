console.log(NaN === NaN);            // false

console.log(0 === -0);               // true

var aVar = NaN
console.log(Number.isNaN(aVar)) // true
console.log(Object.is(NaN, NaN)) // true
console.log(Object.is(0, -0)) // false

console.log([ 1, 2, 3 ] === [ 1, 2, 3 ]);    // false
console.log({ a: 42 } === { a: 42 })         // false
console.log((x => x * 2) === (x => x * 2) )  // false

/* ****
JS does not provide a mechanism for structural equality comparison of object values, only reference identity comparison. 
**** */
var x = [ 1, 2, 3 ];

// assignment is by reference-copy, so
// y references the *same* array as x,
// not another copy of it.

var y = x;

console.log(y === x);              // true
console.log(y === [ 1, 2, 3 ]);    // false
console.log(x === [ 1, 2, 3 ]);    // false

