// var http = require("http");
// http.createServer(function (req, res) {
//     res.write("GG ki Pathshala!!!!");
//     res.end();
// }).listen(8080);


// const { log } = require("console");
// var path = require("path");
// console.log(path.basename(__dirname));
// console.log(__dirname);

// console.log(path.delimiter);
// console.log(path.dirname); //[Function: dirname]
// console.log(path.dirname("users/gg/new folder/index.js")); //users/gg/new folder
// console.log(path.basename("users/gg/new folder/index.js")); // index.js



// console.log(path.join("/users", "/new folder", "/index.html"))

// let logPath = (path.join(__dirname, "/logs", "/logs.txt"));
// let assesPath = (path.join(__dirname, "/assets", "/images"));

// console.log(assesPath);


// console.log(path.isAbsolute('C:\\Users\lalit\go\bin')) //true
// console.log(path.isAbsolute('./index.html')) //false
// console.log(path.isAbsolute('/index.html')) //true start from root 


// var os = require("os");
// console.log(os.platform()); // win32
// console.log(os.arch());  // x64
// console.log(os.freemem());  
// console.log(os.hostname());  // hp
// console.log(os.userInfo());  
// console.log(os.cpus());  
// console.log(os.type());   // Windows_NT

const fs = require("fs")
const path = require("path")

console.log(__dirname);
// fs.writeFile()

fs.writeFile(path.join(__dirname, "/Logs", "log.txt"), "Logs!!", (err)=>{
    if (err) {
        console.error("Error Reading file");
    } else {
        console.log("Write successfully");
    }
})

fs.readFile('pw.txt', 'utf8', (err,data)=>{
    if (err) {
        console.error("Error Reading file");
    } else {
        console.log("File Read ", data);
    }
});
