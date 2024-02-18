// for

// for(let index = 0;index<10; index++){
//     const ele=index;
//     if(ele == 5){
//         console.log("5 is best number");
//     }
//     console.log(ele);
// }

// for(let i=0;i<=10;i++){
//     console.log(`outer loop value : ${i}`);
//     for(j=0;j<=10;j++){
//         // console.log(`inner loop value ${j} and inner loop ${i}`);
//         console.log(i+"*"+j+" = "+i*j);
//     }
// }

let myArray = ["flash","batmen","superman"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    if (index == 1){
        console.log("pppp");
        break;
    }
    console.log(element);
    
}