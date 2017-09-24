// problem: We need a simple way to look at a user's budge count and a javascript point from a web browser

// solution: Use Node.Js to perform the profile look ups and serve our templete via http


// 1- create a web server:
var http = require('http');
const server = http.createServer((request, response) => {
  response.writeHead(200, {'Content-Type' : 'Text/Plain'});
  setInterval(function(){
      response.write(new Date() + '\n');
  }, 1000);// get the date of the response every 1 second


//response.end('Hello World\n ');

}).listen(3000);
console.log('Server running at http://<Workspace-url>/');

// 2- handle the http route GET / and  POST / i.e Home
  // if url == "/" && GET
    // show the searsh field
  // if url == "/" && POST
    //redirect to /:username

// 3- handle the HTTP rout GET /:username  i.e /omarnizamaldeen
  // if url == "/..."
    //get JSON from treehouse
      //on "end"
        // show profile
      // on "error"
        // show error


// 4- function that handles the reading of files and merge in value
  // read from file and get a string
    // merge values in to string
