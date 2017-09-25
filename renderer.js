var fs = require("fs");

function view(templeteName, values, response) {
  // Read from the templete file
  var fileContents = fs.readFileSync('./views/' + templeteName + '.html');

   // Insert values in to the content

   // Write out to the response
   response.write(fileContents);

}

module.exports.view = view;
