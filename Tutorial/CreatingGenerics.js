//When using Generic you can asign a function type to a variable and also you can use any other letter other than T as long as is acorrectly alligned with that of the function
function identity(arg) {
    return arg;
}
var myIdentity = identity;
//or
var myOtherIdentity = identity;
//or
var mySecondtherIdentity = identity;
function identitys(arg) {
    return arg;
}
var myIdentity = identitys;
function identity2(arg) {
    return arg;
}
var myNewIdentity = identity;
//WHen creating Generic Classes you can do as follow. Note that generic classes are similar to generic interfaces  but with a generic type parameter list in angle brackets (<>) following the name class
//Example
var GerericNumber = (function () {
    function GerericNumber() {
    }
    return GerericNumber;
})();
var myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
myGenericValue.add = function (x, y) { return x + Y; };
function logginIdentity(arg) {
    console.log(arg.length); //Now we know it has a .length property, so no more error
    return arg;
}
//Note: To set constaints extending an interface with constraints set as properties is an option since it allows you to reference a property that will otherwise not be present in the generic type T like in the above example.
//Example
logginIdentity(3); //This gives an error because the parameter doesn't have the length property.
logginIdentity({ length: 10, value: 3 }); //This one doesn't give an error because the parameter does have the length property
//Using Type Parameters in Generic Constraints
