const name = "Mohit"
const repoCount = 50
// console.log(name +repoCount+"value")
// back tick (String interpolation)
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("hiteshhdc")

console.log(gameName[0].__proto__);

console.log(gameName.length);
console.log(gameName.toLocaleUpperCase());
console.log(gameName.charAt(3));

console.log(gameName.indexOf('i'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);


const newString1 = "    hitesh    "
console.log(newString1);
console.log(newString1.trim());

const url = "https://hitesh.com/hitesh%20choudhary"


console.log(url.replace("%20","_"));

console.log(url.includes("hihesh"))


const gameName1 =  new String("Mohit-Kumar-sharma")
console.log(gameName1.split("-"));



