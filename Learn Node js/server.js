// var http = require("http");
// http.createServer(function (req, res) {
//     res.write("GG ki Pathshala!!!!");
//     res.end();
// }).listen(8080);


const { log } = require("console");
var path = require("path");
// console.log(path.basename(__dirname));
// console.log(__dirname);

// console.log(path.delimiter);
// console.log(path.dirname); //[Function: dirname]
// console.log(path.dirname("users/gg/new folder/index.js")); //users/gg/new folder
// console.log(path.basename("users/gg/new folder/index.js")); // index.js



// console.log(path.join("/users", "/new folder", "/index.html"))

let logPath = (path.join(__dirname, "/logs", "/logs.txt"));
let assesPath = (path.join(__dirname, "/assets", "/images"));

console.log(assesPath);


console.log(path.isAbsolute('C:\\Users\lalit\go\bin')) //true
console.log(path.isAbsolute('./index.html')) //false
console.log(path.isAbsolute('/index.html')) //true start from root 

