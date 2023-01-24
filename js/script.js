const numberOfFilms = +prompt('Cate filme ati privit deja?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt("Unul dintre filmele privite anterior?", ""),
      b = prompt("Ce nota ia-ti da?", ""),
      c = prompt("Unul dintre filmele privite anterior?", ""),
      d = prompt("Ce nota ia-ti da?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);