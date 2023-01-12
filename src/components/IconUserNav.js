import { useContext } from 'react';
import { CurrentUser } from '../context/CurrentUser';

const IconUserNav = () => {
    const { currentUser } = useContext(CurrentUser);

  return (
    <div className='w-100 links mt-3'>
        <a className='w-25 link' href={ !currentUser ? '/login' : '/workouts'}>
            <img className='w-50' alt='dumbbell' src='./fitness-icon.png'/>
        </a>
        <a className='w-25 link' href={ !currentUser ? '/login' : '/meals'}>
            <img className='w-50' alt='healthy-food' src='./healthy-food-icon.png'/>
        </a>
        <a className='w-25 link' href={ !currentUser ? '/login' : '/' /* to be changed later */}>
            <img className='w-50' alt='calculator-icon' src='./calculate-math-icon.png'/>
        </a>
        <a className='w-25 link' href={ !currentUser ? '/login' : '/profile'}>
            <img className='w-50' alt='personal-growth-icon' src='./personal-growth-icon.png'/>
        </a>
        <h2 className='fw-bold mt-3 w-25'>Workout Log</h2>
        <h2 className='fw-bold mt-3 w-25'>Meal Log</h2>
        <h2 className='fw-bold mt-3 w-25'>Calculators</h2>
        <h2 className='fw-bold mt-3 w-25'>Progress</h2>
    </div>
  )
}

export default IconUserNav