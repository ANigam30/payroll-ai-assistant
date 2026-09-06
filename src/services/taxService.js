const TAX_RATE = 0.20;
const SECTION_80C_LIMIT = 150000;

const simulateTaxSaving = (investment) => {

    const amount = Number(investment);

    const eligibleAmount = Math.min(amount, SECTION_80C_LIMIT);

    const estimatedTaxSaving = eligibleAmount * TAX_RATE;

    return {
        investment: amount,
        eligibleAmount,
        estimatedTaxSaving,
        assumptions: {
            section80CLimit: SECTION_80C_LIMIT,
            assumedTaxRate: "20%"
        }
    };
};

module.exports = {
    simulateTaxSaving
};