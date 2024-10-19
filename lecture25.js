//code execute kaise ho ta hain 
//javascript execution context
// { } => global execution context
// function execution context
// eval execution context
//   let val1 =10
//   let val2 = 5
//   function addNum(num1,num2) {
//     let total = num1+num2
//     return total
//   }
//   let result1 = addNum(val1,val2)
//   let result2 = addNum(10,2)
//   1. global execution
//        this
//    2.memory phase
//    val1-undefined
//    val2-undefined
//    addNum-defination
//    result1-undefined
//    result2-undefined
//  3.execution phase
//  val1-10
//  val2-5
//  addNum -> new variable enviornment +
//  execution thread  
// memory phase val1,val2 both are undefined 
//total variable undefined
//execution context => num1-10 ,num2-5 ,total-15 
// nve + thread 
// execution phase
 

