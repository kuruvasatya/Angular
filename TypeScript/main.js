// Basics of Ts
//demo
function log(message) {
    for (var i = 0; i < 5; i++)
        console.log(message);
}
var message = "hello world";
log(message);
//variable declaration
// var -> funcion/global scope => scoped to nearest function
// let -> block level scope => scoped to nearest block
var a = 10;
var b = 20;
//types of variable
var c = 10;
var d = "abc";
var e = true;
var f = "445s";
var ar = [1, 2, 4, 45, 5];
var color;
(function (color) {
    color[color["Red"] = 0] = "Red";
    color[color["yellow"] = 1] = "yellow";
    color[color["blue"] = 2] = "blue";
    color[color["pink"] = 3] = "pink";
})(color || (color = {}));
var flagColor = color.Red;
console.log(flagColor);
// functions
var draw = function (x, y) {
    console.log("function 1", x, y);
};
draw(1, 2);
var draw0 = function (x, y) {
    console.log("arrow function");
};
draw0(0, 0);
function draw1(x, y) {
    console.log("function 2", x, y);
}
draw1(3, 4);
function draw2(point) {
    console.log("function 3", point.x, point.y);
}
draw2({ x: 5, y: 6 });
function draw3(point) {
    console.log("function 4", point.x, point.y);
}
draw3({ x: 7, y: 8 });
function draw4(point) {
    console.log("function 5", point.x, point.y);
}
draw4({ x: 9, y: 10 });
function calculateDistance(pointA, pointB) {
    var distance = Math.sqrt(Math.pow((pointB.x - pointA.x), 2) + Math.pow((pointB.y - pointA.y), 2));
    console.log(distance);
}
calculateDistance({ x: 3, y: 3 }, { x: 1, y: 1 });
// classes
var Student = /** @class */ (function () {
    function Student() {
    }
    Student.prototype.displayStudent = function () {
        console.log("I am student", this.name, this.rollno);
    };
    return Student;
}());
var student = new Student();
student.name = "satya";
student.rollno = "17121a05a6";
student.displayStudent();
// constructors and access modifiers
var StudentClass = /** @class */ (function () {
    function StudentClass(name, rollno) {
        this.name1 = name;
        this.rollno1 = rollno;
    }
    StudentClass.prototype.displayStudent = function () {
        console.log("I am student", this.name1, this.rollno1);
    };
    return StudentClass;
}());
var student1 = new StudentClass('satya', '172');
student1.displayStudent();
// shortcut: No need to decalre fields and intialize them
var StudentClass2 = /** @class */ (function () {
    function StudentClass2(name, rollno) {
        this.name = name;
        this.rollno = rollno;
    }
    StudentClass2.prototype.displayStudent = function () {
        console.log("I am student", this.name, this.rollno);
    };
    return StudentClass2;
}());
var student2 = new StudentClass2('satya', '172');
student1.displayStudent();
var Employee = /** @class */ (function () {
    function Employee(_id, _name, _salary) {
        this._id = _id;
        this._name = _name;
        this._salary = _salary;
    }
    Object.defineProperty(Employee.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (id) {
            this._id = id;
        },
        enumerable: false,
        configurable: true
    });
    return Employee;
}());
var employee = new Employee(1, "satya", 25000);
console.log(employee.id);
employee.id = 55;
console.log(employee.id);
