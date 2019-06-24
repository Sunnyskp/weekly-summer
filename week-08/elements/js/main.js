const $items = document.getElementById(`items`);  // the <ul>
const arrOfNums = [3, 5, 7, 1, 6, 8];

// For each value in arrOfNums, we should have one <li> shown to the user in <ul id="items"></ul>


let theWholeList = document.createDocumentFragment();

arrOfNums.forEach( n => {

  // Create a new HTML element
  const item = document.createElement(`li`);
  item.innerText = n;
  item.dataset.movieid = n;
  item.addEventListener(`click`, event => {
    item.classList.toggle(`clicked`);
    // Do a XHR request for this item
    console.log( `Go to some url with this movieid: `, item.dataset.movieid );
  });

  // Print the element as an Element (not a string)
  console.dir(item);
  
  // Add the item to the document
  theWholeList.appendChild(item);
  
});

$items.appendChild(theWholeList);


/*
// Map each array value to a string, add to innerHTML of the ul
$items.innerHTML = arrOfNums.map( n => `<li>${n}</li>` ).join(``);

// Add an event listener to each list item individually
document.querySelectorAll(`#items > li`).forEach(item => {
  item.addEventListener(`click`, event => {
    item.classList.toggle(`clicked`)
  })
})
*/

/*
const tempString = ``;

arrOfNums.forEach( n => {
  tempString += `<li>${n}</li>`;
});

$items.innerHTML = tempString;
*/


/*
const someFunction = (n) => {
  return `<li>${n}</li>`
};

arrOfNums.forEach( n => {
  $items.innerHTML += someFunction(n);
});
*/

/*
arrOfNums.forEach( n => {
  $items.innerHTML += `<li>${n}</li>`;
});
*/



