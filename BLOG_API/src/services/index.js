let blog = [];
let id = 0;
const today = new Date();
const dd = String(today.getDate()).padStart(2, '0');
const mm = String(today.getMonth() + 1).padStart(2, '0');
const yyyy = today.getFullYear();
const blogDate = dd + '/' + mm + '/' + yyyy;

module.exports = {blog, id, blogDate}