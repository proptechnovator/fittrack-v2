import React, {useState} from 'react';

function UserDataForm(props) {
    // refactored the useState for the variables
    const [newUserData,setNewUserData] = useState({
        data_id:null,
        data_user_id: props.user_id,
        data_start_date: new Date(),
        data_current_date: null,
        data_start_weight: null,
        data_current_weight: null,
        data_start_waist: null,
        data_current_waist: null,
        data_start_chest: null,
        data_current_chest: null,
        data_start_shoulders: null,
        data_current_shoulders: null,
        data_start_biceps: null,
        data_current_biceps: null,
        data_start_thighs: null,
        data_current_thighs: null,
        data_start_calves: null,
        data_current_calves: null
        });
    
    //Handle form submission
    async function handleSubmit(event) {
        event.preventDefault();
        
        //send the new userdata object to the server
        const response= await fetch('http://localhost:5000/addData', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUserData),
    });
    const data = await response.json();
        if(response.status===200){
            window.location.reload()
        }
    // reload the page after

    }

    return (
        <div className="modal-body w-100">
                        <form className="add-form w-50" onSubmit={handleSubmit}>
                            <div className='w-100 input-hold'>
                                <input
                                    placeholder=' '
                                    type="number"
                                    id="data_start_weight"
                                    name='data_start_weight'
                                    className="w-100 input_"
                                    onChange={e => setNewUserData({...newUserData,data_start_weight:e.target.value})}
                                />
                                <label className="fw-bold _label" htmlFor="data_start_weight">CurrentWeight (lbs):</label>
                            </div>
                            <br />
                            <div className='w-100 input-hold'>
                                <input
                                    placeholder=' '
                                    type="number"
                                    id="data_start_waist"
                                    name='data_start_waist'
                                    className="w-100 input_"
                                    onChange={e => setNewUserData({...newUserData,data_start_waist:e.target.value})}
                                />
                                <label className="fw-bold _label" htmlFor="data_start_waist">Current Waist (cm):</label>
                            </div>
                            <br />
                            <div className='w-100 input-hold'>
                                <input
                                    placeholder=' '
                                    type="number"
                                    id="data_start_chest"
                                    name='data_start_chest'
                                    className="w-100 input_"
                                    onChange={e => setNewUserData({...newUserData,data_start_chest:e.target.value})}
                                />
                                <label className="fw-bold _label" htmlFor="data_start_chest">Chest size (cm):</label>
                            </div>
                            <br />
                            <div className='w-100 input-hold'>
                                <input
                                    placeholder=' '
                                    type="number"
                                    id="data_start_shoulders"
                                    name="data_start_shoulders"
                                    className="w-100 input_"
                                    onChange={e => setNewUserData({...newUserData,data_start_shoulders:e.target.value})}
                                />
                                <label className="fw-bold _label" htmlFor="data_start_shoulders">Shoulder size (cm):</label>
                            </div>
                            <br />
                            <div className='w-100 input-hold'>
                                <input
                                    placeholder=' '
                                    type="number"
                                    id="data_start_biceps"
                                    name='data_start_biceps'
                                    className="w-100 input_"
                                    onChange={e => setNewUserData({...newUserData,data_start_biceps:e.target.value})}
                                />
                                <label className="fw-bold _label" htmlFor="data_start_biceps">Bicep size (cm):</label>
                            </div>
                            <br />
                            <div className='w-100 input-hold'>
                                <input
                                    placeholder=' '
                                    type="number"
                                    id="data_start_thighs"
                                    name='data_start_thighs'
                                    className="w-100 input_"
                                    onChange={e => setNewUserData({...newUserData,data_start_thighs:e.target.value})}
                                />
                                <label className="fw-bold _label" htmlFor="data_start_thighs">Thigh size (cm):</label>
                            </div>
                            <br />
                            <div className='w-100 input-hold'>
                                <input
                                    placeholder=' '
                                    type="number"
                                    id="data_start_calves"
                                    name='data_start_calves'
                                    className="w-100 input_"
                                    onChange={e => setNewUserData({...newUserData,data_start_calves:e.target.value})}
                                />
                                <label className="fw-bold _label" htmlFor="data_start_calves">Calve size (cm):</label>
                            </div>
                            <br />
                            <button type="submit" className='btn btn-secondary'>Add My Measurements</button>
                        </form>
                    </div>
    )

}
export default UserDataForm