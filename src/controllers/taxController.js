const taxService = require("../services/taxService");

const simulateTax = (req, res) => {

    const { section80CInvestment } = req.body;

    if (section80CInvestment === undefined) {
        return res.status(400).json({
            success: false,
            message: "section80CInvestment is required"
        });
    }

    const result = taxService.simulateTaxSaving(section80CInvestment);

    return res.json({
        success: true,
        data: result
    });
};

module.exports = {
    simulateTax
};