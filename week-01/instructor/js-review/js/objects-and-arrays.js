const firstUser = {  
  name: `Humber College`,
  age: 123,
}

// Making a copy of the refernce/pointer
const secondUser = firstUser;

secondUser.name = `Susan Roberton`;
secondUser.age = 24;



//               0  1  2   3   4
const number = [ 4, 6, 19, 34, 103 ];

number[1] = 9;
number[number.length] = 204;
number[number.length] = 234;
number[100] = 450;



// Counted loop (run something x times)
for ( let i = 0; i < number.length; i++ ) {
  if (number[i] != undefined)
  console.log( number[i] );
}

number.forEach( i => {
  console.log( i );
})


// Conditional Loops
let i = 0;
while ( i < number.length ) {
  console.log( number[i] );
  i++;
}

