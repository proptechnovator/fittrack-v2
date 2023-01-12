'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserData extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserData.init({
    data_user_id:{ 
      type:DataTypes.INTEGER,
      primaryKey:true,
      references:{model:'users',key: 'user_id'},
      allowNull:false
    },
    data_start_date: {
      type:DataTypes.DATE,
      allowNull:true
    },
    data_current_date:{
      type:DataTypes.DATE,
      allowNull:true
    },
    data_start_weight: {
      type:DataTypes.DECIMAL(5,2),
      allowNull:true
    },
    data_current_weight:  {
      type:DataTypes.DECIMAL(5,2),
      allowNull:true
    },
    data_start_waist: {
      type:DataTypes.DECIMAL(5,2),
      allowNull:true
    },
    data_current_waist:  {
      type:DataTypes.DECIMAL(5,2),
      allowNull:true
    },
    data_start_chest: {
      type:DataTypes.DECIMAL(5,2),
      allowNull:true
    },
    data_current_chest:  {
      type:DataTypes.DECIMAL(5,2),
      allowNull:true
    },
    data_start_shoulders:  {
      type:DataTypes.DECIMAL(5,2),
      allowNull:true
    },
    data_current_shoulders:  {
      type:DataTypes.DECIMAL(5,2),
      allowNull:true
    },
    data_start_biceps: {
      type:DataTypes.DECIMAL(5,2),
      allowNull:true
    },
    data_current_biceps: {
      type:DataTypes.DECIMAL(5,2),
      allowNull:true
    },
    data_start_thighs:  {
      type:DataTypes.DECIMAL(5,2),
      allowNull:true
    },
    data_current_thighs:  {
      type:DataTypes.DECIMAL(5,2),
      allowNull:true
    },
    data_start_calves:  {
      type:DataTypes.DECIMAL(5,2),
      allowNull:true
    },
    id:  {
      type:DataTypes.INTEGER,
      allowNull:true
    }

  }, {
    sequelize,
    modelName: 'UserData',
    tableName: 'userdata',
    timestamps:false
  });
  return UserData;
};