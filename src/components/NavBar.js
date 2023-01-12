import React, { /*useEffect,*/ useContext } from 'react';
import { CurrentUser } from '../context/CurrentUser'; 
import LogoutBtn from './LogoutBtn';

const Navbar = () => {

    const { currentUser } = useContext(CurrentUser); // get the currentUser from the context


    return (
        <nav className="navbar navbar-expand-lg px-2 w-100" id='nav'>
            <div id='logo' className='px-3'>
                <a className="navbar-brand fw-bold" href="/"><i>FitTrack</i></a>
                <img id='heart' className='px-2' alt='heart and pulse' src='../../heart-beat-icon.png'></img>
            </div>
            {currentUser ? (
                <div id='user-menu' className='btn-group'>
                    <img className='px-2 img-rounded' style={{height:'auto',width:'60px'}} src={currentUser.user.user_avatar_url} alt='profile pic'/>
                    <button type="button" id='dropdown' className="btn btn-sm btn-secondary px-2 dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                        <span className="visually-hidden">Toggle Dropdown</span>
                    </button>
                    <ul className="dropdown-menu px-2">
                        {/* following href routes to be changed later to respective routes*/}
                        <li><a className="dropdown-item" href="/profile">Profile</a></li>
                        <li><a className="dropdown-item" href="/workouts">Workout Log</a></li>
                        <li><a className="dropdown-item" href="/meals">Food Log</a></li>
                        <li><a className="dropdown-item" href="/">Calculators</a></li> {/* to implement later */}
                        <LogoutBtn/>
                    </ul>
                </div>
            ) : (
                <div className='w-25 login-hold'>
                    <a className='btn btn-secondary' href='/login'> Login </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
