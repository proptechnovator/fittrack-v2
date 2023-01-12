# Fitness Tracker 

## Inspiration
Two things we like to do, and share in common. <br />
Working out and Programming. 
We came together build an app that we can personally use, and be proud to share with out friends!

## Details
User will be able to register and login into the Fitness Tracker. <br/>
Once logged in they will be able to update the own personal data to track their progress on their weight and measurements. <br/>
They will also able to log their workouts and meals to track their calorie consumption.<br/>
They will be able to select different exercises to target specific muscle groups.<br/>
The interface will be resizable to view on different size screens. <br/>
<br/>
## Technology
* React - Frontend UI development
* NodeJS  - Backend API development and Testing
* Express - for middleware and routing
* Bootstrap - CSS library for UI Styling
* CSS - UI Styling
* SASS - Prei-processer to format CSS for Readibility 
* Sequelize - ORM to Generate and Migarte Models to Database
* Postgres on AWS RDS - Database
* RapidAPI to access exercises
* Heroku- Web Deployment
* JWT Token Authorization - Security to authenticate user login
* BCrypt - Security to Hash Password
<br/>
<br/>

## Screenshots

### Home

![alt Profile-Snapshot](frontend/public/fittrack-home-snapshot.png/) 

### Profile
![alt Profile-Snapshot](frontend/public/fittrack-profile-snapshot.png/) 

<br/>

## API - Controllers

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
Users 1:1 with UserData on user_id <br>
Users 1:n with Workouts on user_id <br>
Users 1:n with Meals on user_id<br>
Exercises (3rd Party API) <br>
<br/>

## Contributors

[Alex Aguirre](https://github.com/AlexAguirre70) <br>
[Gustavo Martinez ](https://github.com/Gustavo0623) <br>
[Matthew Herrera](https://github.com/Machew115) <br>
