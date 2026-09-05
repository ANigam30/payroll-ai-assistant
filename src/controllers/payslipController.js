const payslipService = require("../services/payslipService");

const uploadPayslip = (req, res) => {

    if (!req.file) {
        return res.status(400).json({
            success: false,
            message: "Please upload a PDF."
        });
    }

    const result = payslipService.uploadPayslip(req.file);

    res.json({
        success: true,
        message: "Payslip uploaded successfully.",
        data: result
    });

};

module.exports = {
    uploadPayslip
};