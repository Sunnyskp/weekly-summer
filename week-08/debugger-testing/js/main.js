// Function: generateRandomInt(Number, [Number=0])
// Parameters:
//    total: The total number of integer options "between 0 and total"
//    offset: (Optional, default = 0) Shift the range positive or negative from 0
// Returns:
//    Number: random number that was generated
// Example:
//    generateRandomInt(6, 1); // returns: 1, 2, 3, 4, 5, or 6
const generateRandomInt = (total, offset = 0) => {

  const rand = Math.floor(Math.random() * total) + offset;

  // console.log( `Your number is: ${rand}` );
  console.log( total, offset, rand );

  return rand;
}

// Function: addToHistory(Array, roll)
// Parameters:
//    history: A refernce to an Array
//    val: Any value to add to the Array as part of an object
// Returns:
//    Boolean: true if it was successful, false otherwise
// Example:
//    addToHistory([], 1); 

Array.prototype.printAsConsoleTable = function() {
  console.table(this);
}

Array.prototype.getObjectsAsHtmlString = function() {
  // You will: Generalize this function so it can be used with any Array, not just a Roll
  // Start by: Check how many properties there are in this Object, get the "key"

  return this.map( row => {
    return `<li>
      <span>Roll: ${row.value}</span> <span>Time: ${row.time}</span>
    </li>
    `
  }).join(``)
}


Array.prototype.addToHistory = function(val) {

  // Store the original length of the history when we got it.
  const len = this.length;

  // Add a value to the history
  const newLen = this.push( { value: val, time: new Date() } );

  // Print the history
  this.printAsConsoleTable();

  // Returns a string of list items
  document.getElementById(`history`).innerHTML = this.getObjectsAsHtmlString();

  // Returns true if 1 value was added, false otherwise
  return (len + 1 == newLen);
}




const rollHistory = [];

//addToHistory( rollHistory, generateRandomInt(6, 1) )

document.getElementById(`doRolls`).addEventListener(`submit`, event => {

  // Prevent the form from forcing the browser to leave the page
  event.preventDefault();

  const num = document.getElementById(`rolls`).value;

  for (let i = 0; i < num; i++) {

    // Passing the array as parameter
    //addToHistory( rollHistory, generateRandomInt(6, 1) );

    // Array prototype method
    rollHistory.addToHistory( generateRandomInt(6, 1) );

    // Throw the debugger
    debugger;
  }

});





// Ask the user how many times they want to roll
// Each roll gets added to the history
    // Passing a reference
    // Building our own prototype function
    // Create a class
// Find the instances of certain rolls
// Find the average roll
// Find what percentage of each roll occurred
// Code Snippets in VS Code
// Creating Elements without using innerHTML
