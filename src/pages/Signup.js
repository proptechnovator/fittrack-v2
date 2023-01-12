import { useState } from 'react';
import {useNavigate} from 'react-router-dom'

function Signup() {
    const navigate= useNavigate()

    const [user, setUser] = useState({
        user_f_name: '',
        user_l_name:'',
        user_email: '',
        user_password: '',
    });

    const[error, setError] =useState(null)

    // Declare a state variable for the checkbox and set its initial value to false
    const [showPassword, setShowPassword] = useState(false);   

    async function handleSubmit(e){
        e.preventDefault();
        
        // Make a request to the server to create a new user
        const response = await fetch(`http://localhost:5500/users/`, {

            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body:JSON.stringify(user)
        })
        await response.json()
        if(response.status===200){
            navigate(`/`);
        } else {
            setError('This email is already linked to an account, proceed to login')
        }
    }
      
    return (
        <form className='add-form w-50 mt-4' onSubmit={handleSubmit}>
            <h1> Sign Up </h1>
            {error && <div>{error}  <a href="/login"><button type='button'>Login</button></a></div>}   
            <div className='input-hold w-50 mt-3'>
                <input
                    className='w-100 input_'
                    placeholder=' '
                    type="text"
                    name="user_f_name"
                    id="user_f_name"
                    onChange={e=>setUser({...user,user_f_name:e.target.value})}
                />
                <label className='fw-bold _label' htmlFor="user_f_name">First Name:</label>
            </div>
            <br />
            <div className='input-hold w-50 mt-3'>
                <input
                    className='w-100 input_'
                    placeholder=' '
                    type="text"
                    name="user_l_name"
                    id="user_l_name"
                    onChange={e=>setUser({...user,user_l_name:e.target.value})}
                />
                <label className='fw-bold _label' htmlFor="user_l_name">Last Name:</label>
            </div>
            <br />
            <div className='input-hold w-50 mt-3'>
                <input
                    className='w-100 input_'
                    placeholder=' '
                    type="text"
                    name="user_email"
                    id="user_email"
                    onChange={e=>setUser({...user,user_email:e.target.value})}
                />
                <label className='fw-bold _label' htmlFor="user_email">Email:</label>
            </div>
            <br />
            <div className='input-hold w-50 mt-3'>
                <input
                    className='w-100 input_'
                    placeholder=' '
                    type={showPassword ? "text" : "password"} 
                    name="user_password"
                    id="user_password"
                    onChange={e=>setUser({...user,user_password:e.target.value})}
                />
                <label className='fw-bold _label' htmlFor="user_password">Password:</label>
            </div>
            {/* Add a checkbox input field and bind it to the showPassword state variable */}
            <div className='show-pw w-50 mt-1'>
                <input type="checkbox" id='show-pw' checked={showPassword} onChange={e => setShowPassword(e.target.checked)} />
                <label htmlFor='show-pw' className='px-2'>Show Password</label>
            </div>
            <button className='btn btn-secondary mt-5 w-50 fw-bold' type="submit">Sign up</button>
        </form>
    );
};

export default Signup;
