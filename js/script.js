"use strict"
//  Какое будет выведено значение: let x = 5; alert( x++ ); ?
//  Чему равно такое выражение: [ ] + false - null + true ?
//  Что выведет этот код: let y = 1; let x = y = 2; alert(x); ?
//  Чему равна сумма [ ] + 1 + 2?
//  Что выведет этот код: alert( &quot;1&quot;[0] )?
//  Чему равно 2 &amp;&amp; 1 &amp;&amp; null &amp;&amp; 0 &amp;&amp; undefined ?
//  Есть ли разница между выражениями? !!( a &amp;&amp; b ) и (a &amp;&amp; b)?
//  Что выведет этот код: alert( null || 2 &amp;&amp; 3 || 4 ); ?
//  a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ?
//  Что выведет этот код: alert( +&quot;Infinity&quot; ); ?
//  Верно ли сравнение: &quot;Ёжик&quot; &gt; &quot;яблоко&quot;?
//  Чему равно 0 || &quot;&quot; || 2 || undefined || true || falsе ?

// let x = 5; alert( x++ ); // v-a raspunde cu 5, daca folosim ++5 vom avea 6


// [ ] + false - null + true - NaN


// let y = 1;
// let x = y = 2;
// alert(x);               raspuns 2


// console.log([] + 1 + 2); - raspuns "12"


// alert( "1"[0] ); - raspuns 1


// console.log(2 && 1 && null && 0 && undefined); - raspuns null deoarece && retine mereu false


// console.log(!!( 1 && 2) === ( 1 && 2)); - raspuns false, deoarece !! transforma in boolean


// alert(null || 2 && 3 || 4); - raspunsul e 3


// const a = [1, 2, 3];
// const b = [1, 2, 3]; raspunsul este false


// alert(+"infinity"); - number


// console.log("Arici" > "Mar"); - raspunsul este true


// console.log(0 || "" || 2 || undefined || true || false);