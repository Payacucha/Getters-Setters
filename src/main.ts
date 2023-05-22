class Student {
    name: string;
    semester: number;
    course: string;
    constructor(nm: string, sm: number, cs: string) {
    this.name = nm;
    this.semester = sm;
    this.course = cs;
    }
    // Getter method
    public get courses() {
    return this.course;
    }
    public set courses( thecourse: string) {
    this.course = thecourse;
    }
    }
    // Access any property of the Student class,
    let student = new Student("Aman Rathod", 4, "Web Development"
    );
    // Setter call
    student.course = "Data structure";
    // Getter call
    console.log("Course purchased is " + student.courses);