import React, {useContext} from 'react';
import { CurrentUser } from '../context/CurrentUser';
import LogoutProfile from '../components/LogoutProfile';
import IconUserNav from '../components/IconUserNav';

const Profile = () => {
    const {currentUser} =useContext(CurrentUser)   
    const startDate= currentUser?.userdata.data_start_date.substr(0,10)
    return (
        <main className='w-100 mt-3 px-2'>
            { currentUser && currentUser.userdata ? (
                <div>
                    <h1 id='greet' className='fw-bold'>Welcome, {currentUser?.user.user_f_name}!</h1>
                    <h4 id='greet' className='fw-bold'>{`Let's get FIT!!`}</h4>
                    <div className='profile'>
                        <div>
                            <img src={currentUser.user.user_avatar_url} alt='profile pic'/>
                            <br />

                            <p><b>{currentUser?.user.user_f_name} {currentUser?.user.user_l_name}</b></p>
                            <p><b>USERID:{currentUser?.user.user_id}</b></p>
                            <LogoutProfile/>    
                        </div>
                    </div>    
                    <div className="table-responsive">
                        <table className ="table">
                            <thead>
                                <tr>
                                    <th colSpan='7' fontSize='18px'>User Details:</th>   
                                </tr>
                                <tr>
                                    <th scope="col">Start Date</th>
                                    <th scope="col">Start Weight</th>
                                    <th scope="col">Start Waist</th>
                                    <th scope="col">Start Chest</th>
                                    <th scope="col">Start Biceps</th>
                                    <th scope="col">Start Thighs</th>
                                    <th scope="col">Start Calves</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{startDate}</td>
                                    <td>{currentUser?.userdata.data_start_weight}</td>
                                    <td>{currentUser?.userdata.data_start_waist}</td>
                                    <td>{currentUser?.userdata.data_start_chest}</td>
                                    <td>{currentUser?.userdata.data_start_biceps}</td>
                                    <td>{currentUser?.userdata.data_start_thighs}</td>
                                    <td>{currentUser?.userdata.data_start_calves}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>    
                <div style={{textAlign:'center', marginBottom:'50px'}}>
                    <a href={`./currentData`}><button className='btn btn-secondary'>Enter Current Measurements</button></a>
                </div>
                <div  className='w-100 mt-3 px-2'>     
                    <IconUserNav />
                </div> 
           </div>
            ): currentUser ? (
                // add code to navigate to create userData Form
                <div>
                    <h1 id='greet' className='fw-bold'>Welcome, {currentUser?.user.user_f_name}!</h1>
                    <h4 id='greet' className='fw-bold'>Let's get FIT!!</h4>
                    <div className='profile'>
                        <img src={`${currentUser?.user.user_avatar_url}`} alt='profile pic'/><br />
                        <p><b>{currentUser?.user.user_f_name} {currentUser?.user.user_l_name}</b></p>
                        <p><b>USERID:{currentUser?.user.user_id}</b></p>    
                    </div>
                    <h3> No User Details Yet!</h3>
                    <div style={{textAlign:'center', marginBottom:'50px'}}>
                    <a href={`./newdata`}><button className='btn btn-secondary'>Enter Your Starting Measurements</button></a>
                </div>
                </div>
            ) : (
                // code to navigate to login
                <div>
                    <h3 id='loading'>Loading...</h3>
                    {// potentially can be changed to something else, or extend time in case its just taking a while to load?
                    setTimeout(() => {
                        return (
                            <a className='btn btn-secondary' href='/login'>Login?</a>
                        )
                    }, 5000)}
                </div>
            )}
        </main>
    );
};

export default Profile;
