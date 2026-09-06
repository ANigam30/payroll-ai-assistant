const fs = require("fs");
const path = require("path");

const payslipFile = path.join(__dirname, "../../mock-data/payslips.json");

const getPayslips = () => {
    return JSON.parse(fs.readFileSync(payslipFile));
};

const savePayslip = (payslip) => {

    const payslips = getPayslips();

    payslips.push(payslip);

    fs.writeFileSync(
        payslipFile,
        JSON.stringify(payslips, null, 2)
    );

    return payslip;
};

module.exports = {
    savePayslip,
    getPayslips
};