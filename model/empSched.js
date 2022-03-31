const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const Employee = require("./employee");

class EmpSched extends Model {}

EmpSched.init(
  {
    employee_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Employee,
        key: "id",
      },
    },
    start_time: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    end_time: {
      type: DataTypes.TIME,
      allowNull: false,
    },
  },
  { sequelize, timestamps: false, modelName: "EmpSched"}
);

module.exports = EmpSched;
