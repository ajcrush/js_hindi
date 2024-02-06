let a = 300
var c = 300
if(true){
    let a = 10
    const b = 20
    // console.log("Inner :",a);
}



// console.log(a);
// console.log(b);
// console.log(c);



function one(){
    const username="Mohit"
    function two(){
        website="Youtube"
        // console.log(username);
    }
    // console.log(website);
    // two()
}

one()

if(true){
    const username="hitesh"
    if(username == "hitesh"){
        const website = " youtube"
        // console.log(username+website);
    }
    // console.log(website);
}
// console.log(username);

// +++++++++++++++++++++++++++ interesting ++++++++++++++++++++

function addone(num) {
    return num +1
}
addone(5)
//we can use  the function or call it before delaration

const addTwo = function(num){
    return num+2
}
addTwo(5)
//if we hold it on veriable then we cannot call the function before
// declaration

