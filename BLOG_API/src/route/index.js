const express = require('express');
const router = express.Router();
const middleware = require('../middleware');
const { createBlog, getBlog, getIndividualBlog } = require('../controller')

router.post('./addblog', createBlog)
router.get('.blog', getBlog)
router.get('./blog/:id', midddleware.getBlogByIndex, middleware.getIndividualBlog,)
module.exports = router