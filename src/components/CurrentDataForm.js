import React,{useState} from 'react';
import { useNavigate } from 'react-router';
import LogoutProfile from './LogoutProfile';

function CurrentDataForm() {
    // refactored the useState for the variables
    const params= new URLSearchParams(window.location.search)
    const dataId = params.get('dataid')
    const userId = params.get('userid')
    const userFName = params.get('userfname')
    const userLName = params.get('userlname')
    const userAvatar = params.get('useravatar')

    const [currentUserData,setCurrentUserData] = useState({
        data_id:dataId,
        data_user_id: userId,
        data_start_date: null,
        data_current_date: new Date(),
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
    const navigate= useNavigate()
    //Handle form submission
    async function handleSubmit(event) {
        event.preventDefault();
        
        //send the current userdata object to the server
        const response= await fetch(`http://localhost:5000/addData/${userId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(currentUserData),
    });
        await response.json()
        if(response.status===200){
            navigate('/profile')
        }
    }

    return (            

        <div className="modal-body w-100">
            <div className='profile'>
                <div style={{marginBottom:'25px'}}>
                  <img src={userAvatar} alt='profile pic'/>
                  <br />
                  <p><b>{userFName} {userLName}</b></p>
                  <p><b>USERID:{userId}</b></p>
                  <LogoutProfile/> 
                </div>              
            </div>
                
                <form className="add-form w-50" onSubmit={handleSubmit}>
                <h4 style={{marginBottom:'25px'}}>Enter your Current Measurements</h4> 
                    <div className='w-100 input-hold'>
                         <input
                            placeholder=' '
                            type="number"
                            id="data_current_weight"
                            name='data_current_weight'
                            className="w-100 input_"
                            onChange={e => setCurrentUserData({...currentUserData,data_current_weight:e.target.value})}
                         />
                                <label className="fw-bold _label" htmlFor="data_current_weight">CurrentWeight (lbs):</label>
                            </div>
                            <br />
                            <div className='w-100 input-hold'>
                                <input
                                    placeholder=' '
                                    type="number"
                                    id="data_current_waist"
                                    name='data_current_waist'
                                    className="w-100 input_"
                                    onChange={e => setCurrentUserData({...currentUserData,data_current_waist:e.target.value})}
                                />
                                <label className="fw-bold _label" htmlFor="data_current_waist">Current Waist (cm):</label>
                            </div>
                            <br />
                            <div className='w-100 input-hold'>
                                <input
                                    placeholder=' '
                                    type="number"
                                    id="data_current_chest"
                                    name='data_current_chest'
                                    className="w-100 input_"
                                    onChange={e => setCurrentUserData({...currentUserData,data_current_chest:e.target.value})}
                                />
                                <label className="fw-bold _label" htmlFor="data_current_chest">Chest size (cm):</label>
                            </div>
                            <br />
                            <div className='w-100 input-hold'>
                                <input
                                    placeholder=' '
                                    type="number"
                                    id="data_current_shoulders"
                                    name="data_current_shoulders"
                                    className="w-100 input_"
                                    onChange={e => setCurrentUserData({...currentUserData,data_current_shoulders:e.target.value})}
                                />
                                <label className="fw-bold _label" htmlFor="data_current_shoulders">Shoulder size (cm):</label>
                            </div>
                            <br />
                            <div className='w-100 input-hold'>
                                <input
                                    placeholder=' '
                                    type="number"
                                    id="data_current_biceps"
                                    name='data_current_biceps'
                                    className="w-100 input_"
                                    onChange={e => setCurrentUserData({...currentUserData,data_current_biceps:e.target.value})}
                                />
                                <label className="fw-bold _label" htmlFor="data_current_biceps">Bicep size (cm):</label>
                            </div>
                            <br />
                            <div className='w-100 input-hold'>
                                <input
                                    placeholder=' '
                                    type="number"
                                    id="data_current_thighs"
                                    name='data_current_thighs'
                                    className="w-100 input_"
                                    onChange={e => setCurrentUserData({...currentUserData,data_current_thighs:e.target.value})}
                                />
                                <label className="fw-bold _label" htmlFor="data_current_thighs">Thigh size (cm):</label>
                            </div>
                            <br />
                            <div className='w-100 input-hold'>
                                <input
                                    placeholder=' '
                                    type="number"
                                    id="data_current_calves"
                                    name='data_current_calves'
                                    className="w-100 input_"
                                    onChange={e => setCurrentUserData({...currentUserData,data_current_calves:e.target.value})}
                                />
                                <label className="fw-bold _label" htmlFor="data_current_calves">Calve size (cm):</label>
                            </div>
                            <br />
                            <button type="submit" className='btn btn-secondary'>Add My Measurements</button>
                        </form>
                    </div>
    )

}
export default CurrentDataForm