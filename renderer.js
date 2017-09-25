var fs = require("fs");

function mergeValues(values, content) {
  // Cycle over the keys of these values
  for (var key in values) {
   // Replace all {{key}} with the value from the values object
   content = content.replace("{{" + key + "}}", values[key]);
 }
   // return merged content
   return content;
}

function view(templeteName, values, response) {
  // Read from the templete file
  var fileContents = fs.readFileSync('./views/' + templeteName + '.html', {encoding: "utf8"});

   // Insert values in to the content
   fileContents = mergeValues(values, fileContents);
   // Write out to the response
   response.write(fileContents);

}

module.exports.view = view;
