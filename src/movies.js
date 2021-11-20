// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
/*
EXPLICACION ANDRE!!!!!!!!!!

MAP take a list and run the function you introduce in every element of the a
creating a new array

const list = ['1', '2', '3'];

const listInts = list.map((item) =>)

FILTER
REDUCE

THE GOAL OF REDUCE IS TO REDUCE MY ARRAY LIST TO A SINGLE VALUE

SORT
FIND

FUNCTIONAL PROGRAMMING / IMPERATIVE PROGRAMMING / OBJECT ORIENTED PROGRAMMING



*/



const movies = require('./data');





function getAllDirectors(movies) {
  return movies.map(function (item) {
    return item.director;
  })
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(listOfMovies) {
  if (listOfMovies.length === 0) {
    return 0;
  } else {
    const dramasOfSpielberg = listOfMovies.filter(function (item) {
      return (
        item.director === 'Steven Spielberg' && item.genre.includes('Drama')
      );
    });

    return dramasOfSpielberg.length;
  }
}


  // Iteration 3: All scores average - Get the average of all scores with 2 decimals
  function scoresAverage(listOfMovies) {
    if (listOfMovies.length === 0){
      return 0;
    }   
    const correctObjects = listOfMovies.filter(function(item){
      return typeof item.score === 'number';
    }
    )

    const sum = listOfMovies.reduce(function (previousValue, currentValue){
      return previousValue + currentValue.score;
    }, 0);
    const average = sum / listOfMovies.length;
    const withTwoDecimals = average.toFixed(2);
    const toNumber = parseFloat(withTwoDecimals);
    return toNumber;
   }
  
  // Iteration 4: Drama movies - Get the average of Drama Movies
  function dramaMoviesScore(listOfMovies) {
    const dramaMovies = listOfMovies.filter(function(item){
      return item.genre.includes('Drama')
    })
    if(dramaMovies.length===0){
      return 0
    }
    const totalSum = dramaMovies.reduce(function(previousValue, currentValue){
      return previousValue + currentValue.score;},0)  
    const average = totalSum / dramaMovies.length;
    const fixedAverage = average.toFixed(2)
    const toNumberWithDecimals = parseFloat(fixedAverage)
    return toNumberWithDecimals
  }

  // Iteration 5: Ordering by year - Order by year, ascending (in growing order)
  function orderByYear(listOfMovies) {
    const newListOfMovies = [...listOfMovies];
    newListOfMovies.sort(function (a, b) {
      if (a.year < b.year) {
        return -1;
      }
  
      if (a.year > b.year) {
        return 1;
      }
  
      if (a.year === b.year) {
        if (a.title < b.title) {
          return -1;
        } else {
          return 1;
        }
      }
    });
  
    return newListOfMovies;
  }

  // Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
  function orderAlphabetically(listOfMovies) {
    const newListOfMovies = [...listOfMovies];
  
    if (newListOfMovies.length === 1) {
      return newListOfMovies[0].title;
    }
  
    if (newListOfMovies.length > 20) {
      newListOfMovies.sort(function (a, b) {
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }
        if (a.title === b.title) {
          return 0;
        }
      });
  
      const listWith20Elements = newListOfMovies.filter(function (item, index) {
        if (index < 20) {
          return item;
        }
      });
  
      const mappedTitles = listWith20Elements.map(function (item) {
        return item.title;
      });
  
      return mappedTitles;
    } else {
      // array with less than 20 elements
      const mappedTitles = newListOfMovies.map(function (item) {
        return item.title;
      });
  
      mappedTitles.sort();
  
      return mappedTitles;
    }
  }

  // BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
  function turnHoursToMinutes() { }

  // BONUS - Iteration 8: Best yearly score average - Best yearly score average
  function bestYearAvg() { }



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
