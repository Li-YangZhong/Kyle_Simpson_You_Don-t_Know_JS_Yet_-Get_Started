console.log(typeof 42);                  // "number"
console.log(typeof "abc");               // "string"
console.log(typeof true);                // "boolean"
console.log(typeof undefined);           // "undefined"
console.log(typeof null);                // "object" -- oops, bug!
console.log(typeof { "a": 1 });          // "object"
console.log(typeof [1,2,3]);             // "object"
console.log(typeof function hello(){});  // "function"