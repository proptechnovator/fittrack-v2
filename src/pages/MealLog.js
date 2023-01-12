import React, { useContext, useEffect, useState } from 'react';
import MealEdit from '../components/MealEdit';
import MealForm from '../components/MealForm';
import { CurrentUser } from '../context/CurrentUser';

function MealLog() {
    // Declare state variables to store the selected date and the meals data
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
    const [meals, setMeals] = useState([]);
    const [editingMealId, setEditingMealId] = useState(null);
    const [display, setDisplay] = useState(false)
    const [addDisplay, setAddDisplay] = useState(false)

    // user context
    const {currentUser} = useContext(CurrentUser)

    useEffect(() => {
        if(currentUser) {
            // Fetch the meals data from the server and store it in the state
            async function fetchData() {
                const response = await fetch(`http://localhost:5000/meals?meal_user_id=${currentUser.user.user_id}&meal_date=${selectedDate}`); // route subject to change depending on server route
                const data = await response.json();
                setMeals(data);
            }
            fetchData();
        }
    }, [selectedDate, currentUser]);

    // Meal delete request 
    async function deleteMeal(mealId) {
        try {
            await fetch(`http://localhost:5000/meals/${mealId}`, {
                method: 'DELETE',
            });
            // After the DELETE request is completed, reload page
            window.location.reload()
        } catch (error) {
            console.error(error);
        }
    }
      

    // Group the meals by date
    const groupedMeals = meals.reduce((acc, meal) => {
        
        const date = selectedDate;

        // create a date string from the meal's date
        if (!acc[date]) {
            // if there is no key for the date in the accumulator object yet, create one
            acc[date] = [meal];
        } else {
            // if there is already a key for the date in the accumulator object, add the current meal to the array of meals at that key
            acc[date].push(meal);
        }

        // return the updated accumulator object
        return acc;
    }, {});
    // Use the selected date to filter the data being displayed
    const displayedMeals = groupedMeals[selectedDate] || [];

    const displayForm = (meal) => {
        setEditingMealId(meal);
        (display) ? setDisplay(false) : setDisplay(true)
    }

    const displayAddForm = () => {
        !addDisplay ? setAddDisplay(true) : setAddDisplay(false)
    }

    return (
        <div id="meal-log" className='w-100 px-2 mt-3'>
            {/* Date picker to allow the user to select the date */}
            { currentUser ? <input className="px-2 fw-bold" type="date" value={selectedDate} onChange={(event) => setSelectedDate(event.target.value)} /> : null}
            {/* display the meal entries */}
            <div className="w-75 mt-2" id="list">
                <ul className="list-group list-group-horizontal justify-content-center w-100 mt-2">
                    <li className="list-group-item w-100 fw-bold titles text-nowrap px-1">Meal</li>
                    <li className="list-group-item w-100 fw-bold titles text-nowrap px-1">Calories</li>
                    <li className="list-group-item w-100 fw-bold titles text-nowrap px-1">Protein</li>
                    <li className="list-group-item w-100 fw-bold titles text-nowrap px-1">Fat</li>
                    <li className="list-group-item w-100 fw-bold titles text-nowrap px-1">Carbs</li>
                </ul>
            </div>
            {displayedMeals.map((meal) => (
                <div key={meal.meal_id} className="w-100 mt-2" id="list">
                    <button onClick={() => displayForm(meal.meal_id)} className='btn btn-warning fw-bold'>Edit</button>
                    <ul className="list-group list-group-horizontal justify-content-center w-75">
                        <li className='list-group-item w-100 text-nowrap px-1'>{meal.meal_description}</li>
                        <li className='list-group-item w-100 text-nowrap px-1'>{meal.meal_calories} (kcal)</li>
                        <li className='list-group-item w-100 text-nowrap px-1'>{meal.protein} (g)</li>
                        <li className='list-group-item w-100 text-nowrap px-1'>{meal.fat} (g)</li>
                        <li className='list-group-item w-100 text-nowrap px-1'>{meal.carbs} (g)</li>
                    </ul>
                    <button onClick={() => deleteMeal(meal.meal_id)} className='btn btn-danger fw-bold'>Delete</button>
                    {editingMealId === meal.meal_id && display ? <MealEdit meal={meal} /> : null}
                </div>
            ))}
            { !addDisplay && currentUser ? <button className='btn btn-secondary mt-4 fw-bold' data-bs-toggle="modal" data-bs-target="#form-modal"> Add Meal </button>: currentUser ? <button onClick={() => displayAddForm()} className='btn btn-secondary mt-4'>-</button> : null}
            { currentUser ? <MealForm user_id = {currentUser.user.user_id} selectedDate = {selectedDate}/> : null}
        </div>
    );
}  

export default MealLog