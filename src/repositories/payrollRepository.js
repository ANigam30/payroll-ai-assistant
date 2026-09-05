const payrolls = require("../../mock/payroll.json");

const getPayrollByEmployeeId = (employeeId) => {
    return payrolls.find(
        payroll => payroll.employeeId === employeeId
    );
};

module.exports = {
    getPayrollByEmployeeId
};