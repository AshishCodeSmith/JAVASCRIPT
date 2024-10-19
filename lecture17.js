//  function sayMyName() {
//     console.log("A");
//     console.log("S");
//     console.log("H");
//     console.log("S");
//     console.log("I");
//     console.log("H");
//  }
 //sayMyName()
 function addTwoNumbers(number1,number2) {
    //   let result = number1 + number2 ;
    // //   return result
    //   console.log("ashish");
    //   return result
    return number1 + number2
    }
const result= addTwoNumbers(5,3)
// console.log("Result: ",result);
function loginUserMessage(username = "sam"){
   if(username === undefined){
    console.log("please enter a username");
    return 
   }
    return '${username} just logged in'
}
console.log(loginUserMessage("ashish"))      