const express = require('express')
const app = express()
const logger = require('./logger')
const authorize = require('./authorize')
//order matters/ middlware functions first
//Can use multiple middleware functions in app.use
app.use([logger, authorize])

app.get('/', (req, res) => {
    res.send('Home')
})

app.get('/about', (req, res) =>{
    res.send('About')
})
app.get('/api/products', logger, (req, res) => {
    res.send('Products')
})
app.get('/api/items', (req, res) =>{
    console.log(req.user)
    res.send('Items')
})


app.listen(5000, () => {
    console.log('server is listening on port 5000...')
})