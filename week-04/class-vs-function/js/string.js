// class String {
//   constructor(someValue) {
//     this.value = someValue;
//   }
// }


const schoolname = `    HumBer college  `;


if ( schoolname.toLowerCase().trim().indexOf(`humber`) == -1 ) {
  console.log("You don't go to Humber");
}
else {
  console.log("You must attent Humber!")
}

// Seeing the above another way:
let schoolLower = schoolname.toLowerCase();
let schoolTrimmed = schoolLower.trim();
let schoolIndex = schoolTrimmed.indexOf(`humber`);

if ( schoolIndex == -1 ) {
  console.log("You don't go to Humber");
}
else {
  console.log("You must attent Humber!")
}
