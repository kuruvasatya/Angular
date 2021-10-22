export abstract class Shape {
    constructor (private _x ?: number,  private _y ?:number) {}
    abstract calaculateArea();

    getInfo() {
        console.log(`x = ${this._x} y = ${this._y}`);
    }
}