// const express = require('express');
// const router = express.Router()
// const middleware = require('../middleware')
// const { createBlog, getBlog, getIndividualBlog, updateBlog, deleteBlog } = require('../controller')

// router.post('/addblog', createBlog)
// router.get('/blog', getBlog)
// router.get('/blog/:id', middleware.getBlogbyIndex, getIndividualBlog)
// router.put('/blog/:id', middleware.getBlogbyIndex, updateBlog)
// router.put('/blog/:id', middleware.getBlogbyIndex, deleteBlog)
// module.exports = router;

const express = require('express')
const router = express.Router()
const validateBlogById = require('../middleware')
const { createBlog, getBlogs, getIndividualBlog, updateBlog, deleteBlog } = require('../controller')

router.post('/addblog', createBlog)
router.get('/blog', getBlogs)
router.get('/blog/:id', validateBlogById, getIndividualBlog)
router.put('/blog/:id', validateBlogById, updateBlog)
router.delete('/blog/:id', validateBlogById, deleteBlog)
module.exports = router;