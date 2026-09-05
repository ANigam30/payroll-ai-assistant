const repository = require("../repositories/payslipRepository");

const uploadPayslip = (file) => {

    const payslip = {
        id: Date.now(),
        employeeId: "EMP001",
        fileName: file.filename,
        uploadedAt: new Date()
    };

    return repository.savePayslip(payslip);

};

module.exports = {
    uploadPayslip
};