var _ = require('lodash');
var employees = [
  { name: "John", salary: 50000 },
  { name: "Susan", salary: 60000 },
  { name: "Greg", salary: 100000 },
  { name: "Mary", salary: 120000 }
];
_.filter
var dueForARise = _.filter(employees, function(employee){
  return employee.salary < 70000
})

console.log(dueForARise)

//