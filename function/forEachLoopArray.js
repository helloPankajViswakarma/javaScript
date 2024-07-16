
//arr.forEach(callBackFunction)
// callback function :here isis a function execute for each element in th Array
// A call back is a function passed ass an argument to another function


// javascript pass the function parameter and value it is possiable to the 

// function abc(){
//     console.log("Hello");
// }
// function myFunction(abc){
//     return abc;
// }



let arr=["Array1","Array2","Array3"];
//let arr=[1,2,3,4,5];
 arr.forEach((val,idx,arr)=>{
   console.log(val.toUpperCase(),idx,arr);
 });

// arr.forEach(function printVal(val){
//     console.log(val);
// });