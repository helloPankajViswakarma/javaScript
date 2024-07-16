// function myFunction(theObject){
//     theObject.make ="Toyota";
// }
// const mycar ={
//     make:"Honda",
//     model:"Accord",
//     year:1998,
// };
// console.log(mycar.make);
// myFunction(mycar);
// console.log(mycar.make)


//When you pass an array as a parameter
// function myFunction(theArr){
//     theArr[0]=30;
// }
// const arr=[45];

// console.log(arr[0]);
// myFunction(arr);
// console.log(arr[0]);


//Function expressions
// const square =function(number){
//     return number*number;
// };
// console.log(square(4));

//However, a name can be provided with a function expression
// const factorial =function fac(n){
//     return n<2 ? 1: n* fac(n-1); 
// }
// console.log(factorial(3));

//In JavaScript, a function can be defined based on a condition

let num = 0;
if(num === 0) {
    myfunc = function(theObject) {
        theObject.make = "Toyota";
    };
}

let mycar = { make: "Honda", model: "Accord", year: 1998 };
console.log(mycar.make); // Outputs: Honda

myfunc(mycar);
console.log(mycar.make); // Outputs: Toyota



