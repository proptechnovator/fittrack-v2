'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Workouts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Workouts.init({
    workout_id:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true,
      allowNull:false
    },
    workout_user_id: {
    type:DataTypes.INTEGER,
    references:{model: 'users', key: 'user_id'},
    allowNull:true
    },
    workout_date: {
      type:DataTypes.DATE,
      allowNull:true
    },
    workout_muscle_group:{
      type:DataTypes.STRING,
      allowNull:true
    },
    workout_exercise:{
      type:DataTypes.STRING,
      allowNull: true
    },
    workout_sets: {
      type:DataTypes.INTEGER,
      allowNull:true
    },
    workout_reps: {
      type:DataTypes.INTEGER,
      allowNull:true
    },
    workout_weight:{
      type:DataTypes.INTEGER,
      allowNull:true
    },
    workout_duration:{
      type:DataTypes.STRING,
      allowNull:true
    }, 
   }, {
    sequelize,
    modelName: 'Workouts',
    tableName: 'workouts',
    timestamps: false
  });
  return Workouts;
};