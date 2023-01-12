'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Users.init({
    user_id: {
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    user_f_name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    user_l_name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    user_email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    user_password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    user_create_date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date()
    },
    user_avatar_url: {
      type: 'string',
      allowNull: true,
      defaultValue: './profile-photo-icon.jpg'
    },
  }, {
    sequelize,
    modelName: 'Users',
    tableName: 'users',
    timestamps: false
  });
  return Users;
};