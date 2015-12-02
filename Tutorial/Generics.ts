//Note: Generic Hello World

function identity(arg: any): any{
	return arg;
}
//Although this is generic in the sense that it will take any and all the types you will be loosing the type of the value since when you return the arg the type returned is of type any, instead you use T

function identity<T>(arg: T): T{
	return arg;
}
//You can call this function in 2 difference ways. First by passing the argument type and all the arguments, 
//EXAMPLE
/*
var output = identity<string>("myString");
*/

//You can also call it by using only the parameters and letting the compiler determine which type is receiving.
//Note that when working with Generic types u add restrictions toyour function since you are no longer allowed to use types functions like lentgh etc. The work around for this is if you use an array of type T, there you can't still use any function in the T argument for the array but you can still use anything the array type allows you to use.




