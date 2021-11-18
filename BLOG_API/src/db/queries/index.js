const queries = {
    addNewBlog: `
    INSERT INTO blogs (
        name,
        author,
        domain
    ) VALUES ($1, $2, $3)
    RETURNING *
    `,

    getAllBlog: `
    SELECT * FROM blogs
    `,
    
    getSingleBlog: `
    SELECT
        name,
        author,
        domain,
        created_at, 
        updated_at 
    FROM blogs
    WHERE id=$1
    `
}
module.exports = queries