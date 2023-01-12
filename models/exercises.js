'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Exercises extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Exercises.init({
    exercise_id: {
      type:DataTypes.INTEGER,
      primaryKey:true,
      allowNull:false,
      autoIncrement:true
    },
    exercise_name: {
      type:DataTypes.STRING,
      allowNull:false
    },
    exercise_muscle_group: {
      type:DataTypes.STRING,
      allowNull:false
    },
    exercise_equipment:{
      type:DataTypes.STRING,
      allowNull: false
    },
    exercise_description: {
      type:DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Exercises',
    tableName: 'exercises',
    timestamps:false
  });
  return Exercises;
};