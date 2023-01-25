//function declaration

function showFirstMessage() {
    console.log("Hello World");
}

showFirstMessage();


let num = 20;

function showFirstMessage(test) {
    console.log(test);
    let num = 10;
}

showFirstMessage("Hello World");
console.log(num);


function calc(a, b) {
    return (a + b);
}

console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(3, 7));

function ret () {
    let num = 50;
    //
    return num;
}
const anotherNum = ret();
console.log(anotherNum);

//function expression
const logger = function() {
    console.log("hello");
};

logger();

//strelocinae functii

const calc = (a, b) => a + b;

const calc = (a, b) => {
    console.log('1');
    return a + b;
};




const udsCurr = 28;

function convert (amount, curr) {
    console.log(curr * amount);
}

convert(500, udsCurr);fu