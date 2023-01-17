import IconUserNav from '../components/IconUserNav';
import { useState } from 'react';

const Home = () => {
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

    return (
        <main className='w-100 mt-3 px-2'>
            <h1 className='fw-bold b-2'> Stay On Track With FitTrack!</h1> 
           <section>
                <div>
                    <h2>Sweat, Smile and Repeat</h2>
                    <h3>Track your Meal, Logs and Calculate your BMI</h3>
                    <button action='./signup'>Create Your Free Account</button>   
                </div>
                <div className='divimage'>
                    <img src='../hero-bodybuilder_50.png' alt='bodybuilder' />
                </div>
           </section> 
           
            <IconUserNav/>
            
            <div className={ viewportWidth >= 720 ? 'add-form w-50 mt-4' : 'add-form w-100 mt-4'}>
                <div className='input-hold w-75 mt-3'>
                    <input 
                        className='w-100 input_' 
                        type='text'
                        placeholder=' '
                        name = 'search'
                        id='search'
                    />
                    <label className='fw-bold _label' htmlFor='search' style={{color: '#ff6c2c'}}> Search </label> 
                    <img className='search' alt='search-icon' src='./search-icon-blue.png'/> {/* To add functionality to create a search request to the api when button clicked... */}
                </div>
            </div>
        </main>
    )
};

export default Home;

