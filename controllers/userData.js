const UserDataRouter = require('express').Router()
const db = require('../models');

const {UserData} = db

UserDataRouter.post('/', async(req,res) => {
    try {
     // recieve user data from request body
    const {
        data_user_id,
        data_start_date,
        data_current_date,
        data_start_weight, 
        data_current_weight, 
        data_start_waist, 
        data_current_waist,
        data_start_chest, 
        data_current_chest, 
        data_start_shoulders, 
        data_current_shoulders, 
        data_start_biceps, 
        data_current_biceps, 
        data_start_thighs, 
        data_current_thighs, 
        data_start_calves, 
        data_current_calves 
    } = req.body;
 
     // create new user data 
     const newUserData = await UserData.create({
        data_user_id,
        data_start_date,
        data_current_date,
        data_start_weight, 
        data_current_weight, 
        data_start_waist, 
        data_current_waist,
        data_start_chest, 
        data_current_chest, 
        data_start_shoulders, 
        data_current_shoulders, 
        data_start_biceps, 
        data_current_biceps, 
        data_start_thighs, 
        data_current_thighs, 
        data_start_calves, 
        data_current_calves
     });
     //send new workout data as a response
     res.send(newUserData);
     } catch (error){
     res.status(500).json({ message: 'Could not create New User'});
     }
});

UserDataRouter.put('/:id', async(req,res) =>{
    try {
        // get user id from params
    const {id} = req.params;
        
    const { data_current_date, data_current_weight, data_current_waist, data_current_chest, data_current_shoulders, data_current_biceps, data_current_thighs, data_current_calves} = req.body;

        // find data with matching user id
    const userdata = await UserData.findOne({
        where:{
            data_user_id:id
        }
    });

        // update data
    await userdata.update({ data_current_date, data_current_weight, data_current_waist, data_current_chest, data_current_shoulders, data_current_biceps, data_current_thighs, data_current_calves});

    // send updated data as response
    res.json(userdata);
    } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred'});
    }

/*    if (req.body!== null){  
        
  //update the userdata with new data
        const response = await UserData.update({ 
        data_current_date:req.body.data_current_date,
        data_current_weight:req.body.data_current_weight,
        data_current_waist:req.body.data_current_waist,
        data_current_chest:req.body.data_current_chest,
        data_current_shoulders:req.body.data_current_shoulders,
        data_current_biceps:req.body.data_current_biceps,
        data_current_thighs:req.body.data_current_thighs,
        data_current_calves:req.body.data_current_calves },
        {
        where:{data_id:req.body.data_id,data_user_id:req.body.data_user_id}
        });
        res.json({status:200})
        } else {
         res.json({status:500})   
        }
        */
});

UserDataRouter.delete('/:id', async (req,res) => {
    try {
        // get workout id from params
    const {id} = req.params;
        
        // find workout with a matching id
    const userdata = await UserData.findOne({
        where:{
            data_user_id:id
        }
    });

        // delete the workout
    await userdata.destroy();

        // send a response indicating that the workout data was deleted successfully
    res.sendStatus(200);
    } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred'});
    }
});

module.exports = UserDataRouter