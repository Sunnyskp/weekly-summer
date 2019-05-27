
class House {
  constructor(rms, bthrms, winec = false) {
    this.rooms = rms;
    this.bathrooms = bthrms;
    this.winecellar = winec;
  }
  getFacts() {
    return `<div>Bathrooms: ${this.bathrooms}, Bedrooms: ${this.rooms}, Winecellar: ${this.winecellar}</div>`
  }
}


/*
function House(rms, bthrms, winec = false) {
  this.rooms = rms;
  this.bathrooms = bthrms;
  this.winecellar = winec;
  // this.getFacts = function() {
  //   return `<div>Bathrooms: ${this.bathrooms}, Bedrooms: ${this.rooms}, Winecellar: ${this.winecellar}</div>`
  // }
}
House.prototype.getFacts = function() {
  return `<div>Bathrooms: ${this.bathrooms}, Bedrooms: ${this.rooms}, Winecellar: ${this.winecellar}</div>`
}
*/


const waverlylane123 = new House(4, 2, true);
const waverlylane345 = new House(5, 3);


const street = [
  waverlylane123,
  waverlylane345,
  new House(3, 1),
]

document.getElementById(`street`).innerHTML = 
  street.map( house => house.getFacts() ).join(``);



/*
const waverlylane123 = {
  rooms: 4,
  bathrooms: 2,
  winecellar: true,
}

const waverlylane345 = {
  rooms: 5,
  bathroom: 3,
}

const street = [
  waverlylane123,
  waverlylane345,
  {
    rooms: 3,
    bathrooms: 1,
  }
]

console.log(street)

document.getElementById(`street`).innerHTML = 
  street.map( house => `<div>Rooms: ${house.bathrooms}</div>` ).join(''); */