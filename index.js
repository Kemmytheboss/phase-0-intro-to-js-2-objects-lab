// Write your solution in this file!
const employee = {
    name: "Verah Mokaya",
    street: "Mombasa Road",
}
function updateEmployeeWithKeyAndValue(employee, key, value){
    return {
        ...employee,
        [key]: value,
    }
}

const updatedEmployee = updateEmployeeWithKeyAndValue(employee, "title", "manager")
console.log(updatedEmployee)
console.log(employee)

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key]= value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key){
    const newEmployee = {...employee}
    delete newEmployee[key]
    return newEmployee
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee
}