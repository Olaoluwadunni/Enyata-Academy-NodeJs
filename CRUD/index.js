const express = require('express');

const app = express();
const port = 5000

app.use(express.json());
app.use(express.urlencoded({
    extended:true
}))

let colour = []

//CRUD C- CREATE R-READ U-UPDATE D-DELETE
app.get('/', (req,res) => {
    // res.end('This is getting interesting')
    res.status(200).json({
        status: 'success',
        message: 'Welcome to CRUD',
        data: []
    })
})

// endpoint that adds color 
app.post('/addcolor', (req, res) => {
    // const { body: { colour } } = req
    const response = req.body.colour
    // console.log(response)
    colour.push(response)
    
    res.status(201).json({
        status: 'success',
        message: `Added color ${response}`,
        data: colour
    })
})

//endpoint that gets all colours
app.get('/colors', (req,res) => {
    res.status(200).json({
        status: 'success',
        message: 'Welcome to CRUD',
        data: colour
    })
})

const getColorbyIndex = (req, res, next) => {
    const {params: { id }} = req

    const color = colour[id]

    if (!color) {
        return    res.status(404).json({
            status: 'success',
            message: 'This color is not available',
            data: []
        })  
    } 

    req.color = color
    req.id = id
    return next()
}

//endpoint that gets a color according to id (array index)
app.get('/color/:id', getColorbyIndex, (req,res) => {
        const color = req.color

        res.status(200).json({
            status: 'success',
            message: 'Awesome!, Color Found',
            data: color
        })
})

//endpoint to update colors
app.put('/color/:id', getColorbyIndex, (req,res) => {
    const updatedColor = req.body.colour
    const formerColor = req.color
    const id = req.id
    colour[id] = updatedColor

    res.status(200).json({
        status:'success',
        message:`Updated the color from ${formerColor} to ${updatedColor}`,
        data: colour
    })
})
  
//endpoint to delete colors
app.delete('/color/:id', getColorbyIndex, (req,res) => {
    const id = req.id
    colour.splice(id,1) 

    res.status(200).json({
        status:'success',
        message:`Deleted the color at ${id}`,
        data: colour
    })
})

// Error handling middleware
app.use((req, res) => {
    res.send('Not Found')
})

app.use((err, req, res, next) => {
    console.log(err)
    res.send(err.message)
})

app.listen(port,()=> console.log(`Server is running on port ${port}`))