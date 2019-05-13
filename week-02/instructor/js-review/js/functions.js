// GLOBAL VARIABLE
const num = 12;


const getProduct = ( num1 = 0, num2 = 1 ) => {

  if (typeof num1 != `number` || typeof num2 != `number`) {
    throw 'This function only takes numbers';
    return false;
  }

  return num1 * num2;
}

// function getProduct( num1 = 0, num2 = 1 ) {
//   return num1 * num2;
// }

//const getProduct = ( num1 = 0, num2 = 1 ) => num1 * num2;


// console.log( `The product of 4 * 5 = ${ timesFive(4) }` );
console.log( `The product of 7 * ${num} = ${ getProduct( 7, num ) }` );
console.log( `The product of 7 * 5 = ${ getProduct( 7, 5 ) }` );