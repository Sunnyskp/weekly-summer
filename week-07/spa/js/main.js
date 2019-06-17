const parameters = window.location.search.substring(1).split(`&`).map(param => param.split(`=`));

console.log(parameters);

parameters.forEach( param => {
  console.log(`${param[0]}: ${param[1]}`);
})

// Using the information that was passed, make a request
document.getElementById(`cityname`).innerHTML = parameters[0][1];