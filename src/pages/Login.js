import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CurrentUser } from '../context/CurrentUser'

function Login() {
    const { setCurrentUser } = useContext(CurrentUser);
    const[credentials,setCredentials]= useState({
        user_email:'',
        user_password: ''
    })
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    
    // Declare a state variable for the checkbox and set its initial value to false
    const [showPassword, setShowPassword] = useState(false);   

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
        const input = document.querySelector('input');

        input.addEventListener('focus', () => {
        input.classList.add('focused');
        });

        input.addEventListener('blur', () => {
        input.classList.remove('focused');
        });

    }, []);


    async function handleSubmit(e) {
        e.preventDefault();
                // send a request to the server to verify the email and password
        const response = await fetch('https://fittrack-apiv3.herokuapp.com/authentication', { // to be changed to server route.
            method: 'POST',
            credentials: 'include',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials)
        });
        const data = await response.json();
        if (response.status === 200) {
            setCurrentUser(data.user);
            localStorage.setItem('token',data.token)
            let getResponse = await fetch('https://fittrack-apiv3.herokuapp.com/authentication/profile', {
                credentials: 'include', 
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                }
            })
            
            let user = await getResponse.json()       
            setCurrentUser(user)
            // navigate to the home page if login was successful
            navigate(`/profile`);

        } else {
            // display an error message if login failed
            setError('Invalid email or password');
        }
        
    };

    useEffect(() => {
        // clear the error message when the email or password changes
        setError(null);
    }, [credentials.user_email, credentials.user_password]);

    return (
        <form className={ viewportWidth >= 720 ? "add-form w-50" : viewportWidth >= 480 ? "add-form w-75" : "add-form w-100"}>
            <h1> Login </h1>
            <div className='input-hold w-75 mt-3'> 
            {error && <p>{error}</p>}
                <input
                className='w-100 input_'
                type='text'
                required
                placeholder=' '
                name = 'user_email'
                id='user_email'
                value={credentials.user_email}
                onChange={(event) => setCredentials({...credentials,user_email:event.target.value})}
            />
            <label className='fw-bold _label' htmlFor='user_email'>Email:</label>
            </div>
            
            <br />
            <div className='input-hold w-75'>
            <input 
                className='w-100 input_'
                type={showPassword ? "text" : "password"} 
                required
                placeholder=' '
                name="user_password"
                id='user_password' 
                value={credentials.user_password}
                onChange={(event) => setCredentials({...credentials,user_password:event.target.value})}
            />
            <label htmlFor='user_password'className='fw-bold _label'> Password:</label>
            </div>
            <br />
            {/* Add a checkbox input field and bind it to the showPassword state variable */}
            <div className='show-pw w-75'>
                <input type="checkbox" id='show-pw' checked={showPassword} onChange={e => setShowPassword(e.target.checked)} />
                <label id='pw' htmlFor='show-pw' className='px-2 fw-bold'>Show Password</label>
                <a className='sign-up fw-bold' href='/signup'>Sign Up?</a>
            </div>
            
            <button className='btn btn-secondary mt-4 w-50 fw-bold' type="submit" onClick={handleSubmit}>Login</button>
        </form>
    );
}

export default Login;
