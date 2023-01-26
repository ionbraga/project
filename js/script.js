"use strict"

// ******** Pasul 1 ********* 

// const numberOfFilms = +prompt("Cate filme ati privit deja?", "");

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// const a = prompt("Unul din ultemele filme privite", ""),
//       b = prompt("Ce naotai-ati da?", ""),
//       c = prompt("Unul din ultemele filme privite", ""),
//       d = prompt("Ce naotai-ati da?", "");

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB); 



// ******** Pasul 2 ********* 

// const numberOfFilms = +prompt("Cate filme ati privit deja?", "");

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// for (let i = 0; i < 2; i++) {
//     const a = prompt("Unul din ultemele filme privite", ""),
//           b = prompt("Ce nata i-ati da?", "");

//           if (a != null && b != null && a != "" && b != "" && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log('done');
//           } else {
//             console.log('error');
//             i--;
//         }

// }

// if (personalMovieDB.count < 10) {
//     console.log("Ati privit destul de putine filme");
// } else if (personalMovieDB.count >= 10 && personalMovieDB < 30) {
//     console.log("Sunteti un utilizator clasic");
// } else if (personalMovieDB.count >= 30) {
//     console.log("Sunteti kinoman");
// } else {
//     console.log("A parut o eroare");
// }
 
// console.log(personalMovieDB); 



// ******** Pasul 3 ********* 

// let numberOfFilms;

// function start () {
//     numberOfFilms = +prompt("Cate filme ati privit deja?", ""); 

//     while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt("Cate filme ati privit deja?", "");
//     }
// }

// start();

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// function rememberMyFilms () {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt("Unul din ultemele filme privite", ""),
//               b = prompt("Ce nata i-ati da?", "");
    
//               if (a != null && b != null && a != "" && b != "" && a.length < 50) {
//                 personalMovieDB.movies[a] = b;
//                 console.log('done');
//               } else {
//                 console.log('error');
//                 i--;
//             }
//     }
// }

// rememberMyFilms();

// function detectPersonalLevel () {
//     if (personalMovieDB.count < 10) {
//         console.log("Ati privit destul de putine filme");
//     } else if (personalMovieDB.count >= 10 && personalMovieDB < 30) {
//         console.log("Sunteti un utilizator clasic");
//     } else if (personalMovieDB.count >= 30) {
//         console.log("Sunteti kinoman");
//     } else {
//         console.log("A parut o eroare");
//     }
// }
 
// detectPersonalLevel();

// function showMyDB (hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB);
//     }
// }
// showMyDB(personalMovieDB.privat);

// function writeYourGenres() {
//     for (let j = 1; j <= 3; j++) {
//         const genres = prompt(`Genul de filme preferat ${i}`);
//         personalMovieDB.genres[j - 1] = genres;
//     }
// }
// writeYourGenres();




// ******** Pasul 4 ********* 


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt("Cate filme ati privit deja?", ""); 
    
        while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Cate filme ati privit deja?", "");
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt("Unul din ultemele filme privite", ""),
                  b = prompt("Ce nata i-ati da?", "");
        
                  if (a != null && b != null && a != "" && b != "" && a.length < 50) {
                    personalMovieDB.movies[a] = b;
                    console.log('done');
                  } else {
                    console.log('error');
                    i--;
                }
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log("Ati privit destul de putine filme");
        } else if (personalMovieDB.count >= 10 && personalMovieDB < 30) {
            console.log("Sunteti un utilizator clasic");
        } else if (personalMovieDB.count >= 30) {
            console.log("Sunteti kinoman");
        } else {
            console.log("A parut o eroare");
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVizibileMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for (let j = 1; j <= 3; j++) {
            let genres = prompt(`Genul de filme preferate ${j}`);

            if (genres === '' || genres === null) {
                console.log('Ati introdus date incorecte');
                i--;
            } else {
                personalMovieDB.genres[j - 1] = genres;
            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Genul preferat ${i + 1} - este ${item}`)
        });
    }
};

