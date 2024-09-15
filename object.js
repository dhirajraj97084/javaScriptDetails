const intSymbol=Symbol("dhirajraj");
//create objects
const details={
    name:"dhiraj",  
    "intSymbol":"neeraj",
    email:"dhiraj@gmail.com",
    password:"dhiraj123",
    isAdmine:false
}

console.log(details); // all the object key access
console.log(details.email); //method 01 to access single object key
console.log(details["email"]) //method 02 to access single object key

const getdetails=`hello my name is ${details.name}`;
console.log(getdetails);
console.log(details["intSymbol"] ,typeof intSymbol);