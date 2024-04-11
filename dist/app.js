var user1 = {
    name: "Vincent",
    age: 33,
    email: "vincenterbib@gmail.colm",
    firstName: "Vincent",
    lastName: "Zerbib"
};
var user2 = {
    name: "Vincent",
    age: 33,
    email: "vincenterbib@gmail.colm",
    firstName: "Vincent",
    lastName: "Zerbib"
};
var ListOfUsers = [user1, user2];
var ListOfUserBis = [user1, user2];
var UserCustomer = {
    id: 1,
    name: "Vincent",
    age: 33,
    email: 'vincentzerbib@gmail',
    firstName: "Vincent",
    lastName: "Zerbib",
    username: "vzerbib"
};
var UserClass = /** @class */ (function () {
    function UserClass(name, age) {
        this.name = name;
        this.age = age;
    }
    return UserClass;
}());
var Direction;
(function (Direction) {
    Direction[Direction["Top"] = 0] = "Top";
    Direction[Direction["left"] = 1] = "left";
    Direction[Direction["Right"] = 2] = "Right";
    Direction[Direction["Bottom"] = 3] = "Bottom";
})(Direction || (Direction = {}));
var CodeStatus;
(function (CodeStatus) {
    CodeStatus[CodeStatus["OK"] = 200] = "OK";
    CodeStatus[CodeStatus["Created"] = 201] = "Created";
    CodeStatus[CodeStatus["NoContent"] = 204] = "NoContent";
    CodeStatus[CodeStatus["NotModified"] = 304] = "NotModified";
    CodeStatus[CodeStatus["BadRequest"] = 400] = "BadRequest";
    CodeStatus[CodeStatus["Unauthorized"] = 401] = "Unauthorized";
    CodeStatus[CodeStatus["Forbidden"] = 403] = "Forbidden";
    CodeStatus[CodeStatus["NotFound"] = 404] = "NotFound";
    CodeStatus[CodeStatus["InternalServerError"] = 500] = "InternalServerError";
})(CodeStatus || (CodeStatus = {}));
// function getUser(user: User) {
//     console.log(user.name);
// }
function getUser(user) {
    console.log(user.name);
}
var DateOfBirth = new Date();
var myPromesse = new Promise(function (resolve, reject) {
    resolve("test");
});
var error = new Error("test");
function getUsers(users) {
    users.forEach(function (user) {
        console.log("test");
    });
}
// getUsers([user1, user2]);
getUsers([1, 3, 4, 5, 6, 7, 8, 9, 10]);
getUsers(["1", "3", "4", "5", "6", "7", "8", "9", "10"]);
getUsers(["1", "3", 4, "5", 6, "7", 8, "9", "10"]);
var c1 = { name: "Vincent", age: 33, email: "test@gmail.com'" };
var c2 = { name: "Vincent", age: 33, email: "test@gmail.com'" };
function getCustomers() {
    return {
        code: CodeStatus.OK,
        success: true,
        data: [c1, c2]
    };
}
function getProducts() {
    return {
        code: CodeStatus.OK,
        success: true,
        data: [{ name: "test", price: 10 }]
    };
}
//getCustomers 
//getProducts
// getUsers
