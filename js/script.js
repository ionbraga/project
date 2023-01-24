
//primul tip de ciclu, se foloseste while
let num = 50;
while (num <= 55) {
    console.log(num);
    num++;
}


//al doilea tip de ciclu, diferenta fata de primu este ca aici se pune in fata sarcina de realizat apoi vine while

let nun = 50;
do {
    console.log(nun);
    nun++;
}
while (nun <= 55);


//al treilea tip de ciclu, for
let sas = 50;
for (let i = 1;i < 8; i++) {
    console.log(sas);
    sas++;
}

for (let i = 1; i < 10; i++) {
    if (i === 6) {
        break; //se opreste la 6
    }
    console.log(i);
}

for (let i = 1; i < 10; i++) {
    if (i === 6) {
        continue; // il trece pe 6 cu vederea
    }
    console.log(i);
}