// Write your solution in this file!
// Write your solution in this file!
const employee ={
    name:`Derrick`,
    streetAddress: `11 Broadway`
};
//
function updateEmployeeWithKeyAndValue(employee,name,Derrick){
    return {
        ...employee,
        [name]: Derrick,
    }; 
}

//
function destructivelyUpdateEmployeeWithKeyAndValue(employee){
employee.streetAddress ="12 Broadway";
return employee;
}

//
function deleteFromEmployeeByKey(employee){
const {name, ...newemployee} = employee;
return newemployee;
}

//
function destructivelyDeleteFromEmployeeByKey(employee){
 employee.name = undefined;
 return employee;
}