//scope level and mini hoisting
// dom= document object module
// function one() {
//     const username = "ashish"

//     function two(){
//         const website = "youtube"
//        console.log(username); 
//     }
//    console.log(website);
//   two()
// }
// one()
// if (true) {
//     const username = "ashish"
//     if (username === "ashish") {
//         const website = " youtube"
//         console.log(username + website);
//     }
//     // console.log(website);
// }
// console.log(username);


// ++++ intresting +++
console.log(addone(5))

function addone(num){
 return num+1
}
addTwo(5)
const addTwo = function(num) {
     return num +2 
}

// addTwo(5)
