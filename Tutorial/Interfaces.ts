/*
* All the code contained in this file can be optained at www.typescriptlang.org
*/





interface interfaceName {
	requiredProperty: string; //This property is required and is of type string
	optionalProperty?: number; //This property is optional because of the ? symbol and has a type of number
}
//This function uses a interfaceName parameter and return the specified type 
//Note that the compiler only checks for the required properties to be present
// when compiling it doesnt care about any other properties that may be present
//also the order in which the properties are present is not important 
function functionName(parameterName: interfaceName): {parameter1: string; parameter2: number}
{
	var newSquare = {color: white, area: 100};
	if(parameterName.optionalProperty){
		newSquare.color = parameterName.optionalProperty;
	}
	return newSquare;
}

var mySquare = createSquare ({color: "black"});

//Note
//In addition to optional parameters you can specify the types to be "any"
//this will ensure that any type you pass as a value will be accepted.



//Example of using interface with optional properties, and error correction when using wrong properties names
interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): {color: string; area: number} {
  var newSquare = {color: "white", area: 100};
  if (config.color) {
    newSquare.color = config.collor;  // Type-checker can catch the mistyped name here
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

var mySquare = createSquare({color: "black"});


//Note
//Function interfaces are also allowed, and they work the same way they would in C# or any other language that allows for methods interfaces
//Example
interface searchFunc {
	(source: string, subString: string): boolean;
}

//WHen declaring a Function interface you declare a return type that can be used to set the type of a variable of type function.
//Note in this example the value of the variable my search is bool because the return type of the function inteface is Bool, also the name
//the name of the parameters on the interface and the implementation do not have to match
//Example
var mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
  var result = source.search(subString);
  if (result == -1) {
    return false;
  }
  else {
    return true;
  }
}


//When interfacing an array you most do so in the following way
//THe index type determines what type of value can be used to index the elements in the array and is limited to  number, string.

interface StringArray {
  [index: number]: string;
}

var myArray: StringArray;
myArray = ["Bob", "Fred"];



//Note: The interface restricts the return value for any index to be the specified type.
//The following example will give an error due to the interface index return type not matching.
interface Dictionary {
  [index: string]: string;
  length: number;    // error, the type of 'length' is not a subtype of the indexer
}



 //We can also create an interface to establish a contract with the implementation class
 //Example
 interface ClockInterface {
    currentTime: Date;
}

class Clock implements ClockInterface  {
    currentTime: Date;
    constructor(h: number, m: number) { }
}

//You can also describe methods in an interface that are implemented in the class, as we do with 'setTime' in the below example:
interface ClockInterface {
    currentTime: Date;
	//Set Time is the method interface whithin the interface itself
    setTime(d: Date);
}

class Clock implements ClockInterface  {
    currentTime: Date;
    setTime(d: Date) {
        this.currentTime = d;
    }
    constructor(h: number, m: number) { }
}



//When using a construct statement in an interface you need to work with the static side of the class that implements the interface 
//in order to not get an error.
//Note that the class is not using the implements statement instead a variable of type CLockStatic is assigned  the class Clock
//EXAMPLE
interface ClockStatic {
    new (hour: number, minute: number);
}

class Clock  {
    currentTime: Date;
    constructor(h: number, m: number) { }
}

var cs: ClockStatic = Clock;
var newClock = new cs(7, 30);


//Extending classes
//By extending a class you have the ability to reuse the properties and methods defined in a different interface and reuse them as well as 
//creating new properties and methods, you can also extend multiple interfaces at the same time

interface Shape {
    color: string;
}

interface PenStroke {
    penWidth: number;
}

interface Square extends Shape, PenStroke {
    sideLength: number;
}

var square = <Square>{};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;


//As with JS you can also have objects with multiple types, as such you can do the same with typescript
//Example

interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

var c: Counter;
c(10);
c.reset();
c.interval = 5.0;