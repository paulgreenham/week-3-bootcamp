//OOP Inheritance Lesson Spot Checks

class Person {
    constructor(name, startYear) {
        this.name = name
        this.startYear = startYear
        this.courses = []
    }

    addCourse(course) {
        this.courses.push(course)
    }
}

class Student extends Person {
    constructor(name, startYear) {
        super(name, startYear)
        this.grades = []
    }

    receiveGrade(courseName, finalGrade) {
        this.grades.push({
            course: courseName,
            grade: finalGrade
        })
    }

    addCourse(course){
        if(this.courses.indexOf(course) == -1){
            super.addCourse(course)
        }
    }
}

class Teacher extends Person{
    constructor(name, startYear, salary) {
        super(name, startYear)
        this.salary = salary
        // this.name = "Professor " + name
        this.courses = {}
    }

    giveGrade(student, courseName, finalGrade){
        student.receiveGrade(courseName, finalGrade)
    }

    addCourse(course){
        if(this.courses[course]){
            this.courses[course]++
        }
        else{
            this.courses[course] = 1
        }
    }
}

// const s1 = new Student("Ronda", 2017)
// const t1 = new Teacher("Cassandra", 2002, 40000)
// const p1 = new Person("Anon", 1999)

// s1 instanceof Person    //true
// t1 instanceof Teacher   //true
// t1 instanceof Person    //true
// s1 instanceof Teacher   //false
// t1 instanceof Student   //false
// p1 instanceof Person    //true
// p1 instanceof Student   //false
// p1 instanceof Teacher   //false

// s1 instanceof p1        //error

// const t1 = new Teacher("Cassandra", 2002, 40000)
// console.log(t1.name)

// const t1 = new Teacher("Cassandra", 2002, 40000)
// t1.addCourse("Algebra II")
// t1.addCourse("Algebra II")
// t1.addCourse("Trigonometry")
// console.log(t1.courses) //should print {Algebra II: 2, Trigonometry: 1}


class TeachingAssistant extends Teacher {
    constructor(name, startYear, salary) {
        super(name, startYear, salary)
    }
}

// const s1 = new Student("Ronda", 2017)
// const ta1 = new TeachingAssistant("Brandon", 2014, 20000)

// console.log(ta1.toString())

// ta1.addCourse("General Relativity")
// ta1.giveGrade(s1, "General Relativity", 91)

// console.log(ta1.salary) //prints 20000
// console.log(ta1.courses) //prints {"General Relativity": 1}
// console.log(s1.grades) //prints [{course: "General Relativity", grade: 91}]




//Exercise


class Principal extends Person{
    constructor(name, startYear){
        super(name, startYear)
        this.teachers = []
        this.students = []
    }

    hireTeacher(Teacher){
        this.teachers.push(Teacher)
        console.log(`${this.name} just hired ${Teacher.name}`)
    }

    recruitStudent(Student){
        this.students.push(Student)
    }

    expelStudent(Student){
        let i = this.students.indexOf(Student)
        this.students.splice(i, 1)
    }

    transferStudent(Student, Principal){
        this.expelStudent(Student)
        Principal.recruitStudent(Student)
    }
}


const p1 = new Principal("Martin", 1991)
const p2 = new Principal("Martha", 1990)

const t1 = new Teacher("Cassandra", 2002, 40000)
const t2 = new Teacher("Kevin", 2006, 30000)

const s1 = new Student("Ronda", 2017)
const s2 = new Student("Byron", 2016)

//1 & 2
p1.hireTeacher(t1) //should print "Martin just hired Cassandra"
console.log(p1.teachers) //should print Array(1) [Teacher] - the teacher should be Cassandra

p1.hireTeacher(t2) //should print "Martin just hired Kevin"
console.log(p1.teachers) //should print Array(2) [Teacher, Teacher]

//3 & 4
p1.recruitStudent(s1)
p1.recruitStudent(s2)
console.log(p1.students) //should print Array(2) [Student, Student]

//5
p1.expelStudent(s1)
console.log(p1.students) //should print Array(1) [Student] - the student should be Byron

//6
p1.transferStudent(s2, p2)
console.log(p1.students) //should print Array(0) []
console.log(p2.students) //should print Array(1) [Student] - the student should be Byron