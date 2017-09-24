var Profile = require("./profile.js");



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
    //get JSON from treehouse
    var studentProfile = new Profile(username);
    //on "end"
    studentProfile.on("end", function(profileJSON) {
      // show profile

      // store the values which we need
      var values = {
        avatarUrl: profileJSON.gravatar_url,
        username: profileJSON.profile_name,
        badges: profileJSON.badges.length,
        javascriptPoints: profileJSON.points.JavaScript
      }
      // simple response
      response.write(values.username + " has " + values.badges + " badges\n");
      response.end('Footer\n ');
    });

    // on "error"
    studentProfile.on("error", function(error) {
      // show error
      response.write(error.message + "\n");
      response.end('Footer\n ');

    });




  }
}


module.exports.home = home;
module.exports.user = user;
