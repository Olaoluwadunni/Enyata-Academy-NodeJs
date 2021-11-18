//endpoint that gets blog by id (array index)
// const getBlogbyIndex = (req, res, next) => {
//     try {
//         const {params: { id }} = req
//         const myBlog = blog[id]
    
//         if (!myBlog) {
//             return    res.status(404).json({
//                 status: 'success',
//                 message: 'This blog is not available',
//                 data: []
//             })  
//         } 
//         req.myBlog = myBlog
//         req.id = id
//         return next()
//     } catch (error) {
//         return next(error)
//     }
// }
// module.exports = {getBlogbyIndex}
// Get individual blog
const { getSingleBlog } = require('../services')

const validateBlogById = async (req, res, next) => {
    try {
        const { params: { id }} = req
        const blog = await getSingleBlog(id)


        if (blog.length < 1) {
            return res.status(404).json({
                status: 'fail',
                message: 'The blog is not currently available',
                data: []
            })
        }
    
        req.blog = blog
        req.id = id
        return next()
    } catch (error) {
        return next(error)
    }
}
module.exports = validateBlogById