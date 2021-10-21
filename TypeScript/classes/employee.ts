export class Employee{
    constructor(private _id?: number,
                private _name?: string,
                private _active : boolean = false){}
    
    get id() : number | undefined {
        return this._id;
    } 
    
    set id(id : number | undefined) {
        this._id = id;
    }

    get name() : string | undefined {
        return this._name;
    } 
    
    set name(name : string | undefined) {
        this._name = name;
    }

    get active() : boolean {
        return this._active;
    } 
    
    set active(active : boolean) {
        this._active = active;
    }

    display_user() {
        console.log ("User id : " + this._id + " name : " + this.name  + " active : " + this.active);
    }

}

let emp1 = new Employee(1,"satya")
let emp2 = new Employee(2, "Ganesh", true)

emp1.display_user();
emp2.display_user();

