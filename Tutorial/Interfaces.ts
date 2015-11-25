interface interfaceName {
	requiredProperty: string; //This property is required and is of type string
	optionalProperty?: number; //This property is optional because of the ? symbol and has a type of number
}
//This function uses a interfaceName parameter and return the specified type 
//Note that the compiler only checks for the required properties to be present
// when compiling it doesnt care about any other properties that may be present
//also the oreder in which the properties are present is not important 
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

//Note
//Function interfaces are also allowed, and they worl the same way they would in C# or any other language that allows for methods interfaces
//Example
interface searchFunc {
	(source: string, subString: string): boolean;
}




