import React, { useContext, useEffect, useState } from 'react';
import { CurrentUser } from '../context/CurrentUser';
import WorkoutEdit from '../components/WorkoutEdit';
import WorkoutForm from '../components/WorkoutForm';

function WorkoutLog() {
    // Declare state variables to store the selected date and the workout data
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
    const [workouts, setworkout] = useState([]);
    const [editingWorkoutId, setEditingWorkoutId] = useState(null);
    const [display, setDisplay] = useState(false);
    const [addDisplay, setAddDisplay] = useState(false);

     // user context
     const {currentUser} = useContext(CurrentUser);

     useEffect(() => {
        if(currentUser) {
            // Fetch the workout data from the server and store it in the state
            async function fetchData() {
                const response = await fetch(`http://localhost:5000/workouts?workout_user_id=${currentUser.user.user_id}&workout_date=${selectedDate}`); // route subject to change depending on server route
                const data = await response.json();
                setworkout(data);
                
            }
            fetchData();
        }
     },[selectedDate, currentUser]);

     //Workout Delete request
     async function deleteWorkout(workoutId) {
        try {
            await fetch(`http://localhost:5000/workouts/${workoutId}`, {
                method: 'DELETE',
            });
            // After the Delete request is complete, reload page
            window.location.reload()
        } catch (error) {
            console.error(error);
        }
     }

     // Group the workouts by date
    const groupedWorkouts = workouts.reduce((acc, workout) => {
        
        // use the toISOString method to convert the workout_date to a string in ISO format
        const date = selectedDate;

        // create a date string from the workout's date
        if (!acc[date]) {
            // if there is no key for the date in the accumulator object yet, create one
            acc[date] = [workout];
        } else {
            // if there is already a key for the date in the accumulator object, add the current workout to the array of workouts at that key
            acc[date].push(workout);
        }

        // return the updated accumulator object
        return acc;
    }, {});

    // Use the selected date to filter the data being displayed
    const displayedWorkouts = groupedWorkouts[selectedDate] || [];

    const displayForm = (workout) => {
        setEditingWorkoutId(workout);
        (display) ? setDisplay(false) : setDisplay(true)
    }

    const displayAddForm = () => {
        !addDisplay ? setAddDisplay(true) : setAddDisplay(false)
    }

    return (
        <div id="meal-log" className='w-100 px-2 mt-3'>
            {/* Date picker to allow the user to select the date */}
            { currentUser ? <input className="px-2 fw-bold" type="date" value={selectedDate} onChange={(event) => setSelectedDate(event.target.value)} /> : null}
            {/* display the workout entries */}
            <div className="w-100 mt-2" id="list">
                <ul className="list-group list-group-horizontal justify-content-center w-100 mt-2">
                    <li className="list-group-item w-100 fw-bold titles text-nowrap px-1">Muscle</li>
                    <li className="list-group-item w-50 fw-bold titles text-nowrap px-1">Exercise</li>
                    <li className="list-group-item w-50 fw-bold titles text-nowrap px-1">Sets</li>
                    <li className="list-group-item w-50 fw-bold titles text-nowrap px-1">Reps</li>
                    <li className="list-group-item w-50 fw-bold titles text-nowrap px-1">Weight</li>
                    <li className="list-group-item w-100 fw-bold titles text-nowrap px-1">Duration</li>
                </ul>
            </div>
            {displayedWorkouts.map((workout) => (
                <div key={workout.workout_id} className="w-100 mt-2" id="list">
                    <button onClick={() => displayForm(workout.workout_id)} className='btn btn-warning fw-bold'>Edit</button>
                    <ul className="list-group list-group-horizontal justify-content-center w-75">
                        <li className='list-group-item w-100 text-nowrap px-1'>{workout.workout_muscle_group}</li>
                        <li className='list-group-item w-100 text-nowrap px-1'>{workout.workout_exercise}</li>
                        <li className='list-group-item w-100 text-nowrap px-1'>{workout.workout_sets}</li>
                        <li className='list-group-item w-100 text-nowrap px-1'>{workout.workout_reps}</li>
                        <li className='list-group-item w-100 text-nowrap px-1'>{workout.workout_weight} (pounds)</li>
                        <li className='list-group-item w-100 text-nowrap px-1'>{workout.workout_duration}</li>
                    </ul>
                    <button onClick={() => deleteWorkout(workout.workout_id)} className='btn btn-danger fw-bold'>Delete</button>
                    {editingWorkoutId === workout.workout_id && display ? <WorkoutEdit workout={workout} /> : null}
                </div>
            ))}
            { !addDisplay && currentUser ? <button className='btn btn-secondary mt-4 fw-bold' data-bs-toggle="modal" data-bs-target="#form-modal"> Add Workout </button>: currentUser ? <button onClick={() => displayAddForm()} className='btn btn-secondary mt-4'>-</button> : null}
            { currentUser ? <WorkoutForm user_id = {currentUser.user.user_id} selectedDate = {selectedDate}/> : null}
        </div>
    );
}

export default WorkoutLog