require('dotenv').config()

module.exports={
    "development": {
      "username": process.env.DB_USERNAME,
      "password": process.env.DB_PASSWORD,
      "database": process.env.DB_DATABASE,
      "host": "fitness-tracker.ceyn1sqqjawo.us-west-2.rds.amazonaws.com",
      "port":5432,
      "dialect": "postgres",
      "logging": false
    },
    "test": {
      "username": process.env.DB_USERNAME,
      "password": process.env.DB_PASSWORD,
      "database": process.env.DB_DATABASE,
      "host": "fitness-tracker.ceyn1sqqjawo.us-west-2.rds.amazonaws.com",
      "port":5432,
      "dialect": "postgres"
    },
    "production": {
      "username":process.env.DB_USERNAME,
      "password": process.env.DB_PASSWORD,
      "database": process.env.DB_DATABASE,
      "host": "fitness-tracker.ceyn1sqqjawo.us-west-2.rds.amazonaws.com",
      "port":5432,
      "dialect": "postgres"
    }
  }