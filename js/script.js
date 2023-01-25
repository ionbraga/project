"use strict"

const str = "Test";
const arr = [1, 2, 3];
// console.log(arr.length);
// console.log(str[2]);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str);



const fruit = "Some fruit";
console.log(fruit.indexOf("fruit"));
console.log(fruit.indexOf("q"));


const logg = "Hello world";
console.log(logg.slice(6, 11));
console.log(logg.slice(6));
console.log(logg.slice(-5, -1));
console.log(logg.substring(4, 11));
console.log(logg.substr(6,5));



const num = 12.2;
console.log(Math.round(num));

const test = "12.2px";
console.log(parseInt(test));
console.log(parseFloat(test));