import React, { useState } from 'react';

function WorkoutForm(props) {
    // Declare state variables to store the form data 
    const [MuscleGroup, setMuscleGroup] = useState('');
    const [Exercise, setExercise] = useState('');
    const [Sets, setSets] = useState(0);
    const [Reps, setReps] = useState(0);
    const [Weight, setWeight] = useState(0);
    const [Duration, setDuration] = useState('');
    const date = new Date(props.selectedDate)
    date.setMinutes(30)

    // responsive variables
    const [viewportWidth, setViewPortWidth] = useState(window.innerWidth);
    let timeout;

    // Add an event listener for the 'resize' event on the window object
    window.addEventListener('resize', () => {
    // Clear any existing timeout
    clearTimeout(timeout);

    // Set a new timeout to run the function after a short delay
    timeout = setTimeout(() => {
        // Get the current viewport width
        setViewPortWidth(window.innerWidth)
    }, 250); // The function will run 250ms after the user finishes resizing the window
    });

    //Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();

    // create a new workout objects
    const newWorkout = {
        workout_muscle_group: MuscleGroup,
        workout_exercise: Exercise,
        workout_sets: Sets,
        workout_reps: Reps,
        workout_weight: Weight,
        workout_duration: Duration,
        workout_user_id: props.user_id,
        workout_date: date
    };
    //send the new workout object to the server with a Post request 
    fetch(`http://localhost:5000/workouts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newWorkout),
    });

    // reload the page after
    window.location.reload()
    };

    return (
        <div className="modal fade w-100 position-absolute top-50 start-50 translate-middle" id="form-modal" tabIndex="-1" aria-labelledby="formModalLabel" aria-hidden="true">
            <div className={ viewportWidth >= 720 ? "modal-dialog w-50 d-flex m-auto justify-content-center" : "modal-dialog w-75 d-flex m-auto justify-content-center"}>
                <div className="modal-content w-100">
                    <div className="modal-header">
                        <h2 className="modal-title fs-5 fw-bold" id="formModalLabel">New Workout</h2>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body w-100">
                        <form className={ viewportWidth >= 720 ? "add-form w-50" : viewportWidth >= 480 ? "add-form w-75" : "add-form w-100"} onSubmit={handleSubmit}>
                            <div className='w-100 input-hold'>
                                <input
                                    placeholder=' '
                                    type="text"
                                    id="Muscle Group"
                                    className="w-100 input_"
                                    onChange={(event) => setMuscleGroup(event.target.value)}
                                />
                                <label className="fw-bold _label" htmlFor="muscle Group">MuscleGroup:</label>
                            </div>
                            <br />
                            <div className='w-100 input-hold'>
                                <input
                                    placeholder=' '
                                    type="text"
                                    id="exercise"
                                    className="w-100 input_"
                                    onChange={(event) => setExercise(event.target.value)}
                                />
                                <label className="fw-bold _label" htmlFor="exercise">Exercise:</label>
                            </div>
                            <br />
                            <div className='w-100 input-hold'>
                                <input
                                    placeholder=' '
                                    type="number"
                                    id="Sets"
                                    className="w-100 input_"
                                    onChange={(event) => setSets(event.target.value)}
                                />
                                <label className="fw-bold _label" htmlFor="sets">Sets:</label>
                            </div>
                            <br />
                            <div className='w-100 input-hold'>
                                <input
                                    placeholder=' '
                                    type="number"
                                    id="reps"
                                    className="w-100 input_"
                                    onChange={(event) => setReps(event.target.value)}
                                />
                                <label className="fw-bold _label" htmlFor="reps">Reps:</label>
                            </div>
                            <br />
                            <div className='w-100 input-hold'>
                                <input
                                    placeholder=' '
                                    type="number"
                                    id="weight"
                                    className="w-100 input_"
                                    onChange={(event) => setWeight(event.target.value)}
                                />
                                <label className="fw-bold _label" htmlFor="weight">Weight (lb):</label>
                            </div>
                            <br />
                            <div className='w-100 input-hold'>
                                <input
                                    placeholder=' '
                                    type="text"
                                    id="duration"
                                    className="w-100 input_"
                                    onChange={(event) => setDuration(event.target.value)}
                                />
                                <label className="fw-bold _label" htmlFor="duration">Duration:</label>
                            </div>
                            <br />
                            <button type="submit" className='btn btn-secondary'>Add Workout</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkoutForm