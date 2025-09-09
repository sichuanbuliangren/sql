const Mock = require('mockjs')
const result = Mock.mock({
  "datas|500-700": [
    {
      name: "@cname",
      birthday: "@date",
      "sex|1-2": true,
      mobile: /1[3-9]\d{9}/,
      "ClassId|1-4": 1
    }
  ]
}).datas

console.log(result)
const Student = require('../models/Student')
Student.bulkCreate(result);