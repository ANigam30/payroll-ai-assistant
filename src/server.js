require("dotenv").config();

const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
const payrollRoutes = require("./routes/payrollRoutes");
const multer = require("multer");
const payslipRoutes = require("./routes/payslipRoutes");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve Static Files
app.use(express.static(path.join(__dirname, "../public")));
const storage = multer.diskStorage({
    destination: "uploads/",
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    }
});

const upload = multer({ storage });

app.locals.upload = upload;

// Health Check
app.get("/api/health", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Payroll AI Assistant is running",
        version: "1.0.0"
    });
});

app.use("/api/payroll", payrollRoutes);
app.use("/api/payslip", payslipRoutes);


// Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});

