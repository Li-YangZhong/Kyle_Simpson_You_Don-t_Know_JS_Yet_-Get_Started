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