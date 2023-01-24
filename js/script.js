const numberOfFilms = prompt('Cate filme ati privit deja?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt("Unul dintre filmele privite anterior?", ""),
          b = prompt("Ce nota ia-ti da?", "");

    if (a != null && b != null && a != "" && b != "" && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log("Prea putine filme");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Sunteti utilizator clasic");
} else if (personalMovieDB.count >= 30) {
    console.log("sunteti chinoman");
} else {
    console.log("Error")
}

console.log(personalMovieDB);