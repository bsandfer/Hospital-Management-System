const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class MedicalHistory extends Model {}

MedicalHistory.init({
  patient_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Patient,
      key: "id",
    }
  },
  year: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  condition: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  surgeries: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  medication: {
    type: DataTypes.STRING,
    allowNull: false,
  }
},
  { sequelize, timestamps: false, modelName: "Medicalhistory" });

module.exports = MedicalHistory;
