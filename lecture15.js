// singleton 
// object literals
// Object.create
const mySym = Symbol("key1")
const JsUser = {
    mySym : "myKey1",
    name:"ashish",
    age: 21,
    location: "durgapur",
    email: "sinhaashish813@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["monday","saturday"]
}
console.log(JsUser[mySym])
console.log(JsUser.email)
console.log(JsUser.mySym)
console.log(JsUser.email)
console.log(JsUser["email"])
//  myArray = ["a","s","h","i","s","h"]
//  myArray[1]
//  console.log(myArray)
JsUser.email ="ashishsinha2003@gmail.com"
Object.freeze(JsUser)
JsUser.email = "ashishsinha@google.com"
console.log(JsUser); 
JsUser.greeting = function() {
    console.log("hello JS user");
}
JsUser.greetingTwo = function () {
    console.log("hello JS user,${this.name}")
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


