// The `movies` array from the file `src/data.js`.
const movies = require("./data")
// console.log('movies: ', movies);


// Iteration 1: All directors? - Get the array of all directors.
// Bonus: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  let emptyDirectors = [];
  const directors = movies.map(x => x.director);
  directors.forEach(director => {
    if (emptyDirectors.indexOf(director)===-1) {
      emptyDirectors.push(director)
    }
  });
  return emptyDirectors;
};

console.log('Iteration 1:', getAllDirectors(movies))

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const steveMovies = movies.filter(movie => movie.director === "Steven Spielberg" && movie.genre.includes("Drama"))
  return steveMovies
}

console.log('Iteration 2:', howManyMovies(movies))


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  let reducedScore = movies.reduce(function (x, y) { return x + y.score
}, 0);
  return (reducedScore / movies.length).toFixed(2)
}

console.log('Iteration 3:', scoresAverage(movies))


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  const dramMovies = movies.filter(movie => movie.genre.includes("Drama"))
  return scoresAverage(dramMovies)
}

console.log('Iteration 4:', dramaMoviesScore(movies))


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const orderedMovies = movies.sort((x, y) => (-y.year + x.year));
  return orderedMovies
}

console.log('Iteration 5:', orderByYear(movies))


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  function compare_ab(a, b) {
    if (a.toLowerCase() < b.toLowerCase()) {
      return -1;
    }
    if (a.toLowerCase() > b.toLowerCase()) {
      return 1;
    }
    return 0;
  }
  const orderedTitles = movies.sort((x, y) => compare_ab(x.title, y.title));
  return orderedTitles.slice(20);
}

console.log('Iteration 6:', orderAlphabetically(movies))


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



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
    bestYearAvg,
  };
}
