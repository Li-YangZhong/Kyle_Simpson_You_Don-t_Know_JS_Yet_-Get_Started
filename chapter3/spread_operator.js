// spread an iterator into an array,
// with each iterated value occupying
// an array element position.
var it = ['one', 'two', 'three', 'four']
var vals = [ ...it ];

console.log(typeof vals, vals) // object [ 'one', 'two', 'three', 'four' ]

// spread an iterator into a function,
// call with each iterated value
// occupying an argument position.

function doSomethingUseful(i) {
    console.log(i)
}

doSomethingUseful( ...it );