const express = require('express');

const app = express();
const router = express.Router();
const port = 4000

app.get('/', (req,res)=>{ //index route
    res.send('Lorem ipsum dolor sit amet, consectur!')
})

const logger = function(req, res, next){
    req.user = [{name: "ope"}]
    console.log("here")
    next()
}

// app.use('/happy', logger) //application level middleware

// app.get('/happy', (req, res)=> { //happy route
//     console.log(req.user)
//     // const { params: { name}} = req     
//     // console.log(params)
//     res.send(`Hello ${req.user[0].name}, how is NodeJs going!`)

//     // throw new Error('Hello Sweetie')
// })

// router.get('/about', (req, res)=> { //about route
//     res.send('We move')
// })

// app.use(router)

// //Error handling
// app.use((req, res)=> {
//     res.send('Not Found')
// })

// app.use((err,req,res,next) => {
//     console.log(err)
//     res.send('err.message')
// })

app.listen(port, ()=>{
    console.log(`NodeJs server listening on port ${port}...`)
})

//HTTP Server
// const http = require('http');
// const port = 4000;


// const server = http.createServer((request, response) => {
//     request.statusCode = 200
//     response.setHeader('Content-Type', 'text/plain')
//     response.end('Welcome to NodeJs!')
// })

// console.log(process.env.NAME)

// server.listen(port, () => {
//     console.log('NodeJs server listening on port 4000...')
// })