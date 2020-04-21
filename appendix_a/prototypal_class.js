var Classroom = {
    welcome() {
        console.log("Welcome, students!");
    }
};

var mathClass = Object.create(Classroom);

mathClass.welcome();
// Welcome, students!

/* ********* */

function NewClassroom() {
    // ..
}

NewClassroom.prototype.welcome = function hello() {
    console.log("Welcome, students!");
};

var mathClass = new NewClassroom();

mathClass.welcome();
// Welcome, students!
/* ********* */
class ThirdClassroom {
    constructor() {
        // ..
    }

    welcome() {
        console.log("Welcome, students!");
    }
}

var mathClass = new ThirdClassroom();

mathClass.welcome();
// Welcome, students!