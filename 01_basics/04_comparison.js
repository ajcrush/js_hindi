// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 != 1);

console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0 );
console.log(null == 0);
console.log(null >= 0);
/* The reason is that an equality check == and comparison
> < >= <= work differently.
Comparison convert null to a number treating as 0.
that's why (3) null >= 0 is true (1) null>0 is false 
*/


console.log(undefined == 0);
console.log(undefined >= 0);
console.log(undefined > 0);

// === strict check
console.log("2" === 2);