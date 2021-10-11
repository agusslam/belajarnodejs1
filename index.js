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
// const express = require('express')
// const app = express()
// const port = 3000

//GET / akan diarahkan ke handler berikut
// app.get('/', (req, res) => {
//     res.send('Hello World')
// })

//GET /products akan diarahkan ke handleer ini
// app.get('/products', (req, res) => {
//      res.json(
//          [
//              "apple",
//              "mangga",
//              "rambutan"
//          ]
//      );
// })

//GET /orders akan diarahkan ke handler ini
// app.get('/orders', (req,res) => {
//     res.json([
//         {
//             id:1,
//             paid:false,
//             user_id:1
//         },
//         {
//             id:2,
//             paid:false,
//             user_id:2
//         },
//     ])
// })

// app.listen(3000, () => {
//     console.log(`Server started`);
// });







//COBA RESTFUL API
const express = require('express')
let posts = require('./db/posts.json')
const app = express()

//GET ALL
app.get('/api/v1/posts', (req, res) => {
    res.status(200).json(posts)
})

//GET BY ID
app.get('/api/v1/posts/:id', (req, res) => {
    const post = posts.find(i => i.id == +req.params.id)
    res.status(200).json(post)
})



app.listen(3000, () => {
    console.log('Server Oke di port 3000')
})
