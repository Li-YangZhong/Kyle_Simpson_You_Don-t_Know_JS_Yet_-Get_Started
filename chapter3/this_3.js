//'use strict'
function classroom(teacher) {
    return function study() {
        console.log(
            `${ teacher } says to study ${ this.topic }`
        );
    };
}
var assignment = classroom("Kyle");

var otherHomework = {
    topic: "Math"
};

assignment.call(otherHomework);
// Kyle says to study Math

/*A third way to invoke a function is with the call(..) method, which takes an object (otherHomework here) to use for setting the this reference for the function call. The property reference this.topic resolves to "Math". */