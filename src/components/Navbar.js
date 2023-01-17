import { useState, useEffect, useContext } from 'react';
import { CurrentUser } from '../context/CurrentUser'; 
import LogoutBtn from './LogoutBtn';

const Navbar = () => {

    const { currentUser } = useContext(CurrentUser); // get the currentUser from the context
    const [index, setIndex] = useState(0);
    const word = "FitTrack";
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

    useEffect(() => {
        const interval = setInterval(() => {
        setIndex(prevIndex => prevIndex + 1);
        }, 100);
        return () => clearInterval(interval);
    }, []);

    return (
        <nav className="navbar navbar-expand-lg px-2 w-100" id='nav'>
            <div id='logo' className='px-3'>
                <a className="navbar-brand fw-bold" href="/"><i>{word.slice(0, index)}</i></a>
                <img id='heart' className='px-2' alt='heart and pulse' src='../../heart-beat-icon-blue.png'></img>
            </div>
            {currentUser?.user ? (
                <div id='user-menu' className='btn-group'>
                    <p className='m-auto' id='greet' style={{color:'white'}}>{viewportWidth > 550 ? `Logged in As: ${currentUser.user.user_f_name} ${currentUser.user.user_l_name}` : viewportWidth > 420 ? `${currentUser.user.user_f_name} ${currentUser.user.user_l_name}` : null}</p>
                    <img className='px-2 img-rounded' src={currentUser.user.user_avatar_url} alt='profile pic'/>
                    <button type="button" id='dropdown' className="btn btn-sm btn-secondary px-2 dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                        <span className="visually-hidden">Toggle Dropdown</span>
                    </button>
                    <ul className="dropdown-menu px-2">
                        {/* following href routes to be changed later to respective routes*/}
                        <li><a className="dropdown-item" href="/profile">Profile</a></li>
                        <li><a className="dropdown-item" href="/workouts">Workout Log</a></li>
                        <li><a className="dropdown-item" href="/meals">Meal Log</a></li>
                        {/*<li><a className="dropdown-item" href="/">Calculators</a></li> */}
                        <LogoutBtn/>
                    </ul>
                </div>
            ) : (
                <div className='w-25 login-hold'>
                    <a className='btn btn-secondary fw-bold' href='/login'> Login </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
