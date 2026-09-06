const axios = require("axios");

const askAssistant = async (question, payrollData) => {

    const prompt = `
You are an internal payroll assistant.

Rules:
1. Answer ONLY using the payroll information below.
2. Do not invent salary, tax or deduction values.
3. If information is unavailable, clearly say it.
4. Explain in simple employee-friendly language.

Payroll Information:
${JSON.stringify(payrollData, null, 2)}

Employee Question:
${question}
`;

    try {

        const response = await axios.post(
            process.env.LLM_API_URL,
            {
                prompt
            },
            {
                headers: {
                    Authorization: `Bearer ${process.env.LLM_API_TOKEN}`,
                    "Content-Type": "application/json"
                }
            }
        );

        return {
            success: true,
            answer: response.data
        };

    } catch (error) {

        console.error(error.response?.data || error.message);

        return {
            success: false,
            message: "Unable to get AI response from LLM service.",
            error: error.response?.data || error.message
        };
    }

};

module.exports = {
    askAssistant
};