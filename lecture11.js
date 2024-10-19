const name ="ashish"
const repoCount = 50
// console.log(name+repoCount+"Value");
console.log(`hello my name is ${name} and my repo c ount is $ {repoCount}`);
const gameName = new String('ashish')
// console.log(gameName[0]);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(4));
// console.log(gameName.indexof('t'));
//write down a method of strings 
const newString = gameName.substring(0,4)
console.log(newString);
const anotherString = gameName.slice(-8,4)
console.log(anotherString);
const newStringOne = " ashish "
console.log(newStringOne.trim());
const url = "https://ashish.com/ashish%20sinha"
console.log(url.replace('%20','-'))
console.log(gameName.split('-'));
