const fs = require("fs");
let text = fs.readFileSync("new.txt", "utf-8"); //Reading from a file
console.log(text);
text = text.replace("I am", "It is"); //Replacing text in the file
console.log(text);
text = fs.writeFileSync("newfile.txt", text);//Adding the new text to another file