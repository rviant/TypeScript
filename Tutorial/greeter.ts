//function greeter (person) {
//        return "Hello, " + person
//}

//var user  = "Jane User";

//document.body.innerHTML = greeter(user);


//Using Type Annotation simple test
//function greeter (person: string) {
//	return "Hello, " + person
//}

//var user  = [1,2,3];

//document.body.innerHTML = greeter(user);


interface Person {
	firstname: string;
	lastname: string;
}

function greeter (person: Person)
{
 	return "Hello, " + person.firstname + " " + person.lastname;
}

var user = {firstname: "Jane", lastname: "User"};

document.body.innerHTML = greeter(user);










