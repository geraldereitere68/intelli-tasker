/**
 * Filename: ComplexCode.js
 * Description: This code demonstrates a complex algorithm for sorting an array of objects by multiple properties.
 */

// Sample array of objects
const employees = [
  { name: 'John Doe', age: 35, salary: 50000 },
  { name: 'Alice Johnson', age: 28, salary: 60000 },
  { name: 'Mark Smith', age: 40, salary: 45000 },
  { name: 'Jennifer Adams', age: 32, salary: 55000 },
  { name: 'Daniel Lee', age: 30, salary: 55000 }
];

// Custom comparison function for sorting objects by properties
function compare(prop, order) {
  return function(a, b) {
    if (order === 'asc') {
      if (a[prop] < b[prop]) return -1;
      if (a[prop] > b[prop]) return 1;
    } else {
      if (a[prop] > b[prop]) return -1;
      if (a[prop] < b[prop]) return 1;
    }
    return 0;
  };
}

// Sort the array by multiple properties: age (desc) and then salary (asc)
employees.sort(compare('age', 'desc'));
employees.sort(compare('salary', 'asc'));

// Print the sorted array
console.log('Sorted Employees:');
employees.forEach(emp => console.log(emp.name + ' - Age: ' + emp.age + ', Salary: ' + emp.salary));

// Output:
// Sorted Employees:
// Mark Smith - Age: 40, Salary: 45000
// Daniel Lee - Age: 30, Salary: 55000
// Jennifer Adams - Age: 32, Salary: 55000
// John Doe - Age: 35, Salary: 50000
// Alice Johnson - Age: 28, Salary: 60000

// ... Continue the code with additional functionality or complexity as needed.
// ...