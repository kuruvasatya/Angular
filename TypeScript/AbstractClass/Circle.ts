import {Shape} from './Shape';

export class Circle extends Shape{

    constructor( x : number, y : number, private _radius : number) {
        super( x , y )
    }

    calaculateArea() {
        console.log(Math.PI * Math.pow(this._radius, 2));
    }
    
}