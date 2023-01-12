const db = require("../models")
const jwt = require('json-web-token')

// Import User model from the db object
const { Users,UserData } = db;

// Define the defineCurrentUser function
async function defineCurrentUser(req, res, next){
    try {
        // Split the authorization header into the method and token
        const [ method, token ] = req.headers.authorization.split(' ')
        // Check if the method is 'Bearer'
        if(method == 'Bearer'){
            // Decode the token using the JWT secret
            const result = await jwt.decode(process.env.JWT_SECRET, token)
            // Extract the user ID from the token payload
            const { id } = result.value
                // Find the user in the database using the user ID
            let user = await Users.findOne({ 
                where: {
                    user_id: id
                }
            })
            let userdata = await UserData.findOne({ 
                where: {
                    data_user_id: id
                }
            })
            // Set the currentUser property of the request object to the user
            console.log(user)
            req.currentUser = {user,userdata}
        }
        next()
    } catch(err){
        // Set the currentUser property of the request object to null
        req.currentUser = null
        next() 
    }
}

// Export the defineCurrentUser function
module.exports = defineCurrentUser