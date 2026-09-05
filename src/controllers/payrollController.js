const payrollService = require("../services/payrollService");

const getPayroll = (req, res) => {

    // Mock Logged-in Employee
    const employeeId = "EMP001";

    const payroll = payrollService.getEmployeePayroll(employeeId);

    if (!payroll) {

        return res.status(404).json({
            success: false,
            message: "Payroll not found"
        });

    }

    return res.json({
        success: true,
        data: payroll
    });

};

module.exports = {
    getPayroll
};