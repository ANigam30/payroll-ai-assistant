const payrolls = require("../../mock-data/payroll.json");

const getPayrollByEmployeeId = (employeeId) => {
    return payrolls.find(
        payroll => payroll.employeeId === employeeId
    );
};

module.exports = {
    getPayrollByEmployeeId
};