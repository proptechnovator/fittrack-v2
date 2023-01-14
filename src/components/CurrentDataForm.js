import React,{useState, useContext} from 'react';
import { useNavigate } from 'react-router';
import LogoutProfile from './LogoutProfile';
import { CurrentUser } from '../context/CurrentUser'

function CurrentDataForm() {
    const {currentUser} = useContext(CurrentUser)
    const userId = currentUser?.user.user_id
    const userFName = currentUser?.user.user_f_name
    const userLName = currentUser?.user.user_l_name
    const userAvatar = currentUser?.user.user_avatar_url
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


    // refactored the useState for the variables
    /*const params= new URLSearchParams(window.location.search)
    const dataId = params.get('data_id')
    const userId = params.get('user_id')
    const userFName = params.get('user_f_name')
    const userLName = params.get('user_l_name')
    const userAvatar = params.get('user_avatar')*/

    const [currentUserData,setCurrentUserData] = useState({
        data_current_date: new Date(),
        data_current_weight: 0,
        data_current_waist: 0,
        data_current_chest: 0,
        data_current_shoulders: 0,
        data_current_biceps: 0,
        data_current_thighs: 0,
        data_current_calves: 0,
        });
    const navigate= useNavigate()
    //Handle form submission
    async function handleSubmit(event) {
        event.preventDefault();
        
        //send the current userdata object to the server
        const response= await fetch(`/addData/${userId}`, {
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
                
            <form className={ viewportWidth >= 720 ? "add-form w-50" : viewportWidth >= 480 ? "add-form w-75" : "add-form w-100"} onSubmit={handleSubmit}>
                <h4 style={{marginBottom:'25px'}}>Current Measurements</h4> 
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
                <button type="submit" className='btn btn-secondary mb-4'>Add My Measurements</button>
            </form>
        </div>
    )
}
export default CurrentDataForm