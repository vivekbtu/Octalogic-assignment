const { DataTypes } = require('sequelize');
const sequelize = require('../db/connection');

const Vehicle = sequelize.define('Vehicle', {
    type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false
    },
    wheels: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  
  // Define Booking model
  const Booking = sequelize.define('Booking', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    vehicleModel: {
      type: DataTypes.STRING,
      allowNull: false,
      
    },
    vehicleType: {
      type: DataTypes.STRING,
      allowNull: false
    },
    wheels: {
      type: DataTypes.STRING,
      allowNull: false
    },
    startDate: {
      type: DataTypes.DATE
    },
    endDate: {
      type: DataTypes.DATE
    }
  });

(async () => {
    await sequelize.sync();
    console.log("All models were synchronized successfully.");
  })();

module.exports = { Vehicle, Booking };
