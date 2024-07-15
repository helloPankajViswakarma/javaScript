const myObj ={
    name:"Pankaj",
    age:30,
    cars:[
        {name:"ford",models:["Fiesta","fcous","Mustang"]},
        {name:"BMW",models:["320","x20","x5"]},
        {name:"flat",models:["500","Panda"]}

    ]

}
let x="";
for (let i in myObj.cars){
    x+=myObj.cars[i].name;
} 