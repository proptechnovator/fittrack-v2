const express = require('express');
const mealsRouter = express.Router();
const db = require('../models');
const { Op } = require('sequelize');


// get all meals for the specified user and date
mealsRouter.get('/', async (req, res) => {
    try {
        // get the user id and date from the query string
        const { meal_user_id, meal_date } = req.query;
        
        // Convert the meal_date string to a Date object
        const startDate = new Date(meal_date);
    
        // Set the day of the month for the end date to be the day after the start date
        const endDate = new Date(startDate);
        endDate.setDate(endDate.getDate() + 1);
    
        // find all meals that match the user id and date
        const meals = await db.Meals.findAll({
            where: {
            meal_user_id: meal_user_id,
            meal_date: {
                [Op.between]: [startDate, endDate]
            }
            }
        });
        
        // send the meals data as a response
        res.json(meals);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred' });
    }
});
  
mealsRouter.post('/', async (req, res) => {
    try {
        // get the meal data from the request body
        const {meal_user_id, meal_description, meal_calories, protein, fat, carbs, meal_date} = req.body;
        // create a new meal using the data
        const newMeal = await db.Meals.create({
            meal_user_id,
            meal_description,
            meal_calories,
            protein,
            fat,
            carbs,
            meal_date
        });
        
        // send the new meal data as a response
        res.json(newMeal);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred' });
    }
});

mealsRouter.put('/:id', async (req, res) => {
    try {
        // get the meal id from the request params
        const { id } = req.params;
    
        // get the updated data from the request body
        const { meal_description, meal_calories, protein, fat, carbs } = req.body;
    
        // find the meal with the matching id
        const meal = await db.Meals.findByPk(id);
    
        // update the meal with the new data
        await meal.update({ meal_description, meal_calories, protein, fat, carbs });
    
        // send the updated meal data as a response
        res.json(meal);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred' });
    }
});
  
mealsRouter.delete('/:id', async (req, res) => {
    try {
        // get the meal id from the request params
        const { id } = req.params;

        // find the meal with the matching id
        const meal = await db.Meals.findByPk(id);

        // delete the meal
        await meal.destroy();

        // send a response indicating that the meal was successfully deleted
        res.sendStatus(200);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred' });
    }
});

module.exports = mealsRouter

