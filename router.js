// handle the http route GET / and  POST / i.e Home
function home(request, response) {
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



// handle the HTTP rout GET /:username  i.e /omarnizamaldeen
function user(request, response){
  // if url == "/..."
  var username = request.url.replace("/", "");
  if (username.length > 0) {
    response.writeHead(200, {'Content-Type' : 'Text/Plain'});
        response.write('Header\n');
        response.write(username + '\n');
        response.end('Footer\n ');
    //get JSON from treehouse
      //on "end"
        // show profile
      // on "error"
        // show error
  }
}


module.exports.home = home;
module.exports.user = user;
