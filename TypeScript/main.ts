// Basics of Ts

//demo
function log(message) {
    for(var i=0; i<5; i++)
        console.log(message);
}
var message = "hello world";
log(message)

//variable declaration
// var -> funcion/global scope => scoped to nearest function
// let -> block level scope => scoped to nearest block
let a = 10;
var b = 20;

//types of variable
let c: number = 10
let d: string = "abc"
let e: boolean = true
let f: string|number = "445s"
let ar: number[] = [1,2,4,45,5]
enum color {Red, yellow, blue, pink}
let flagColor = color.Red
console.log(flagColor)

// functions
let draw = function (x, y){
     console.log("function 1" , x, y);
}
draw(1, 2)

let draw0 = (x, y) => {
    console.log("arrow function");
}
draw0(0, 0)

function draw1(x,y) {
    console.log("function 2", x, y);
}
draw1(3,4)

function draw2(point) {
    console.log("function 3", point.x, point.y);
}
draw2({x:5, y:6})

function draw3(point: {x: number, y: number}) {
    console.log("function 4", point.x, point.y);
}
draw3({x:7, y:8})

// interfaces
interface Point {
    x: number,
    y: number
}

function draw4(point: Point){
    console.log("function 5", point.x, point.y)
}
draw4({x:9, y:10})

function calculateDistance(pointA:Point, pointB:Point) {
    let distance = Math.sqrt((pointB.x - pointA.x)**2 + (pointB.y - pointA.y)**2)
    console.log(distance);
}

calculateDistance({x:3,y:3}, {x:1, y:1})

// classes
class Student {
    name: string;
    rollno: string | number;

    displayStudent() {
        console.log("I am student", this.name, this.rollno);
    }
}

let student = new Student();
student.name = "satya";
student.rollno = "17121a05a6"
student.displayStudent()

// constructors and access modifiers
class StudentClass {
    name1: string;
    rollno1: string ;

    constructor(name: string, rollno: string) {
        this.name1 = name;
        this.rollno1 = rollno;
    }

    displayStudent() {
        console.log("I am student", this.name1, this.rollno1);
    }
}

const student1 = new StudentClass('satya', '172');
student1.displayStudent()

// shortcut: No need to decalre fields and intialize them
class StudentClass2 {
    constructor(public name: string,  public rollno: string) {
    }

    displayStudent() {
        console.log("I am student", this.name, this.rollno);
    }
}

const student2 = new StudentClass2('satya', '172');
student1.displayStudent()


class Employee {
    constructor(private _id?: number, private _name?: string, private _salary?:number){
    }
    
    get id() {
        return this._id;
    }
    
    set id ( id: number ) {
        this._id = id;
    }
}

let employee = new Employee(1, "satya", 25000)
console.log(employee.id);
employee.id = 55;
console.log(employee.id);