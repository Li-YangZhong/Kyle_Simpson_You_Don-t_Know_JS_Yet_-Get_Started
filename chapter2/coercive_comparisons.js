console.log(42 == "42");             // true
console.log(1 == true);              // true

console.log("" == 0, 0 == false) // true true

var arr = [ "1", "10", "100", "1000" ];
for (let i = 0; i < arr.length && arr[i] < 500; i++) {
    // will run 3 times
    console.log(arr[i])
}

var x = "10";
var y = "9";

console.log(x < y);      // true, watch out!