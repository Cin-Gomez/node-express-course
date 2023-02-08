const express = require('express')
const path = require('path')
const {consoleLog} = require('./practice-middleware')

const app = express()

//setup static and middleware
app.use(express.static('./new-public'))

app.use(consoleLog)

app.get('/', (req, res)=>{
    res.sendFile(path.resolve(__dirname, './new-public/index.html'))
})

app.get('/sample', (req,res) =>{
    res.send('This is working!!!')
})


app.all('*', (req, res) => {
    res.status(404).send('Resource Not Found')
})

app.listen(3000, () => {
    console.log('server is listening on port 3000...')
})

