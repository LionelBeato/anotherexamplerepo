var http = require('http');



let a = 15      // declaring variables
let b = 32

http.createServer(function (req, res) {
    res.write('Hello World!'); //write a response to the client
    res.end(); //end the response
  }).listen(8080); //the server object listens on port 8080

  
console.log(`the sume of ${a} and ${b} is ${a+b}`)

// var div = document.createElement("div");                            // Create a <div> element
// div.innerHTML = `the sume of ${a} and ${b} is ${a+b}`;              // Insert text
// document.getElementById("myCol").appendChild(div);                                   // Append <div> to <body>