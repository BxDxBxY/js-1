// function  worldBlanks( myNoun, adj, verb, adverb ) {
//     var result = "";
//     result += "The " + adj + " " + myNoun + " " + verb + " to the store " + adverb + ".";
//     return result;
// }
// console.log(worldBlanks("dog", "big", "run", "quickly" ));
// var myArray = ["Jack", "is", "good"];
// myArray.push("as", "fuck");
// console.log(myArray)
function first() {
    console.log("hi world")
}
first();
function minus(a, b) {
    console.log(a * b)    
}
var number = 5;
minus(10, 5)
function sum(num) {
    return num * 7;
}
console.log(sum(11))
function times(num) {
    number *= num;
    return number;
}
console.log(times(6))

function check(val, a) {
    if (val > 10) {
        return "true its more than 10";
    }
    if (val == a) {
        return "equal to zero";
    }
    return "false its less than 10";
}
console.log(check(-0, 0));
function twostatements(val) {
    if (val < 50 && val > 25){
        return "true";
    }
    return "false;"
}
console.log(twostatements(45))

function logicalor(val) {
    if (val < 10 || val > 20) {
        return "outside";
    }
    return "inside";
    
}
console.log(logicalor(21))

function testElse(num) {
    var result = "";
    
    if (num > 10) {
        return "true";
    } else {
        return "false";
    }
    
    return result;
}
console.log(testElse(9))

function testElseIf(val) {
    if (val < 5){
        return "less than 5"
    } else if (val < 10){
        return "less than 10"
    }
    else if (val == 100) {
        return "equal to 100"
    }   
    else {
        return "between 5 and 10"
    }
}
console.log(testElseIf(100))
function task1(val) {
    var result = "";
    if (val < 5) {
        return "tiny";
    } else if (val < 10) {
        return "small";
    } else if (val < 15) {
        return "medium";
    } else if (val < 20) {
        return "large";
    } else if (val > 1000) {
        return "over 1000";
    } else if (val > 100000) {
        return "over 100000";
    } else if (val >= 20) {
        return "huge";
    }
    return result;
}
console.log(task1(100002))

var names = [ "Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"]
function golfscore (par, stroke) {
    if (stroke == 1) {
        return names[0]
    } else if (stroke <= par - 2) {
        return names[1]
    } else if (stroke == par - 1) {
        return names[2]
    } else if (stroke == par) {
        return names[3]
    } else if (stroke == par + 1) {
        return names[4]
    } else if (stroke == par + 2) {
        return names[5]
    } else if (stroke >= par + 3) {
        return names[6]
    }
}
console.log(golfscore(100, 100));

function caseInSwitch(val) {
    var answer = "";
    switch (val) {  
        case 1:
        answer = "alpha";
        break;
        case 2:
        answer = "beta";
        break;
        case 3:
        answer = "gamma";
        break;
        case 4:
        answer = "delta";
        break;
        default : 
        answer = "SIGMA";
        break;
    }
    return answer;
}
console.log(caseInSwitch(9))

function caseInSwitch2(val) {
    var answer = "";
    switch (val) {  
        case "a":
        answer = "apple";
        break;
        case "b":
        answer = "bird";
        break;
        case "c":
        answer = "cat";
        break;
        default : 
        answer = "ANIMAL";
        break; 
    }
    return answer;
}
console.log(caseInSwitch2("b"));

function caseInSwitch3(val) {
    var answer = "";
    switch (val) {  
            case 1:
            case 2:
            case 3:
            answer = "low";
            break;
            case 4:
                case 5:
                    case 6:
                        answer = "medium";
                        break;
                    case 7:
                        case 8:
                            case 9:
                                answer = "high";
                                break;
                                default:
                                    answer = "undefined";
                                    break;
    }
    return answer;
}
console.log(caseInSwitch3(9));
 
function isless(a, b) {
    // return a < b;
    return a / b
}
console.log(isless(0, 0));

function isgreater(a, b) {
    return a * b;
}
console.log(isgreater(20, 40) + 'm');

function isequal(a) {
    return a ** 2;
}
console.log(isequal(9));

function square(a) {
    return a ** 2;
}
console.log(square(10));

console.log((isequal(9) + square(8)) % 2);


// document.getElementById("myBtn").onclick = function() {myFunction()};

// function myFunction() {
//   document.getElementById("myDropdown").classList.toggle("show");
// }

// var task = Number(prompt("Please enter"));
// if (task >= 120) {
//     console.log("oq yol");
// }
// else{
//     console.log("nope");
// }


function comparison (age) {
    var result = "";
    if (age <= 8) {
        result = "fuck off u littlee dumbasshole";
    } else if (age > 8 && age <= 15) {
        result = "Yosh bola";
    } else if (age > 15 && age <= 25) {
        result = "voyaga yetgan"
    }  else if (age > 25 && age <= 40) {
        result = "orta yosh"
    } else if (age > 40 && age <= 60) {
        result = "yoshi katta"
    } else if (age > 60 && age <= 80) { 
        result = "oqsoqol"
    } else if (age > 80 ) {
      result = "umriz uzoq bolsin"
    } else{
        result = "fuck off MF";
    }
    return result ;
}
console.log(comparison (500) );
