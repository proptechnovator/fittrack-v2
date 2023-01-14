//Dependencies 
const auth = require ('express').Router()
const db = require('../models')
const bcrypt = require('bcrypt')
const jwt = require('json-web-token')
const {Users, UserData} = db


auth.post('/', async (req, res) => {
    console.log(req.body)
    // Find a user in the database with a matching email
    let user = await Users.findOne({
        where: { user_email: req.body.user_email }
    })

    // Following code is functioning as expected but it always throws status 404 because when testing, it is comparing plaintext password inputted in the login form, with the unhashed pw in the db (needs to be hashed to function properly)
    // Check if the user exists and if the provided password matches the hashed password in the database
    if (!user || !await bcrypt.compare(req.body.user_password, user.user_password)) {
        
        // If the user does not exist or the passwords do not match, send a response with a 404 status code and a message
        res.status(404).json({ 
            message: `Could not find a user with the provided username and password` 
        })
    } else {
        // If the user exists and the passwords match, encode a JWT with the user's ID as the payload and send it as the response
        const result = await jwt.encode(process.env.JWT_SECRET, {id:user.user_id})
        res.json({ user: user, token:result.value })       
    }
})


auth.get('/profile', async (req, res) => {
    console.log("hit the profile controller route")
    try{
        const [authenticationMethod,token] = req.headers.authorization.split(' ')
        if (authenticationMethod == 'Bearer') {
            //Decode the JWT
            const result= await jwt.decode(process.env.JWT_SECRET,token)
            //Get the logged in user's id from the payload
            const id=result.value.id
            //Find the user object using their id
            let user= await Users.findOne({
                where:{user_id:id}
                }
            )
            let userdata= await UserData.findOne({
                where:{data_user_id:id}
                }
            )
            res.json({user, userdata})
        }
    } catch{
        res.json({})
    }
})

module.exports= auth
