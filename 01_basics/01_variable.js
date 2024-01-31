const accountId = 144553
let accountEmail="Mohitanand8987@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"

// accountId = 2 // Not Allowed
accountEmail="hc@gmail.com"
accountPassword="21212121"
accountCity = "Bangalore"
console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity])