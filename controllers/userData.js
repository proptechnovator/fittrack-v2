const UserDataRouter = require('express').Router()
const db = require('../models');

const {UserData} = db

UserDataRouter.post('/', async(req,res) => {
    try {
     // recieve user data from request body
    const {
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
     res.status(500).json({ message: 'An error occured'});
     }
});

UserDataRouter.put('/:id', async(req,res) =>{
    try{
        //get userdata id from params
        const {id} = req.params;
        
        // get updated data from the request body
        const {
            data_current_date,
            data_current_weight,
            data_current_waist,
            data_current_chest,
            data_current_shoulders,
            data_current_biceps,
            data_current_thighs,
            data_current_calves} =req.body;
        
        // find the userdata with a matching id
    const userdata = await UserData.findOne({
        where: {id: id}
    });
        // update the userdata with new data
    await userdata.update({ 
        data_current_date,
        data_current_weight,
        data_current_waist,
        data_current_chest,
        data_current_shoulders,
        data_current_biceps,
        data_current_thighs,
        data_current_calves });

        //send update user data as a response
    res.json(userdata)
        } catch (error) {
            res.status(500).json({ message: 'A funny error occurred'});
        }
});

UserDataRouter.delete('/:id', async (req,res) => {
    try {
        // get workout id from params
    const {id} = req.params;
        
        // find workout with a matching id
    const userdata = await UserData.findByPk(id);

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