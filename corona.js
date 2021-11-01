const request = require('request');
const cheerio = require('cheerio');
const chalk = require("chalk");
console.log('Befor');
request('https://www.worldometers.info/coronavirus/', cb);
function cb(error, response, html) {
    if (error) {
        console.log("Page 404 not found");
    } else {
        //   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        // console.log('body:', html); // Print the HTML for the Google homepage.
        handlehtml(html);
    }
};
console.log('After');
function handlehtml(html) {
    let selTool = cheerio.load(html);
    let h1s = selTool("h1");
    // console.log(h1s.length);
    let contentArr = selTool("#maincounter-wrap span");

    // for (let i = 0; i < contentArr.length; i++) {
    //     let data = selTool(contentArr[i]).text();
    //     console.log("data",data);
    // }
    let total = selTool(contentArr[0]).text();
    let deaths = selTool(contentArr[1]).text();
    let recovered = selTool(contentArr[2]).text();
    console.log("Coronavirus Cases: "+"\n"+chalk.bgWhiteBright(total));
    console.log("Deaths: "+"\n"+chalk.bgWhiteBright(deaths));
    console.log("Recovered: "+"\n"+chalk.bgWhiteBright(recovered));

}