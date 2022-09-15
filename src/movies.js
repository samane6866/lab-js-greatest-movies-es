const movies = require('./data.js');
// console.log(movies);

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const rawList = moviesArray.map((movie) => movie.director);

// para no repetir nombre de director
  const cleanList = rawList.filter((director, index) => {
    return rawList.indexOf(director) === index;
  });
  return cleanList;
}
console.log(getAllDirectors(moviesArray));

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
const howManyMovies2 = (moviesArray) => {
  const Steven = moviesArray.filter((movieItem) => {
    return movieItem.director === 'steven Spielberg';
  });
  const dramaMovies = Steven.filter((movie) => movie.genre.includes('Drama')); 
    
  
  return dramaMovies;
};
  console.log(howManyMovies(moviesArray));
  
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  const generalAverage = movies.reduce((x, y) => x + y, 0)  / movies.length;
  return generalAverage;
}
console.log(scoresAverage(moviesArray));

// Iteration 4: Drama movies - Get the average of Drama Movies
  
function dramaMoviesScore(moviesArray) {
  const dramaScore = 0;
  for (let i = 0; i < moviesArray.length; i++) {
    
  }

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
  function orderByYear(moviesArray) {
    const orderedList = moviesArray.sort((a, b) => a.year - b.year);
    return orderedList;
  }
  console.log(orderByYear(moviesArray));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
  function orderAlphabetically(moviesArray) {
  
    return moviesArray.map((movie) => movie.title).sort().slice(0, 20); 
  }
  console.log(orderAlphabetically(moviesArray));

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg
  };
}
