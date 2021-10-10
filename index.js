// const http = require("http")
// const fs = require("fs")

// function onRequest(request, response){
//     response.writeHead(200, { "Content-Type": "text/html" })
//     fs.readFile("index.html", null, (error, data) => {
//         if (error) {
//             response.writeHead(404)
//             response.write("file not found")
//         } else {
//             response.write(data)
//         } response.end()
//     })
// }

//response json
// function onRequest(request, response){
//     response.writeHead(200, { "Content-Type" : "application/json"})
//     const data = {
//         name : "Yudi Kris",
//         age : 22
//     }
//     response.end(JSON.stringify(data))
// }

// http.createServer(onRequest).listen(8000)


///////BELAJAR EXPRESS JS
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World'))
app.listen(port, () => {
    console.log(`Server started on port:${port}`);
});