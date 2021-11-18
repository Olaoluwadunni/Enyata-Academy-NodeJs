const {expect} = require('chai')
const request = require('supertest')
const app = require('../src/index')

describe('blog', () => {
    it('baseroute', (done) => {
        request(app)
        .get('/')
        .expect(200)
        .end((err, res) => {
            expect(res.body.message).to.equal('Welcome to my Blog API')
            expect(res.body.code).to.equal(200)
            done()
        })
    })

    it('createBlog', (done) => {
        request(app)
        .post('/addblog')
        .send({
            name: 'Temi',
            author: 'Tope',
            domain: 'enyata.com'
        })
        .expect(201)
        .end((err, res) => {
            expect(res.body.message).to.equal('Blog created successfully')
            expect(res.body.code).to.equal(201)
            expect(res.body.status).to.equal('success')
            expect(res.body.data).to.be.an('object')
            expect(res.body.data).to.have.property('id')
            expect(res.body.data).to.have.property('name')
            expect(res.body.data).to.have.property('author')
            expect(res.body.data).to.have.property('domain')
            done()
        })
    })

    it('getBlog', (done) => {
        request(app)
        .get('/blog')
        .expect(200)
        .end((err, res) => {
            expect(res.body.message).to.equal('All blogs displayed')
            expect(res.body.code).to.equal(200)
            expect(res.body.status).to.equal('success')
            expect(res.body.data).to.be.an('array')
            expect(res.body.data[0]).to.have.property('id')
            expect(res.body.data[0]).to.have.property('name')
            expect(res.body.data[0]).to.have.property('author')
            expect(res.body.data[0]).to.have.property('domain')
            done()
        })
    })

    it('getIndividualBlog', (done) => {
        request(app)
        .get('/blog/1')
        .expect(200)
        .end((err, res) => {
            expect(res.body.message).to.equal('Blog with id 1 displayed successfully')
            expect(res.body.code).to.equal(200)
            expect(res.body.status).to.equal('success')
            expect(res.body.data).to.be.an('array')
            expect(res.body.data[0]).to.have.property('name')
            expect(res.body.data[0]).to.have.property('author')
            expect(res.body.data[0]).to.have.property('domain')
            done()
        })
    })

    it('updateBlog', (done) => {
        request(app)
        .get('/blog/1')
        .expect(200)
        .end((err, res) => {
            expect(res.body.message).to.equal('Blog with id 1 displayed successfully')
            expect(res.body.code).to.equal(200)
            expect(res.body.status).to.equal('success')
            expect(res.body.data).to.be.an('array')
            expect(res.body.data[0]).to.have.property('name')
            expect(res.body.data[0]).to.have.property('author')
            expect(res.body.data[0]).to.have.property('domain')
            done()
        })
    })
})