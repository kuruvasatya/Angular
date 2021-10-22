import {Shape} from './Shape';

export class Circle extends Shape {
    constructor(x : number, y : number, private _radius : number) {
        super(x,y);
    }

    get radius() {
        return this._radius;
    }

    set radius(value) {
        this._radius = value;
    }

    getInfo() {
        super.getInfo();
        console.log(`radius = ${this._radius}`);
    }
}