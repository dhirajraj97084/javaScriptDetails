const getDate=new Date;  //intialization of date  <Note=> it is a object type
console.log(typeof getDate)

//method to execute the date time in this formate
console.log(getDate); //2024-09-13T02:52:45.282Z
console.log(getDate.toDateString());  //Fri Sep 13 2024
console.log(getDate.toLocaleDateString()); //=> 9/13/2024
console.log(getDate.toISOString()); // 2024-09-13T02:54:19.792Z
console.log(getDate.toLocaleTimeString()); // 8:24:19 AM
console.log(getDate.toString()); //Fri Sep 13 2024 08:24:19 GMT+0530 (India Standard Time)

console.log("anothe method to execute");

const getimeStamp=Date.now(); 
console.log(getimeStamp);
console.log(getimeStamp.toLocaleString());
console.log(getimeStamp.toLocaleString());
