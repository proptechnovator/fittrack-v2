const userRouter = require('express').Router()
const db = require('../models')
const bcrypt =require('bcrypt')

const {Users, UserData} = db

userRouter.post('/', async(req,res)=>{
   let userCheck= await Users.findOne({
        where: {user_email:req.body.user_email}
   })
   if(userCheck){
    res.status(404).json({
        message: 'User already exists, please log in'
    })
   } else {
    let {user_password,...rest}=req.body
    const user = await Users.create({
            ...rest,
            user_password: await bcrypt.hash(user_password,12)
        })
        res.json(user)        
   }    
})

userRouter.get('/:id', async(req,res)=>{
    let userid= Number(req.params.id)
    const userDetails = await UserData.findOne({
        where: {data_user_id:userid}
    })
    res.json(userDetails)
})

module.exports = userRouter