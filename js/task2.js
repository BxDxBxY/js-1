// let a = 5
// let b = 3
// let c = 15
const styles = 'display: flex; margin: 10px; color: lightgreen; background-color: ; font-weight: bold; font-size: 20px; flex-direction: column; ';
const text = "Pasidigi qoshimcha uy ishi 'task-2'";
// let count = Math.pow( a, b) 
let random = Math.random() * 6  // random number generator for each iteration of the loop
random = parseInt(random) // convert to number of butun son

// let n = 4
// let sum = n - c
//     sum3 = Math.abs(sum) // convert to number of musbaat son nomanfiy

// let sum4 = a + b + c + sum

// console.log(sum2, sum3, sum4)   

// sum2 > b ? console.log (sum2 + " 3 dan katta") : sum2 == b ? console.log (sum2 + " 3 ga teng") : console.log (sum2 + " 3 dan kichik")

// random % 2 === 0 ? console.log (random + " jusft") : random % 2 != 0 ? console.log (random + " toq") : random % 2


// function sss() { 
//     if (random % 15 == 0) {
//         console.log (random + " bu son 3 va 5 bolinadi")
//     } else if (random % 3 == 0 ) {
//         console.log (random + " bu son 3 ga bolinadi") 
//     }  else if (random % 5 == 0) {
//         console.log (random + " bu son 5 ga bolinadi")
//     } else {
//         console.log(random + " bu son 3 ga ham va 5 ga bolinmaydi")
//     }
// } 
// console.log(sss());

// let a = 4
// let b = 5
// a = a + b
// b = a - b
// a = a - b
// console.log("a =>" + a);
//  console.log("b =>" + b);


//  var speed = 70
// function speed (speed) {
//     if (speed <= 70) {
//         console.log("Hammasi Yahshi")
//     } 
//     else if ((parseInt((speed / 5) - 14)) > 12 ){
//         console.log("guvohnoma chopildi")
//     }  
//     else if (speed > 70 && speed % 5 == 0) { 
//         console.log("point " + parseInt((speed / 5) - 14))
//     } else{
//         console.log( "point " + parseInt((speed / 5) - 14)) 
//     }
// }
// console.log(speed(98)) 


const text2 = "HomeWork 2 " + "Task 1";
const styles2 = 'color: slategray; background-color: black; font-weight: bold; font-size: 20px; padding: 10px; ';

window.console.log('%c%s', styles2, text2);


const a = Math.floor(Math.random() * 100)
const b = Math.floor(Math.random() * 100)
const aa = Math.random() * 100
const bb = Math.random() * 100
const cc = Math.random() * 100
const dd = Math.random() * 100
const ee = Math.random() * 100
const ff = Math.random() * 100

console.log('%c%s', styles, [a, b])

function task2() {
    if (a == b || a == -b || b == -a){
        console.log('%c%s', styles, a + " va " + b + " sonlar 5 ga birhil yaqinlikda") 
    } else if ( Math.abs(a) < Math.abs(b) ) {
        console.log('%c%s', styles, a + " bu son 5 ga " + b + " dan yaqin" )
    } else if ( Math.abs(a) > Math.abs(b)) {
        console.log('%c%s', styles, b + " bu son 5 ga " + a + " dan yaqin")
    } else {
        console.log('%c%s', styles, a,b + " - WDYM MAN? It's not a number!")
    }
}
console.log('%c%s', styles, task2())

// console.log("Pasidigi qoshimcha uy ishi 'task-2'" ,  "color: yellow; background-color: blue;")

console.log('%c%s', styles2, text);

const numbers = [aa, bb, cc, [dd], [ee], ff]
console.log('%c%s', styles, numbers)

function task2_2  (chose) { // chose from 0 to 4
    return result = Math.abs(Math.round(numbers[chose])) 
}
console.log('%c%s', styles, "array raqami " + random)

console.log('%c%s', styles, task2_2(random) + " bu javobi" )



