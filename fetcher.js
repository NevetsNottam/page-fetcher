// take 2 command line arguments
// a URL & a local file path
// should download the resource at the URL to the local path on your machine
// On completion, it should print out a message like "Downloaded and saved 1235 bytes to ./index.html"

// need to make a http request and wait for response
// once http request is complete , take the data you receive and write it to a file in your local filesystem
// files size is equal to 1 character = 1 byte so file.length = file size
const fs = require('fs')
const request = require('request');
let arguments = process.argv.splice(2);
//console.log(arguments)

 request(`${arguments[0]}`, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:', body); // Print the HTML for the Google homepage.

  let content = body;
  
  console.log(`Downloaded and saved ${body.length} bytes to ./index.html`)
  
  fs.writeFile(`${arguments[1]}`, content, err => {
  if (err) {
    console.error(err)
    return
  }
})
});

