import React, { useState } from 'react';

function MealEdit({ meal }) {

    // Declare state variables to store the form data
    const [description, setDescription] = useState(meal.meal_description);
    const [calories, setCalories] = useState(meal.meal_calories);
    const [protein, setProtein] = useState(meal.protein);
    const [fat, setFat] = useState(meal.fat);
    const [carbs, setCarbs] = useState(meal.carbs);

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();

        // Create a new meal object
        const newMealData = {
            meal_description: description,
            meal_calories: calories,
            protein: protein,
            fat: fat,
            carbs: carbs,
        };

        // Send the new meal object to the server using a POST request

        fetch(`http://localhost:5000/meals/${meal.meal_id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newMealData),
        });

        // reload page after
        window.location.reload()
    };


    return(
        <div className='w-100 edit-box mt-2'>
            <p id='new-edit' className='fw-bold'> New Edit </p>
            <ul className='list-group list-group-horizontal justify-content-center w-75' id='input'>
                <li className='list-group-item w-100 text-nowrap px-1'>
                    <input
                        type="text"
                        className='w-100'
                        id="description"
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                    />
                </li>
                <li className='list-group-item w-100 text-nowrap px-1'>
                    <input
                        type="number"
                        className='w-100'
                        id="calories"
                        value={calories}
                        onChange={(event) => setCalories(event.target.value)}
                    />
                </li>
                <li className='list-group-item w-100 text-nowrap px-1'>
                    <input
                        type="number"
                        className='w-100'
                        id="protein"
                        value={protein}
                        onChange={(event) => setProtein(event.target.value)}
                    />
                </li>
                <li className='list-group-item w-100 text-nowrap px-1'>
                    <input
                        type="number"
                        className='w-100'
                        id="fat"
                        value={fat}
                        onChange={(event) => setFat(event.target.value)}
                    />
                </li>
                <li className='list-group-item w-100 text-nowrap edit-hold px-1'>
                    <input
                        type="number"
                        className='w-100'
                        id="carbs"
                        value={carbs}
                        onChange={(event) => setCarbs(event.target.value)}
                    />
                </li>
            </ul>
            <button onClick={handleSubmit} className='btn btn-secondary fw-bold' id='save-btn'>Save</button>
        </div>
    )

}

export default MealEdit