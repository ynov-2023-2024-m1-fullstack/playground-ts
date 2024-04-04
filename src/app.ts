let myName: string;
let myAge: number | string;
let hasPet: boolean;
let ref : string | number | boolean | null;

ref = 'AB1234';
ref = 123456;
ref = false;

function getName(name:string): string {
    return `Your name is ${name}`;
    // return "Your name is" + name;
}

getName("Vincent");
// getName(false);

function logError(error: string): void {
    console.log(error);
}

logError("This is an error");

type Customer = {
    firstName: string;
    lastName: string;
    age?: number;
}

let customer1: Customer = {
    firstName: "Vincent",
    lastName: "Diaz",
};
let customer2: Customer = {
    firstName: "Vincent",
    lastName: "Diaz",
    age: 30
};

class Person {
    constructor(age:number, firstName: string, lastName: string) {}
}

const user1: Person = new Person(33, "vincent", "zerbib");

interface Product {
	name: string;
	price : number;
	salePrice : number;
}

const product1: Product = {
    name: "Soap",
    price: 1.99,
    salePrice: 0.99
}

function addToCard (product: Product) {
    console.log("Product added to cart: ", product);
}

addToCard(product1);
addToCard(user1);