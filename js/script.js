"use strict";


// Динамическая типизация

// 1) To string
console.log(typeof(String(null)));
console.log(typeof(String(4)));

// Concatenare
console.log(typeof(5 + ""));
console.log(typeof(null + ""));

const num = 5;
console.log("https://vk.com/catalog/" + num);

const fontSize = 26 + 'px';

// 3) To number


console.log(typeof(Number('4')));
console.log(typeof(+'5'));

console.log(typeof(parseInt("15px", 10)));

let answer = +prompt("Hello", "");

// To boolean

// 0, '', null, undefined, NaN; - toate astea mereu vor fi false;

let switcher = null;
if (switcher) {
    console.log("Working...")
}
switcher = 1;

if (switcher) {
    console.log("Working...")
};

// 3.2
console.log(typeof(Boolean('4')));

// 3.3 
console.log(typeof(!!"4444"));