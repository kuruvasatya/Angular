"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Rectangle_1 = require("./Rectangle");
var Circle_1 = require("./Circle");
//let circle = new Circle(0,5,5);
var rectangle = new Rectangle_1.Rectangle(1, 3, 10, 10);
var circle = new Circle_1.Circle(3, 9, 18);
circle.getInfo();
rectangle.getInfo();
