// Arrays are Objects
// Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays.

// But, JavaScript arrays are best described as arrays.

// Arrays use numbers to access its "elements". In this example, person[0] returns John:






// const person=["John","Doe",450];
// console.log(person[0,1,2]);



//Objects use names to access its "members". In this example, person.firstName returns John:
const person ={
    firstName:"john",
    lastName:"Doe",
    age:46
};
document.getElementById("demo").innerHTML=(person["firstName"]);
document.write(person["age"]);

