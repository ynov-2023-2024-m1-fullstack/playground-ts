var myName;
var myAge;
var hasPet;
var ref;
ref = 'AB1234';
ref = 123456;
ref = false;
function getName(name) {
    return "Your name is ".concat(name);
    // return "Your name is" + name;
}
getName("Vincent");
// getName(false);
function logError(error) {
    console.log(error);
}
logError("This is an error");
var customer1 = {
    firstName: "Vincent",
    lastName: "Diaz",
};
var customer2 = {
    firstName: "Vincent",
    lastName: "Diaz",
    age: 30
};
var Person = /** @class */ (function () {
    function Person(age, firstName, lastName) {
    }
    return Person;
}());
var user1 = new Person(33, "vincent", "zerbib");
var product1 = {
    name: "Soap",
    price: 1.99,
    salePrice: 0.99
};
function addToCard(product) {
    console.log("Product added to cart: ", product);
}
addToCard(product1);
addToCard(user1);
