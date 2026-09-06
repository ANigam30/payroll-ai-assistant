
document.getElementById("uploadBtn").addEventListener("click", async () => {

    const fileInput = document.getElementById("payslip");

    if (fileInput.files.length === 0) {
        alert("Please select a PDF.");
        return;
    }

    const formData = new FormData();
    formData.append("payslip", fileInput.files[0]);

    try {

        const response = await fetch("/api/payslip/upload", {
            method: "POST",
            body: formData
        });

        const result = await response.json();

        alert(result.message);

    } catch (err) {

        console.error(err);
        alert("Upload failed.");

    }

});

// ===============================
// Ask AI
// ===============================

document.getElementById("askBtn").addEventListener("click", async () => {

    const question = document.getElementById("question").value.trim();

    if (!question) {
        alert("Please enter a question.");
        return;
    }

    try {

        const response = await fetch("/api/assistant/ask", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                question
            })

        });

        const result = await response.json();

        document.getElementById("response").innerText =
            result.answer || result.message;

    } catch (err) {

        console.error(err);

        document.getElementById("response").innerText =
            "Unable to get AI response.";

    }

});

// ===============================
// Tax Simulation
// ===============================

document.getElementById("taxBtn").addEventListener("click", async () => {

    const investment = document.getElementById("investment").value;

    if (!investment) {
        alert("Please enter an investment amount.");
        return;
    }

    try {

        const response = await fetch("/api/tax/simulate", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                section80CInvestment: investment
            })

        });

        const result = await response.json();

        document.getElementById("taxResult").innerText =
            `Estimated Tax Saving: ₹${result.data.estimatedTaxSaving}`;

    } catch (err) {

        console.error(err);

        document.getElementById("taxResult").innerText =
            "Calculation failed.";

    }

});