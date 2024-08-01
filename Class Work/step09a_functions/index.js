"use strict";
//Named function
function add(x, y) {
    return x + y;
}
console.log(add(10, 5));
//Anonymous function
let myAdd1 = function (x, y) {
    return x + y;
};
console.log(myAdd1(20, 5));
//Anonymous function with explict type
let myAdd2 = function (x, y) {
    return x + y;
};
console.log(myAdd2(30, 5));
//type names dont matter
let myAdd3 = function (x, y) {
    return x + y;
};
console.log(myAdd3(40, 5));
//Lambda functions															
let myAdd4 = (a, b) => a + b;
console.log(myAdd4(50, 5));
//output will be: var myAdd4 = function(a : number, b : number) {return a + b};
// Arrow Function
let Add = (x, y) => {
    return x + y;
};
console.log(Add(60, 5));
