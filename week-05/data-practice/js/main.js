/*
const mths = [`Jan`, `Feb`, `Mar`, `Apr`, `May`, `Jun`, `...`];
const days = [`Sun`, `Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat`];

let dateStr = `2019-06-10`;
//let dateStr = `Mon, June 3rd, 2019`;
let dateAr = dateStr.split(`-`);
let today = new Date( dateAr[0], (dateAr[1]-1), dateAr[2] );

const t = {
  day: days[today.getDay()],
  mth: mths[today.getMonth()],
  date: today.getDate(),
  year: today.getFullYear()
}


document.getElementById('curr-date').innerHTML = `${t.day}, ${t.mth} ${t.date}, ${t.year}`;
*/

// let today = new Date();

// const t = {
//   day: today.toLocaleDateString(`defult`, {weekday:`short`} ),
//   mth: today.toLocaleDateString(`defult`, {month:`short`} ),
//   date: today.toLocaleDateString(`defult`, {day:`2-digit`} ),
//   year: today.toLocaleDateString(`defult`, {year:`numeric`} ),

// }

// today.toLocaleDateString(`defult`, {weekday:`short`, month:`short`, day:`2-digit`, year:`numeric`});

// document.getElementById('curr-date').innerHTML = `${t.day}, ${t.mth} ${t.date}, ${t.year}`;


const setCurrentTime = () => {
  // Use JUST Javascript to get the current date
  document.getElementById('curr-date').innerHTML = new Date().toLocaleDateString(`defult`, {month:`short`, day:`2-digit`, year:`numeric`, weekday:`short`});
  // Use the Moment library to get the current time
  document.getElementById('curr-time').innerHTML = moment().format("HH:mm:ss");

}

// Run once
//setCurrentTime();

// Delay the calling of a function
//setTimeout(setCurrentTime, 1000);

// Run every 1-second (1000 ms)
let runningClock = setInterval(setCurrentTime, 1000);