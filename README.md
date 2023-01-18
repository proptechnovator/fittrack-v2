# Fitness Tracker 
## Visit our current version here 
https://fittrack-frontend.herokuapp.com/ <br/>
### API
https://fittrack-apiv3.herokuapp.com/
## Inspiration
Compare yourself to who you were yesterday, not to who someone else is today -Jordan Peterson.<br />
Our team consists of not only dedicated programmers but also fitness enthusiasts who strongly value being compassionate to clients' needs/wants in the fitness and developer industry while being a coach or leader for others in their fitness or program team. We constructed a fitness-tracking application for those attempting to monitor meal, workout weight, and progress following along with weight and size proportions. As fitness enjoyers, it's important that we keep a close eye on our progress to determine what we need to change or improve on to maximize progress. <br />
Coming together is a beginning; keeping together is progress; working together is success. -Edward Everett Hale <br />

## Details
User will be able to register and login into the Fitness Tracker. 
<br/>
Once logged in they will be able to update the own personal data to track their progress on their weight and measurements. <br/>
They will also able to log their workouts and meals to track their calorie consumption.<br/>
They will be able to select different exercises to target specific muscle groups.<br/>
The interface will be resizable to view on different size screens. <br/>
<br/>

## Technology
* 	![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
*   ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
*   ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
*   ![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
*   ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
*   ![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white) 
*   ![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)
*   ![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
*   ![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)
*   ![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)
* RapidAPI to access exercises
* BCrypt - Security to Hash Password
<br/>
<br/>

## Screenshots

### Home

![alt Home-Snapshot](public/fittrack-home-snapshot.png/) 

### Profile
![alt Profile-Snapshot](public/fittrack-profile-snapshot.png/) 

<br/>

## API - Controllers
* Local:  http://localhost:5500
* Deployment: https://fittrack-apiv3.herokuapp.com/
<br/>

### Register and Login Authentication
| Method | Path | Purpose |
|--------|------|---------| 
|POST | authentication/ | Authenticate User|
|GET | authentication/profile | Retrieve User data|
<br/>

### Users & UserData
| Method | Path | Purpose |
|--------|------|---------|
|POST | /* | Login and Assign JWT|
|GET | /profile | Get User Data for Profile |
<br/>

### Workouts
| Method | Path | Purpose |
|--------|------|---------|
|GET | / | Get all workout logs for User for selected date|
|POST| / | Create a workout log for User|
|PUT | /:id | Update a workout log for User |
|DELETE| /:id | Delete a workout log for User|
<br/>

### Meals
| Method | Path | Purpose |
|--------|------|---------|
|GET | / | Get all meal logs for User for selected date|
|POST| / | Create a meal log for User|
|PUT | /:id | Update a meal log for User |
|DELETE| /:id | Delete a meal log for User|
<br/>

## Database Structure
![alt Profile-Snapshot](public/FitTrack-ERD.pgerd.png/) 

Users 1:1 with UserData on user_id <br>
Users 1:n with Workouts on user_id <br>
Users 1:n with Meals on user_id<br>
Exercises (3rd Party API) <br>
<br/>

## Issues Encountered

### In Application
Date Selector Input causes crash when attempting to input values with keyboard. 
<br/><br/>
Possible Solution: change method to select date? maybe utilizing a package?

### Deployment
Initially, we attempted to deploy our App using AWS Amplify but due to the app file structure, the build failed.<br/><br/>
Initially, we attempted to deploy our App using AWS Beanstalk but due to the app file structure, the build failed.<br/><br/>
It also required that we install ELB CLI, Python, virtualEnvironment and was requesting to change Windows/System32 files and paths. It's over complicated, so we took another route
<pre><b>Resolution:</b>
Having successfully deployed on Heroku, we chose this for deployment.
We recreated a basic app, deployed on Heroku successfuly the continued to resolve the app file structure</pre>

### File Structure
On our Version 1, we realize that we nested the backend and frontend without server.js and Package.json at the root. <br/>
<pre><b>Resolution:</b> 
We recreated the App with the proper monorepo file structure and copied the code into their respective files.
We needed to update all the relative paths to reflect the new file strutures.
Ran the app and it works great, but ran into the issue of the server running on port 5000, but the frontend not running on Port 3000
</pre>

### Running the APP - not running port 3000
When running npm start from the root folder, it tries to run on PORT 5500, but that is for the server.<br/><br/>
The npm start says there is already an app running on port 5500, and sets the default port to run on port 5501
The app launches fine, but then runs into a CORS issue
<pre><b>Resolution:</b>
We discovered that on the monorepo we needed to launch two separate termials.
We start the server first with Nodemon server.js
and then launch the frontend with NPM Start and click Y to assign a new port
</pre>

### CORS Access Errors
When running the app, we check to see if the CurrentUser is logged in which is done with a fetch request.<br/><br/>
This returns an error on the console on the local client because the origin header shows port: 5001 and does not match the server port:5501.<br/><br/>
On the deployment version, it is trying to hit the path LocalHost:5500, and that doesn't exist on the web server.
<pre><b>Resolution:</b>
On the local machine, we needed to add the methods allowed when using credentials set to true.
Added the origin port to point to 5501
Added the allowed methods to the CORS Options and it cleared all the CORS errors on preflight.
</pre>

### Setting FETCH Path
We set the fetch request to a static path  https://localhost:5000, and the creates an issue with the deployment server.
<pre><b>Resolution:</b>
In order for the app to work on deployment, we needed to create an API and update all the fetch paths to this API
We deployed a separate frontend to access to consume the API
</pre>

## Future Updates
* Connect with 3rd Party API and display search results for specified exercises.
* Implement calculators and routes for each of them. (e.g. Resting-heart-rate, One-rep-max, Macros, Target-heart-rate, BMI, BMR, etc.)
* Connect with 3rd Party API to display Motivational quotes in different routes within app.
* Implement challenges route to give users potential goals to achieve.
* Display graph of progress within profile page.

## Contributors

[Alex Aguirre](https://github.com/AlexAguirre70) <br>
[Gustavo Martinez ](https://github.com/Gustavo0623) <br>
[Matthew Herrera](https://github.com/Machew115) <br>
