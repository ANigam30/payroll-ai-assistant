const payslips = [];

const savePayslip = (payslip) => {
    payslips.push(payslip);
    return payslip;
};

module.exports = {
    savePayslip
};