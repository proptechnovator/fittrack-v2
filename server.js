require('dotenv').config()
const express = require('express');
const cors = require('cors');
const app = express()
const {Sequelize} = require('sequelize')
const defineCurrentUser = require('./middleware/defineCurrentUser');
const path = require('path');
const { paste } = require('@testing-library/user-event/dist/paste');

//middleware
var corsOptions ={
<<<<<<< HEAD
    origin: `https://fittrack-v2.herokuapp.com` ,
=======
    origin: `http://localhost:5501` ,
>>>>>>> main
    methods:"GET,PUT,POST,DELETE,PATCH",
    changeOrigin:true,
    credentials: true
}
app.use(cors(corsOptions))
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(defineCurrentUser)

/* This code was used to test the connection. 
connection will be on the backen */

// const sequelize = new Sequelize(process.env.PG_URI)
// try {
//     sequelize.authenticate()
//     console.log(`Connect to SQL DB at ${process.env.PG_URI}`)
// } catch (err){
//     console.log(`unable to connect to PG: ${err}`)
// }

//Controllers
app.options('*',cors())
app.use('/authentication',require('./controllers/authentication'))
app.use('/users',require('./controllers/users'))
app.use('/meals',require('./controllers/meals'))
app.use('/workouts',require('./controllers/workouts'))
app.use('/addData',require('./controllers/userData'))

// relative path
app.get ('/', (req,res)=>{
    res.render('./src/index.js')
})

app.get ('*', (req,res)=>{
    res.render('./src/pages/Error404.js')
})

//Listen
app.listen(process.env.PORT || 8080)