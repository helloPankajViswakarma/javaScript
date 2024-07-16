//function

//function redendancy(repeat)
//Block of code that performs a specific task can be invoked(call) whenever needed

//function define
// function myFunction(){
//     console.log("This is the my first function method");
//     console.log("This is the my second function mehtod");
// }
// //function call (invoked)
// myFunction();

//undefined function
// function myFunction(){
//     //perameter- >input
// console.log(msg);
// }
// myFunction();


//function passed paramter and value
// function myFunction(msg){
//     document.write(msg);
// }
// myFunction("I love javaScript code");


//function print null value
// function myFunction(msg, n){
//     document.write(msg *n);
// }
// myFunction("I love javaScript",100);//argument


//Two number sum calculate
// function sum(x,y){
//     document.write(x*y);
// }
// sum(5,50);


//return keyword allways return a value example value is any form :array ,string,
function sum(x,y){
    //function parameter local variable ->block scope
    
    s=x+y;
    return s;
}
//retun key save the value in one variable and use any where
let val =sum(3,4);
document.write(val);