const userDetails={
    userName:"dhiraj",
    email:"dhiraj@gmail.com",
    userId:"abcd",
    
}
console.log(userDetails.email)
console.log(userDetails.userId)

// de_structuring of objects
const {userId,userName,email}=userDetails;
console.table([email , userName , userId])