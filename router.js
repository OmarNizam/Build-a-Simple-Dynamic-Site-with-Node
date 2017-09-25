var Profile = require("./profile");
var renderer = require("./renderer")


// handle the http route GET / and  POST / i.e Home
function home(request, response) {
  // if url == "/" && GET
  if (request.url === "/") {
    // show the searsh field
    response.writeHead(200, {'Content-Type' : 'Text/Plain'});
    renderer.view("header", {}, response);
    renderer.view("search", {}, response);
    renderer.view("footer", {}, response);
    response.end();
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
    renderer.view("header", {}, response);
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
      renderer.view("profile", values, response);
      renderer.view("footer", {}, response);
      response.end();
    });

    // on "error"
    studentProfile.on("error", function(error) {
      // show error
      renderer.view("error", {errorMessage: error.message}, response);
      renderer.view("search", {}, response);
      renderer.view("footer", {}, response);
      response.end();

    });




  }
}


module.exports.home = home;
module.exports.user = user;
