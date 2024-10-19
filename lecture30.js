//filter map and reduce javascript
// const coding = ["js","ruby","java","python","cpp"]

// const values =coding.forEach( (item) => {
//     console.log(item);
// })

// console.log(values);
//  const myNums =[1,2,3,4,5,6,7,8,9,10]
// let newNums= myNums.filter( (num) => num > 4 )
// console.log(newNums);


// const newNums = []

// myNums.forEach( (num) => { 
//     if (num > 4) {
//         newNums.push(num)
//     }
// })
// console.log(newNums);
// const myNumers =[1,2,3,4,5,6,7,8,9,10]

// // const newNumers= myNumers.map((num) => num+10)
// const newNumers = myNumers
//                 .map((num)=> num * 10)
//                 .map((num)=> num + 1)
//                 .filter( (num) => num >= 40)
// console.log(newNumers);

// const myNums = [1,2,3]

// const myToatl =myNums.reduce(function (acc,currval) {
//     console.log(`acc:${acc} and currval:${currval}`);
//     return acc + currval 
// },0)
// console.log(myTotal);
// const myTotal = myNums.reduce( (acc,curr) =>acc+curr,0)
// console.log(myTotal);
const shoppingCart = [
    {
        itemName:"js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "dsa course",
        price:899
    },
    {
        itemName: "web development course",
        price:899
    },
]

const priceToPay=shoppingCart.reduce( (acc,item) =>acc+ item.price,0)
console.log(priceToPay);