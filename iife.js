(function one(){
    console.log("hello iife")
})();

(function two(){
    console.log("hello second iife")
})();

((name)=>{
    console.log(`hello arrow function with parameter iife is ${name}`)
})("ramesh");

(()=>{
    console.log(`*****databse connected successfully in mongodb******`)
})()