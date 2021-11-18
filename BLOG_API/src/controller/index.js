
let {blog, id, blogDate} = require('../services');
//C- Create (POST)
const createBlog = async(req,res, next) => {
    try {
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
        
    } catch (error) {
        return next(error)   
    }
}

const getBlog = async(req, res, next) => {
    try {
            res.status(200).json({
            status: 'success',
            message: 'Welcome to My Blog',
            data: blog
        })
    } catch (error) {
        
    }
}

const getIndividualBlog = async(req, res, next) => {
    try {
        const myBlog = req.myBlog
        res.status(200).json({
        status: 'success',
        message: 'Awesome!, Blog Found',
        data: myBlog
        })
    } catch (error) {
        return next(error)
    }
}


const updateBlog = async(req, res, next) => {
    try {
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
        
    } catch (error) {
        return next(error)
    }
}

const deleteBlog = async(req, res, next) => {
    try {
        const id = req.id
        blog.splice(id,1) 
        
        res.status(200).json({
        status:'success',
        message:`Deleted the blog at index ${id}`,
        data: blog
    })
        
    } catch (error) {
        return next(error)
    }
}
//R- Read (Get all blogs)
// app.get('/blog', (req, res)=> {
//     res.status(200).json({
//         status: 'success',
//         message: 'Welcome to My Blog',
//         data: blog
//     })
// })



//Get individual blog
// app.get('/blog/:id', getBlogbyIndex, (req,res) => {
//     const myBlog = req.myBlog

//     res.status(200).json({
//         status: 'success',
//         message: 'Awesome!, Blog Found',
//         data: myBlog
//     })
// })

//U- Update (endpoint to Update/edit blog)
// app.put('/blog/:id', getBlogbyIndex, (req,res) => {
//     const myBlog = req.myBlog
//     const updatedBlog = req.body.myBlog
//     const formerBlog = req.myBlog
//     const id = req.id
//     blog[id] = updatedBlog

//     res.status(200).json({
//         status:'success',
//         message:`Updated the comment from ${formerBlog} to ${updatedBlog}`,
//         data: blog
//     })
// })

// //D-delete (endpoint to delete blog)
// app.delete('/blog/:id', getBlogbyIndex, (req,res) => {
//     const id = req.id
//     blog.splice(id,1) 

//     res.status(200).json({
//         status:'success',
//         message:`Deleted the blog at index ${id}`,
//         data: blog
//     })
// })
module.exports = {
    createBlog,
    getBlog,
    getIndividualBlog,
    updateBlog,
    deleteBlog
}