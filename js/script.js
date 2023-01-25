"use strict"

let numberOfFilms;

function start () {
    numberOfFilms = +prompt('Cate filme ati privit deja?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Cate filme ati privit deja?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms() {
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
}
rememberMyFilms();

function detectPersonalLevel () {
    if (personalMovieDB.count < 10) {
        console.log("Prea putine filme");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Sunteti utilizator clasic");
    } else if (personalMovieDB.count >= 30) {
        console.log("sunteti chinoman");
    } else {
        console.log("Error")
    }
}
detectPersonalLevel();

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] =  prompt(`Genul dumneavoastra preferat este sub nr. ${i}`);;
    }
}

writeYourGenres();

