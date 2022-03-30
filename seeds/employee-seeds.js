const { Employee } = require('../model')

const employeesData = [
  {
    name: "Kien Hoang",
    sex: "male",
    title: "doctor",
    dob: new Date('11/27/2011'),
    mobile: "123456789",
    email: "test@gmail.com",
    salary: 100000
  },
  {
    name: "Sean Cruz",
    sex: "male",
    title: "doctor",
    dob: new Date('11/29/2011'),
    mobile: "123456789",
    email: "test@gmail.com",
    salary: 100000
  },
  {
    name: "Hye Won Park ",
    sex: "male",
    title: "doctor",
    dob: new Date('11/27/2011'),
    mobile: "123456789",
    email: "test@gmail.com",
    salary: 100000
  },
  {
    name: "Brendan Sandfer",
    sex: "male",
    title: "doctor",
    dob: new Date('11/27/2011'),
    mobile: "123456789",
    email: "test@gmail.com",
    salary: 100000
  }
]

const seedEmployees = () => Employee.bulkCreate(employeesData)

module.exports = seedEmployees