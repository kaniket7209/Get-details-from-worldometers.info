const request = require('request');
console.log("Before");
request('http://www.google.com', cb);
function cb(error, response, body) {//response -> data
    console.error('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log('body:', body); // Print the HTML for the Google homepage.
};
console.log("After");
console.log("Meanwhile");