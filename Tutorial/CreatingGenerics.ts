//When using Generic you can asign a function type to a variable and also you can use any other letter other than T as long as is acorrectly alligned with that of the function

function identity<T>(arg: T): T {
	return arg;
} 
var myIdentity: <T>(arg: T)=>T = identity;
//or
var myOtherIdentity: <U>(arg: U)=>U = identity; 
//or
var mySecondtherIdentity: {<T>(arg: T): T} = identity;

//Generic Interface
interface GenericIdentityFn {
	<T>(arg: T): T; 
}

function identitys<T>(arg: T): T {
	return arg;
}

var myIdentity: GenericIdentityFn = identitys;

//If you want to move the parameter to be a parameter of the whole interface and make the type parameter available to all other members of the interface you can do the following, 

interface GenericIdentityFn1<T> {
	(arg: T): T;
}

function identity2<T>(arg: T): T {
	return arg;
}

var myNewIdentity: GenericIdentityFN1<Number> = identity;


//WHen creating Generic Classes you can do as follow. Note that generic classes are similar to generic interfaces  but with a generic type parameter list in angle brackets (<>) following the name class

//Example
class GerericNumber<T> {
	zeroValue: T;
	add: (x: T, y: T)=> T;
}

var myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericValue.add = function(x, y) {return x + Y; };


//To set constraints on generic classes you must do the following

//Example
interface LengthWise {
	length: number;
}

function logginIdentity<T extends LengthWise>(arg: T): T {
	console.log(arg.length); //New we know it has a .length property, so no more error
	return arg;
}






