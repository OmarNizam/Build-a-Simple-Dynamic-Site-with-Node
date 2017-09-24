// problem: We need a simple way to look at a user's budge count and a javascript point from a web browser

// solution: Use Node.Js to perform the profile look ups and serve our templete via http


// 1- create a web server:
var http = require('http');
const server = http.createServer((request, response) => {


homeRoute(request, response);

}).listen(3000);
console.log('Server running at http://<Workspace-url>/');

// 2- handle the http route GET / and  POST / i.e Home
function homeRoute(request, response) {
  // if url == "/" && GET
  if (request.url === "/") {
    // show the searsh field
    response.writeHead(200, {'Content-Type' : 'Text/Plain'});
        response.write('Header\n');
        response.write('Search\n');
        response.end('Footer\n ');
  }
  // if url == "/" && POST
    //redirect to /:username
}


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
