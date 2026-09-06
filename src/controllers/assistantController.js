const assistantService = require("../services/assistantService");
const payrollService = require("../services/payrollService");

const askAssistant = async (req, res) => {

    const employeeId = req.user.employeeId;

    const payroll = payrollService.getEmployeePayroll(employeeId);

    const { question } = req.body;

    if (!question) {

        return res.status(400).json({
            success: false,
            message: "Question is required"
        });

    }

    const response = await assistantService.askAssistant(
        question,
        payroll
    );

    res.json(response);

};

module.exports = {
    askAssistant
};