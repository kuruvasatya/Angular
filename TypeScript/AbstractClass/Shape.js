"use strict";
exports.__esModule = true;
exports.Shape = void 0;
var Shape = /** @class */ (function () {
    function Shape(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Shape.prototype.getInfo = function () {
        console.log("x = " + this._x + " y = " + this._y);
    };
    return Shape;
}());
exports.Shape = Shape;
