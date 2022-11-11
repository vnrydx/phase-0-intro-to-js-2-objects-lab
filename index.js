// Write your solution in this file!
const employee = {
    name: "michael", 
    }

function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newObj = {...obj};
    newObj[key] = value;
    return newObj;
}

const updatedEmployee = updateEmployeeWithKeyAndValue(
    employee, "streetAddress", "location");

console.log(updatedEmployee);

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
}

function deleteFromEmployeeByKey(obj, key) {
    const newnewObj = {...obj};
    delete newnewObj[key];
    return newnewObj;
}

console.log(deleteFromEmployeeByKey(updatedEmployee, "streetAddress"));

function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj[key];
    return obj;
}

console.log(destructivelyDeleteFromEmployeeByKey(
    updatedEmployee, "streetAddress"));