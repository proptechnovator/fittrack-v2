import React, { useState } from 'react';

function WorkoutEdit({ workout }) {
    // Declare state variables to store the form data 
    const [MuscleGroup, setMuscleGroup] = useState(workout.workout_muscle_group);
    const [Exercise, setExercise] = useState(workout.workout_exercise);
    const [Sets, setSets] = useState(workout.workout_sets);
    const [Reps, setReps] = useState(workout.workout_reps);
    const [Weight, setWeight] = useState(workout.workout_weight);
    const [Duration, setDuration] = useState(workout.workout_duration);
    
    //Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();

    // create a new workout objects
    const newWorkoutData = {
        workout_muscle_group: MuscleGroup,
        workout_exercise: Exercise,
        workout_sets: Sets,
        workout_reps: Reps,
        workout_weight: Weight,
        workout_duration: Duration,
    };

    //send the new workout object to the server with a Post request 
    fetch(`http://localhost:5000/workouts/${workout.workout_id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newWorkoutData),
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
                        className='w-100'
                        type="text"
                        id="Muscle Group"
                        value={MuscleGroup}
                        onChange={(event) => setMuscleGroup(event.target.value)}
                    />
                </li>
                <li className='list-group-item w-100 text-nowrap px-1'>
                    <input
                        className='w-100'
                        type="text"
                        id="exercise"
                        value={Exercise}
                        onChange={(event) => setExercise(event.target.value)}
                    />
                </li>
                <li className='list-group-item w-100 text-nowrap px-1'>
                    <input
                        className='w-100'
                        type="number"
                        id="sets"
                        value={Sets}
                        onChange={(event) => setSets(parseInt(event.target.value))}
                    />
                </li>
                <li className='list-group-item w-100 text-nowrap px-1'>
                    <input
                        className='w-100'
                        type="number"
                        id="reps"
                        value={Reps}
                        onChange={(event) => setReps(parseInt(event.target.value))}
                    />
                </li>
                <li className='list-group-item w-100 text-nowrap px-1'>
                    <input
                        className='w-100'
                        type="number"
                        id="weight"
                        value={Weight}
                        onChange={(event) => setWeight(parseInt(event.target.value))}
                    />
                </li>
                <li className='list-group-item w-100 text-nowrap px-1'>
                    <input
                        className='w-100'
                        type="text"
                        id="duration"
                        value={Duration}
                        onChange={(event) => setDuration(event.target.value)}
                    />
                </li>
            </ul>
            <button onClick={handleSubmit} className='btn btn-secondary fw-bold' id='save-btn'>Save</button>
        </div>
        )

    }

export default WorkoutEdit