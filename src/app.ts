interface User {
    name: string;
    age: number;
    email: string;
    firstName: string;
    lastName: string;
}

const user1: User = {
    name: "Vincent",
    age: 33,
    email: "vincenterbib@gmail.colm",
    firstName: "Vincent",
    lastName: "Zerbib"
}
const user2: User = {
    name: "Vincent",
    age: 33,
    email: "vincenterbib@gmail.colm",
    firstName: "Vincent",
    lastName: "Zerbib"
}

interface Customer extends User {
    id: number;
    username: string;
}

const UserCustomer: Customer = {
    id: 1,
    name: "Vincent",
    age: 33,
    email: 'vincentzerbib@gmail',
    firstName: "Vincent",
    lastName: "Zerbib",
    username: "vzerbib"
}

interface Product {
    name: string;
    price: number;
}

interface Stock extends Product { 
    stock: number;
    instock: boolean,
}

class UserClass {
    constructor(public name: string, public age: number) {}
}

enum Direction {
    Top, 
    left, 
    Right, 
    Bottom
}

enum CodeStatus {
    OK = 200,
    Created = 201,
    NoContent = 204,
    NotModified = 304,
    BadRequest = 400,
    Unauthorized = 401,
    Forbidden = 403,
    NotFound = 404,
    InternalServerError = 500
}

interface Response {
    code : CodeStatus;
}

interface Slider {
    direction: Direction;
}

type IdUser = number

// function getUser(user: User) {
//     console.log(user.name);
// }

function getUser(user: User) {
	console.log(user.name);
}

function getUsers(users: User[]) {
    users.forEach(user => {
        console.log(user.name);
    });
}

getUsers([user1, user2]);

getUsers([1, 3, 4, 5, 6, 7, 8, 9, 10]);