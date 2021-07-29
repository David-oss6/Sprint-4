const movies = require("./data");


// Exercise 1: Get the array of all directors. ///////////////////////////////////
function getAllDirectors(movies) {
  const directorArray = movies.map(getDirector);

  function getDirector(movies) {
    return movies.director
  }

  return directorArray

}

// Exercise 2: Get the films of a certain director///////////////////////////////////
function getMoviesFromDirector(movies, director) {
  const moviesFromD = movies.filter(movie => movie.director == director)
  return moviesFromD

}

// Exercise 3: Calculate the average of the films of a given director./////////////////
function moviesAverageOfDirector(movies, director) {
  const moviesFromD = getMoviesFromDirector(movies, director)
  let averageScore = moviesFromD.reduce((ac, it) => {
    ac = ac + it.score
    return ac
  }, 0)
  averageScore = averageScore / moviesFromD.length;
  averageScore = averageScore.toFixed(2)
  return parseFloat(averageScore)

}

// Exercise 4:  Alphabetic order by title /////////////////////////////////////
function orderAlphabetically(movies) {

  // should return the top 20 after ordering them alphabetically.///-- ERROR  ----///////


  let sortedMovies = movies.map(obj => obj.title)

  sortedMovies = sortedMovies.sort(function (prev, next) {
    if (prev < next) { return -1 }
    if (prev > next) { return 1 }
    return 0
  })
  sortedMovies.slice(0, 20)

  return sortedMovies
}

// Exercise 5: Order by year, ascending /////////////////////////////////////////
function orderByYear(movies) {

  let orderMovies = movies.map(obj => obj)

  orderMovies.sort(function (prev, next) {
    if (prev.year < next.year) { return -1 }
    if (prev.year > next.year) { return 1 }
    if (prev.year === next.year) {
      if (prev.title < next.title) { return -1 }
      if (prev.title > next.title) { return 1 }
    }
    return 0
  })
  return orderMovies
}

// Exercise 6: Calculate the average of the movies in a category////////////////////////////
function moviesAverageByCategory(movies, category) {

  // should return average even if one of the movies does not have score-----ERROR-----------//

  let categoryArray = movies.filter(movie => movie.genre.includes(category))
  for (movie in categoryArray) {
    if (!movie.hasOwnProperty(score)) {
      categoryArray.splice(movie, 1)
    }
  }


  let averageScore = categoryArray.reduce((acc, it) => {
    acc = acc + it.score
    return acc
  }, 0)
  averageScore = averageScore / categoryArray.length;
  averageScore = averageScore.toFixed(2)
  return parseFloat(averageScore)
}

// Exercise 7: Modify the duration of movies to minutes////////////////////////////////////
function hoursToMinutes(movies) {

  //should return a new array, not update the original one -------------ERROR ------------
  //should return an array of movies with duration as a number

  let hourMin = movies.map(obj => obj)

  hourMin.forEach(movie => {
    let duration = movie.duration;
    let hour = duration.charAt(0);
    hour = parseInt(hour) * 60;
    let minute = 0;

    if (duration.length == 8) {
      let x = duration.charAt(3)
      let y = duration.charAt(4)
      let sum = x + y;
      sum = parseInt(sum)
      minute = sum;
    }
    if (duration.length == 7) {
      let x = duration.charAt(3)
      x = parseInt(x)
      minute = x;
    }
    movie.duration = parseInt(hour + minute)

  })
  return hourMin
}
// Exercise 8: Get the best film of a year///////////////////////////////////////////
function bestFilmOfYear(ano) {

  // should return the best film of a year, searching in an array
  let theBest = []
  let mejorPeli = {};
  let puntuacion = 0;
  let maxPuntuacion = 0;
  const yearMovies = movies.filter(x => x.year == ano)
  yearMovies.forEach(movie => {
    puntuacion = movie.score;
    if (puntuacion > maxPuntuacion) {
      maxPuntuacion = puntuacion
      mejorPeli = movie;
    }
    if (puntuacion == maxPuntuacion) {
      let a = mejorPeli.title.charAt(0);
      let b = movie.title.charAt(0);
      if (a < b) {
        mejorPeli = movie;
      }
    }

  })
  bestFilmOfYear(1957)
  theBest.push(mejorPeli)
  console.log(theBest)
  return theBest

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
