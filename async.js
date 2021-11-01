const fs = require("fs");
//async
console.log("Before");

// let data = fs.readFileSync("abc.txt");
// console.log(""+data);
fs.readFile("abc.txt", cb);
function cb(error, response) {//response -> data
    // console.error('error:', error); // Print the error if one occurred
    console.log( ""+response ); // Print the response status code if a response was received
    // console.log('body:', body); // Print the HTML for the Google homepage.
};
console.log("After");
console.log("Mean while");