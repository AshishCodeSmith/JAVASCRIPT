function calculateCartPrice(val1,val2,...num1) {
return num1
}
//console.log(calculateCartPrice(200,400,500))
const user = {
    username: "ashish",
    price: 200
}
function handleObject(anyobject){
    console.log(`username is${anyobject.username} and price is${anyobject.price}`);

}
handleObject(user)
handleObject({
    username:"ash",
    price:399
})
const myNewArray = [200,400,100,600]
function returnSecondValue(getArray) {
 return getArray[1]
}
console.log(returnSecondValue([200,400,500,1000]));