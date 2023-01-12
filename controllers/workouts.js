const workoutRouter = require('express').Router()
const db = require('../models');
const { Op } = require('sequelize');

const{Workouts} = db


workoutRouter.get('/', async(req,res)=> {
    try {
        //get user id and date from query string
        const { workout_user_id, workout_date } = req.query;

        //convert the workout_date string to a Date object
        const startDate = new Date(workout_date);

        //set the day of the month for the end date to be the day after the start date
        const endDate = new Date(startDate);
        endDate.setDate(endDate.getDate() + 1);

        //find all meals that match user id and date
        const workouts = await Workouts.findAll({
            where: {
                workout_user_id: workout_user_id,
                workout_date: {
                    [Op.between]: [startDate, endDate]
                }
                }
        });

        //send the workou data as a response
        res.json(workouts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred'})
    }
});

workoutRouter.post('/', async(req,res) => {
   try {
    // recieve workout data from request body
   const {workout_user_id, workout_date, workout_muscle_group, workout_exercise,
     workout_sets, workout_reps, workout_weight, workout_duration} = req.body;

    // create new workout data to 
    const newWorkout = await Workouts.create({
        workout_user_id,
        workout_date,
        workout_muscle_group,
        workout_exercise,
        workout_sets,
        workout_reps,
        workout_weight,
        workout_duration
    });
    //send new workout data as a response
    res.send(newWorkout);
    } catch (error){
    res.status(500).json({ message: 'An error occured'});
    }
});

workoutRouter.put('/:id', async(req,res) =>{
    try{
        //get workout id from params
        const {id} = req.params;
        
        // get updated data from the request body
        const {workout_muscle_group, workout_exercise, workout_sets, workout_reps, workout_weight, workout_duration} =req.body;
        
        //console.log(req.body)
        // find the workout with a matching id
    const workout = await Workouts.findByPk(id);
        // update the workout with new data
    await workout.update({ workout_muscle_group, workout_exercise, workout_sets, workout_reps, workout_weight, workout_duration});

        //send update workout data as a response
    res.json(workout)
        } catch (error) {
            res.status(500).json({ message: 'An error occurred'});
        }
});

workoutRouter.delete('/:id', async (req,res) => {
    try {
        // get workout id from params
    const {id} = req.params;
        
        // find workout with a matching id
    const workout = await Workouts.findByPk(id);

        // delete the workout
    await workout.destroy();

        // send a response indicating that the workout data was deleted successfully
    res.sendStatus(200);
    } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred'});
    }
});

module.exports = workoutRouter