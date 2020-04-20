var greeting = "Hello world!";
var chars = [ ...greeting ];

console.log(chars);
// [ "H", "e", "l", "l", "o", " ",
//   "w", "o", "r", "l", "d", "!" ]

// given two DOM elements, `btn1` and `btn2`

var buttonNames = new Map();
buttonNames.set('btn1',"Button 1");
buttonNames.set('btn2',"Button 2");

for (let [btn,btnName] of buttonNames) {
    
        console.log(`${btn} Clicked ${ btnName }`);

}

for (let btnName of buttonNames.values()) {
    console.log(btnName);
}
// Button 1
// Button 2

var arr = [ 10, 20, 30 ];

for (let [idx,val] of arr.entries()) {
    console.log(`[${ idx }]: ${ val }`);
}
// [0]: 10
// [1]: 20
// [2]: 30