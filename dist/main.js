"use strict";
class Student {
    constructor(nm, sm, cs) {
        this.name = nm;
        this.semester = sm;
        this.course = cs;
    }
    // Getter method
    get courses() {
        return this.course;
    }
    set courses(thecourse) {
        this.course = thecourse;
    }
}
// Access any property of the Student class,
let student = new Student("Aman Rathod", 4, "Web Development");
// Setter call
student.course = "Data structure";
// Getter call
console.log("Course purchased is " + student.courses);
