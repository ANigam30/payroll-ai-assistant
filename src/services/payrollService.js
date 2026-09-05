const payrollRepository = require("../repositories/payrollRepository");

const getEmployeePayroll = (employeeId) => {

    return payrollRepository.getPayrollByEmployeeId(employeeId);

};

module.exports = {
    getEmployeePayroll
};