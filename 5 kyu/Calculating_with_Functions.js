function zero(n) {
    function calcFunc (a, n){
       if (n == undefined){
           return a;
       }  else {
           return n(a);
       }
    }
    return calcFunc (0, n);
}
function one(n) {
    function calcFunc (a, n){
       if (n == undefined){
           return a;
       }  else {
           return n(a);
       }
    }
    return calcFunc (1, n);
}
function two(n) {
    function calcFunc (a, n){
       if (n == undefined){
           return a;
       }  else {
           return n(a);
       }
    }
    return calcFunc (2, n);
}
function three(n) {
    function calcFunc (a, n){
       if (n == undefined){
           return a;
       }  else {
           return n(a);
       }
    }
    return calcFunc (3, n);
}
function four(n) {
    function calcFunc (a, n){
       if (n == undefined){
           return a;
       }  else {
           return n(a);
       }
    }
    return calcFunc (4, n);
}
function five(n) {
    function calcFunc (a, n){
       if (n == undefined){
           return a;
       }  else {
           return n(a);
       }
    }
    return calcFunc (5, n);
}
function six(n) {
    function calcFunc (a, n){
       if (n == undefined){
           return a;
       }  else {
           return n(a);
       }
    }
    return calcFunc (6, n);
}
function seven(n) {
    function calcFunc (a, n){
       if (n == undefined){
           return a;
       }  else {
           return n(a);
       }
    }
    return calcFunc (7, n);
}
function eight(n) {
    function calcFunc (a, n){
       if (n == undefined){
           return a;
       }  else {
           return n(a);
       }
    }
    return calcFunc (8, n);
}
function nine(n) {
    function calcFunc (a, n){
       if (n == undefined){
           return a;
       }  else {
           return n(a);
       }
    }
    return calcFunc (9, n);
}

function plus(a) {
    return function (b){
        return a + b;  
    }
}
function minus(a) {
    return function (b){
        return b - a;  
    }
}
function times(a) {
    return function (b){
        return a * b;  
    }
}
function dividedBy(a) {
    return function (b){
        return b / a;  
    }
}
