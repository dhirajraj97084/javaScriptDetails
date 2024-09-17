function add(a,b){
    return a+b;
}
//console.log(add(2,6));

function add(a,b){   
    console.log(a+b); //2  
}
// console.log("hello dhiraj bhai"); //1
// add(2,6);

function foo(){
   return "hello";
}


// const result=foo();
// console.log(result);

const getobject={
    name:"dhiraj",
    email:"dhiraj@gmail.com"
}

function getallObject(anyobject){
     return  `my name is ${anyobject.name} and my email is ${anyobject.email}`;
}
console.log(getallObject(getobject));


function number(...num){
    return num;
}
console.log(number(200,400,500,500));



