//Immediately Invoked function Expression (IIFE)

(function chai(){
    //Named IIFE
    console.log("DB CONNECTED");
})();

// ()()
(  ()=>{
    //Unnamed IIFE
    console.log("DB CONNECTED TWO");
})();

(  (name)=>{
    console.log(`DB CONNECTED TWO ${name}`);
})("Mohit")
/* Above is the syntax of IIFE when you want to write more than two iife you have to use semicolon 
*/