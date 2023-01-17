import { useContext } from 'react';
import { CurrentUser } from '../context/CurrentUser';

const IconUserNav = () => {
    const { currentUser } = useContext(CurrentUser);

  return (
        <section className='iconNav'>
          <div>  
               <a className='link' href={ !currentUser ? '/login' : '/workouts'}>
               <img alt='dumbbell' src='./fitness-icon-blue.png'/>
               </a>
               <h2 className='fw-bold mt-3 w-50'>Workout Log</h2>
          </div>
          <div>     
               <a className='link' href={ !currentUser ? '/login' : '/meals'}>
               <img  alt='healthy-food' src='./healthy-food-icon-orange.png'/>
               </a>
               <h2 className='fw-bold mt-3 w-50'>Meal Log</h2>
         </div>    
         <div>
            <a className='link' href={ !currentUser ? '/login' : '/' /* to be changed later */}>
            <img alt='calculator-icon' src='./calculate-math-icon-blue.png'/>
            </a>
            <h2 className='fw-bold mt-3 w-50'>Calculators</h2>
         </div>
         <div>   
            <a className='link' href={ !currentUser ? '/login' : '/profile'}>
            <img alt='personal-growth-icon' src='./personal-growth-icon.png'/>
            </a>
            <h2 className='fw-bold mt-3 w-50'>Progress</h2>
        </div>   
       </section> 
  )
}

export default IconUserNav