const uploadBtn = document.getElementById("uploadBtn");

uploadBtn.addEventListener("click", async () => {

    const fileInput = document.getElementById("payslip");

    if (fileInput.files.length === 0) {
        alert("Please select a PDF");
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

        console.log(result);

    } catch (err) {
        console.error(err);
        alert("Upload Failed");
    }

});