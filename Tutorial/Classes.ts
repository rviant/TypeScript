/*
* All the code contained in this file can be optained at www.typescriptlang.org
*/

//Classes are defined using class name, properties, constructor, and methods. 
//Example
class Greeter {
	//Property
    greeting: string;
	//Constructor
    constructor(message: string) {
        this.greeting = message;
    }
	//Method
    greet() {
        return "Hello, " + this.greeting;
    }
}

var greeter = new Greeter("world");


//Note: We can use inheritance as well in typescript

class Animal {
    name:string;
    constructor(theName: string) { this.name = theName; }
    move(meters: number = 0) {
        alert(this.name + " moved " + meters + "m.");
    }
}

class Snake extends Animal {
    constructor(name: string) { super(name); }
    move(meters = 5) {
        alert("Slithering...");
        super.move(meters);
    }
}

class Horse extends Animal {
    constructor(name: string) { super(name); }
    move(meters = 45) {
        alert("Galloping...");
        super.move(meters);
    }
}

var sam = new Snake("Sammy the Python");
var tom: Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);


//When comparing types that have 'private' members, we treat these differently. 
//For two types to be considered compatible, if one of them has a private member, 
//then the other must have a private member that originated in the same declaration.

class Animal {
    private name:string;
    constructor(theName: string) { this.name = theName; }
}

class Rhino extends Animal {
	constructor() { super("Rhino"); }
}

class Employee {
    private name:string;
    constructor(theName: string) { this.name = theName; }	
}

var animal = new Animal("Goat");
var rhino = new Rhino();
var employee = new Employee("Bob");

animal = rhino;
animal = employee; //error: Animal and Employee are not compatible
//Note that the error is occurring because the private property was not declared on the same declaration meaning there was one declaration for the name in animal
//and another declaration for the name in employee. This didn't happen to rhino since the only declaration of the private variable is made in the animal class
//Youy ca also drop the property declaration and only include it in the contructor as parameters. Bellow is an example of said change 
//Before
class Animal {
    private name:string;
    constructor(theName: string) { this.name = theName; }
	move(meters: number) {
        alert(this.name + " moved " + meters + "m.");
    }
}

//After
class Animal {
    constructor(private name: string) { }
    move(meters: number) {
        alert(this.name + " moved " + meters + "m.");
    }
}

//If you want to limit the way a user access a variable you can implement set and get methods to modify or get properties values that are private.
//Example
var passcode = "secret passcode";

class Employee {
    private _fullName: string;

    get fullName(): string {
        return this._fullName;
    }
	
    set fullName(newName: string) {
        if (passcode && passcode == "secret passcode") {
            this._fullName = newName;
        }
        else {
            alert("Error: Unauthorized update of employee!");
        }
    }
}

var employee = new Employee();
employee.fullName = "Bob Smith";
if (employee.fullName) {
    alert(employee.fullName);
}