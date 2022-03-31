const { MedicalHistory } = require("../model");

const medhistoryData = [
  {
    year: 2021 - 11 - 27,
    condition: "heartache",
    surgeries: "",
    medication: "1",
    employees_id: "1",
    patients_id: "1"
  },
  
];

const seedMedHistory = () => MedicalHistory.bulkCreate(medhistoryData);

module.exports = seedMedHistory;
