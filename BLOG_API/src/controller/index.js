const express = require('express');

const app = express();
const port = 4000


app.use(express.json());
app.use(express.urlencoded({
    extended:true
}))

let blog = [];
let id = 0;
const today = new Date();
const dd = String(today.getDate()).padStart(2, '0');
const mm = String(today.getMonth() + 1).padStart(2, '0');
const yyyy = today.getFullYear();
const blogDate = dd + '/' + mm + '/' + yyyy;



//Home
app.get('/', (req,res) => {
    // res.end('This is getting interesting')
    res.status(200).json({
        status: 'success',
        message: 'Welcome to My Blog',
        data: []
    })
})

//CRUD STARTS
//C- Create (POST)
app.post('/addblog', (req, res) => {
    // const { body: { colour } } = req
    const comment = req.body
    const blogId = id
    const blogContent = { id:blogId, ...comment, blogDate}
    blog.push(blogContent)
    id++
    res.status(200).json({
        status: 'success',
        message: `Added blog ${id}`,
        data: blog
    })
})

//R- Read (Get all blogs)
app.get('/blog', (req, res)=> {
    res.status(200).json({
        status: 'success',
        message: 'Welcome to My Blog',
        data: blog
    })
})


//endpoint that gets blog by id (array index)
const getBlogbyIndex = (req, res, next) => {
    const {params: { id }} = req
    const myBlog = blog[id]

    if (!myBlog) {
        return    res.status(404).json({
            status: 'success',
            message: 'This blog is not available',
            data: []
        })  
    } 
    req.myBlog = myBlog
    req.id = id
    return next()

}

app.get('/blog/:id', getBlogbyIndex, (req,res) => {
    const myBlog = req.myBlog

    res.status(200).json({
        status: 'success',
        message: 'Awesome!, Blog Found',
        data: myBlog
    })
})

//U- Update (endpoint to Update/edit blog)
app.put('/blog/:id', getBlogbyIndex, (req,res) => {
    const myBlog = req.myBlog
    const updatedBlog = req.body.myBlog
    const formerBlog = req.myBlog
    const id = req.id
    blog[id] = updatedBlog

    res.status(200).json({
        status:'success',
        message:`Updated the comment from ${formerBlog} to ${updatedBlog}`,
        data: blog
    })
})

//D-delete (endpoint to delete blog)
app.delete('/blog/:id', getBlogbyIndex, (req,res) => {
    const id = req.id
    blog.splice(id,1) 

    res.status(200).json({
        status:'success',
        message:`Deleted the blog at index ${id}`,
        data: blog
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

app.listen(port, ()=>{
    console.log(`NodeJs server listening on port ${port}...`)
})