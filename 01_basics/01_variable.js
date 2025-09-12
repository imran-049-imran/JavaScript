const accountId = 1234553
let accountEmail = "xyz@12gmail.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountState;

//accountId = 2 // not allowed
/* 
prefer not to use var because of issuse in block and functional scope..
*/
accountEmail = "hc@hc.com"
accountPassword = "123212"
accountCity = "mumbai"
console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])