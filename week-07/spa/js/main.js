// INDEX PAGE (SEARCH)


// SEARCH PAGE

// When a search is performed
const submitSearch = event => {
  // Prevent the page from submitting
  event.preventDefault();

  const query = document.getElementById('city').value;

  // Validate the information

  // TEAR DOWN THE SEARCH PAGE
  document.getElementById(`weather`).removeEventListener(`submit`, submitSearch);
  document.querySelector(`.page.index`).classList.remove(`current`);

  loadWeather(query);
}
document.getElementById(`weather`).addEventListener(`submit`, submitSearch);
document.querySelector(`.page.index`).classList.add(`current`);



// LOADING PAGE
const loadWeather = (q) => {
  // Simulating a loading page
  document.querySelector(`.page.loading`).classList.add(`current`);

  // Simulate XHR... when there's a stage change (4 == ready)
  setTimeout(() => {
    document.querySelector(`.page.loading`).classList.remove(`current`);
    loadResultPage(q)
  }, 1000);
}




// RESULT PAGE
const loadResultPage = (ctynm) => {

  if (!ctynm) {
    // No city name was provide, error!!
    return;
  }

  // SETUP THE RESULT PAGE
  document.getElementById(`cityname`).innerHTML = ctynm;

  document.getElementById(`back`).addEventListener(`click`, showSearchPage);
  document.querySelector(`.page.result`).classList.add(`current`);
}


// When I click "back" button...
const showSearchPage = event => {
  
  // TEAR DOWN THE RESULT PAGE
  document.getElementById(`back`).removeEventListener(`click`, showSearchPage);
  document.querySelector(`.page.result`).classList.remove(`current`);

  // SETUP THE SEARCH PAGE
  document.getElementById(`weather`).addEventListener(`submit`, submitSearch);
  document.querySelector(`.page.index`).classList.add(`current`);
}




/*
const parameters = window.location.search.substring(1).split(`&`).map(param => param.split(`=`));

console.log(parameters);

parameters.forEach( param => {
  console.log(`${param[0]}: ${param[1]}`);
})

// Using the information that was passed, make a request
document.getElementById(`cityname`).innerHTML = parameters[0][1];
*/