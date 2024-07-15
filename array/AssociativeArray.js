// const person=[];
// person[0]="Pankaj";
// person[1]="Saurabh";
// person[2]=34;
// person[3]="Mp nagar zone 1";
// document.write(person[2] + " "+person.length);







// WARNING !!
// If you use named indexes, JavaScript will redefine the array to an object.

// After that, some array methods and properties will produce incorrect results
const person = [];
person["firstName"] = "John";
person["lastName"] = "Doe";
person["age"] = 46;
person.length;     // Will return 0
document.write(person[""]+""+person.length);   