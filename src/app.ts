interface User {
    name: string;
    age: number;
    email: string;
    firstName: string;
    lastName: string;
}

// interface Customer extends User {
//     id: number;
//     username: string;
// }

type UserType = {
	name: string;
	age: number;
	email: string;
};

type UserCustomerType = UserType & {
	id: number;
	username: string;
};

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

const ListOfUsers: User[] = [user1, user2];
const ListOfUserBis : Array<User> = [user1, user2];


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

type userId = number | string;

type args = userId | undefined;

let DateOfBirth: Date = new Date();

const myPromesse: Promise<string> = new Promise((resolve, reject) => { 
    resolve("test");
});

const error : Error = new Error("test");

function getUsers(users: userId[]) {
    users.forEach(user => {
        console.log("test");
    });
}

// getUsers([user1, user2]);

getUsers([1, 3, 4, 5, 6, 7, 8, 9, 10]);
getUsers(["1", "3", "4", "5", "6", "7", "8", "9", "10"]);
getUsers(["1", "3", 4, "5", 6, "7", 8, "9", "10"]);


interface Customer {
    name: string;
    age: number;
    email: string;
}

const c1: Customer = { name: "Vincent", age: 33, email: "test@gmail.com'"}
const c2: Customer = { name: "Vincent", age: 33, email: "test@gmail.com'"}

interface ApiResponse<T> {
    code: CodeStatus;
    success: boolean;
    data: T;
}
function getCustomers(): ApiResponse<Customer[]> { 
    return {
        code: CodeStatus.OK,
        success: true,
        data: [c1, c2]
    }
}

function getProducts(): ApiResponse<Product[]> { 
    return {
        code: CodeStatus.OK,
        success: true,
        data: [{ name: "test", price: 10 }]
    }
}
//getCustomers 
//getProducts
// getUsers