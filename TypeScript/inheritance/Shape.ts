
export class Shape {
    constructor(private _x : number, private _y : number) {}
    
    get x() {
        return this._x;
    }

    set x(value) {
        this._x = value;
    }  
    
    get y() {
        return this._y;
    }

    set y(value) {
        this._y = value;
    }  

    getInfo() {
        console.log (`x = ${this._x} y = ${this._y}`);
    }
}