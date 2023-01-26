import React, {useContext} from 'react';
import { CurrentUser } from '../context/CurrentUser';
import LogoutProfile from '../components/LogoutProfile';
import IconUserNav from '../components/IconUserNav';
import UserDataForm from '../components/UserDataForm';

const Profile = () => {
    const {currentUser} =useContext(CurrentUser) 
    console.log(currentUser)

    return (
        <main className='w-100 mt-3 px-2'>
            { currentUser?.user && currentUser?.userdata ? (
                <div>
                    <h1 id='greet' className='fw-bold'>Welcome, {currentUser?.user.user_f_name}!</h1>
                    <h4 id='greet' className='fw-bold'>{`Let's get FIT!!`}</h4>
                    <div className='profile'>
                        <div>
                            <img src={currentUser.user.user_avatar_url} alt='profile pic'/>
                            <p className='mt-3'><b>{currentUser?.user.user_f_name} {currentUser?.user.user_l_name}</b></p>
                            <LogoutProfile/>    
                        </div>
                    </div>    
                    <div id='tables'>
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
                                        <td>{currentUser?.userdata.data_start_date.substr(0,10)}</td>
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
                        <div className="table-responsive my-4">
                            <table className ="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Last Update</th>
                                        <th scope="col">Current Weight</th>
                                        <th scope="col">Current Waist</th>
                                        <th scope="col">Current Chest</th>
                                        <th scope="col">Current Biceps</th>
                                        <th scope="col">Current Thighs</th>
                                        <th scope="col">Current Calves</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{currentUser?.userdata?.data_current_date?.substr(0,10) || 'N/A'}</td>
                                        <td>{currentUser?.userdata?.data_current_weight || 'N/A'}</td>
                                        <td>{currentUser?.userdata?.data_current_waist || 'N/A'}</td>
                                        <td>{currentUser?.userdata?.data_current_chest || 'N/A'}</td>
                                        <td>{currentUser?.userdata?.data_current_biceps || 'N/A'}</td>
                                        <td>{currentUser?.userdata?.data_current_thighs || 'N/A'}</td>
                                        <td>{currentUser?.userdata?.data_current_calves || 'N/A'}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>   
                    </div>
                <div style={{textAlign:'center', marginBottom:'50px'}}>
                    <a href={`/currentdata`}><button className='btn btn-secondary'>Enter Current Measurements</button></a>
                </div>
                <div  className='w-100 mt-3 px-2'>     
                    <IconUserNav className='mb-3' />
                </div> 
           </div>
            ): currentUser?.user ? (
                // add code to navigate to create userData Form
                <div>
                    <h1 id='greet' className='fw-bold'>Welcome, {currentUser?.user.user_f_name}!</h1>
                    <h4 id='greet' className='fw-bold'>Let's get FIT!!</h4>

                    <div className='profile'>
                      <div> 
                        <img src={`${currentUser?.user.user_avatar_url}`} alt='profile pic'/><br />
                        <p><b>{currentUser?.user.user_f_name} {currentUser?.user.user_l_name}</b></p>
                        <p><b>USERID:{currentUser?.user.user_id}</b></p>
                        <LogoutProfile/>   
                      </div> 
                    </div>
                    <div style={{textAlign:'center', marginBottom:'50px'}}>
                    <h4 id='greet' style={{marginBottom:'20px'}}> Please enter your starting measurements</h4>   
                    <UserDataForm user_id={currentUser?.user.user_id}/>
                    </div>
                </div>
            ) : (
                // code to navigate to login
                <div className='load'>
                    <img src='../gains-loading.jpg' alt='test'></img>
                    {// potentially can be changed to something else, or extend time in case its just taking a while to load?
                    setTimeout(() => {
                        return (
                            <a style={{display: 'none'}} className='btn btn-secondary' href='/login'>Login?</a>
                        )
                    }, 5000)}
                </div>
            )}
        </main>
    );
};

export default Profile;
