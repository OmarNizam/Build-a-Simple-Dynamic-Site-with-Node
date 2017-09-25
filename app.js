var router = require('./router')
// problem: We need a simple way to look at a user's budge count and a javascript point from a web browser

// solution: Use Node.Js to perform the profile look ups and serve our templete via http


// Create a web server:
var http = require('http');
const server = http.createServer((request, response) => {
router.home(request, response);
router.user(request, response);
}).listen(3000);
console.log('Server running at http://localhost:3000/');




// function that handles the reading of files and merge in value
  // read from file and get a string
    // merge values in to string
