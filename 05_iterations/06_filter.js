// const coding = ['js','java','ruby','cpp','python']

// coding.forEach( (item) =>{
//     console.log(item);
// })

const myNums =[1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter( (num) => num >4 )
// const newNums = myNums.filter( (num) => {
//     return num>4
// })
// const newNums = []
// myNums.forEach( (num) => {
//     if(num>4){
//         newNums.push(num)
//     }
// })

const books = [
    {title:"Book one", genre : 'fiction',publish : 1984,edition : 2004},
    {title:"Book two", genre : 'non-fiction',publish : 1992,edition : 2008},
    {title:"Book three", genre : 'History',publish : 2000,edition : 2007}
]

// let userBooks = books.filter( (bk) => bk.genre =='History')
// userBooks = books.filter( (bk) =>  bk.publish>=2000)
let userBooks = books.filter( (bk) => {
    return bk.publish >=1995 && bk.genre === "History"
})
console.log(userBooks);