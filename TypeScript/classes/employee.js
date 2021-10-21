"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
var Employee = /** @class */ (function () {
    function Employee(_id, _name, _active) {
        if (_active === void 0) { _active = false; }
        this._id = _id;
        this._name = _name;
        this._active = _active;
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
    Object.defineProperty(Employee.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "active", {
        get: function () {
            return this._active;
        },
        set: function (active) {
            this._active = active;
        },
        enumerable: false,
        configurable: true
    });
    Employee.prototype.display_user = function () {
        console.log("User id : " + this._id + " name : " + this.name + " active : " + this.active);
    };
    return Employee;
}());
exports.Employee = Employee;
var emp1 = new Employee(1, "satya");
var emp2 = new Employee(2, "Ganesh", true);
emp1.display_user();
emp2.display_user();
