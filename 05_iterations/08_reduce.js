const myNums = [1,2,3]

// const myTotal = myNums.reduce( function(acc,curr_val){
//     console.log(`acc : ${acc} and curr_val : ${curr_val}`);
//     return acc+curr_val
// },0)
const myTotal = myNums.reduce( (acc,curr_value) => acc+curr_value,0)
console.log(myTotal);


const shoppingCart = [
    {
        itemName : "JS course",
        price : 2999
    },
    {
        itemName : "python course",
        price : 999
    },
    {
        itemName : "web dev course",
        price : 4999
    },
    {
        itemName :"Data science course",
        price : 12999
    }
]
let priceToPay =shoppingCart.reduce( (acc,item) => acc+item.price,0 )
console.log(priceToPay);