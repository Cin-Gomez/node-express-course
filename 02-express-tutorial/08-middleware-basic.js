const express = require('express')
const app = express()
//req=> middleware => res
// middleware; sits inbetween/ req comes in 2. sometype of functionality is done 3. then response will be sent out
//when you work with middleware must pass it on to the next middleware unless terminating in middleware with res.send
const logger = (req, res, next) => {
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method, url, time)
    next()
}

app.get('/', logger,(req, res) => {
    res.send('Home')
})
app.get('/about', logger, (req, res) => {
    res.send('About')
})

app.listen(5000, () => {
    console.log('server is listening on port 5000...')
})