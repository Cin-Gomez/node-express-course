//check username, password in post(login)request
//if exist create new JWT
//send back to the front-end
//setup authentication so only the request with JWT can access the dashboard

const jwt = require('jsonwebtoken')
const { BadRequestError} = require('../errors')



const login = async (req,res) => {
    const {username,password} = req.body

    //mongoose validation
    //JOI - package
    // check in the controller

    if(!username || !password){
    throw new BadRequestError('Please provide email and password')
    }
//just for demo, will be using MongoDB
    const id =  new Date().getDate()
//try to keep payload small, better experience for user. In production, you must use long, complex, and unguessable string value!!!
    const token = jwt.sign({id, username},process.env.JWT_SECRET,{expiresIn: '30d'})

    res.status(200).json({msg:'user created',token})
}

const  dashboard =  async (req,res) =>{
    
    const luckyNumber = Math.floor(Math.random()* 100)
        
    res.status(200).json({
        msg: `Hello, ${req.user.username}`, 
        secret: `Here is your authorized data, your lucky number is ${luckyNumber}`})

}

module.exports = {
    login, 
    dashboard,
}