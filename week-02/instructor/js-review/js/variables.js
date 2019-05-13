// Primative datatypes
let balance = 123.13; // Number
const username = `Humber College`; // String
const age = 19;
let isLoggedIn = true; // Boolean
// Also: null and undefined
let goesFirst = null; // If goesFirst is not set, then we know we should flip a coin
// "falsey": false, null, undefined, 0




// Complex datatypes: Arrays, Objects, Function


console.log(`${username} has $ ${balance}`);
console.log(balance, username, isLoggedIn);
balance = balance + 20;
console.log(balance);

console.log( `-------------------------------` );


// OPERATORS
// Arithmetic (return a number)
    // Binary: + - / * % ** = += -= /= */
    // Unary: ++ -- 
// Comparison (return true or false)
    // Binary: == === < <= > >= !=
    // Unary: !
// Logic (return true or false)
    // Binary: && ||

// I want to buy beer in Ontario
if ((balance > 12)  &&  (age >= 19)) {
    // Take beer home!
}
else {
    // No beer
}



//     BALANCE     AGE
// 1   true        true
// 2   false       false
// 3   false       true
// 4   true        false


// &&     TRUE   FALSE
// TRUE     T      F
// FALSE    F      F

// ||     TRUE   FALSE
// TRUE     T      T
// FALSE    T      F


const allUser = localStorage.getItem('user') || [];

allUser.forEach(u => {
    console.log(u.name)
})
