
//endpoint that gets blog by id (array index)
const getBlogbyIndex = (req, res, next) => {
    try {
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
    } catch (error) {
        
    }
    
}
module.exports = {getBlogbyIndex}