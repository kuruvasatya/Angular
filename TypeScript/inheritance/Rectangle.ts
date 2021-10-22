import {Shape} from './Shape';

export class Rectangle extends Shape {
    constructor(x : number, y : number, private _length : number, private _width: number) {
        super(x,y);
    }

    get length() {
        return this._length;
    }

    set length(value) {
        this._length = value;
    }

    get width() {
        return this._width;
    }

    set width(value) {
        this._width = value;
    }

    getInfo() {
        super.getInfo();
        console.log(`length = ${this._length} width = ${this._width}`);
    }
}