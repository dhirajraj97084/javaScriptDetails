const arr=[2,4,5,"dhiraj",true,3.5]; //store multiple type or single type of variable in a singe variable is called array
console.log(arr);
console.log(arr[1]) // in array ,4 is index 1
console.log(arr[3]) // in array ,dhiraj is index 3

const arr1=[2,3,["subarray","array","indexing",["subinner","name"]],"hello"]; //multiple array in a single array

console.log(arr1 , arr1[2]);

console.log(arr1.flat(Infinity));//convert multiple array to single array
console.log(arr.length); //6
console.log(arr.includes("dhiraj"))//true

if (arr.includes("@")) {
    arr.push("tiwari");    
}else{
    arr.pop("3.5")
}
console.log(arr)

console.log(arr.length);

console.log(arr.reverse());

