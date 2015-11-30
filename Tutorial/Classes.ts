/*
* All the code contained in this file can be optained at www.typescriptlang.org
*/

//Classes are defined using class name, properties, constructor, and methods. 
//Example
// class Greeter {
// 	//Property
//     greeting: string;
// 	//Constructor
//     constructor(message: string) {
//         this.greeting = message;
//     }
// 	//Method
//     greet() {
//         return "Hello, " + this.greeting;
//     }
// }

// var greeter = new Greeter("world");


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